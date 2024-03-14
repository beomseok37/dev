import { ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';

import CharacterImage from 'src/components/MiniMe/CharacterImage';
import CharacterSetModal from 'src/components/modals/CharacterSetModal';

import { selectUser } from 'src/redux/reducer/user';

import useHover from 'src/hooks/useHover';

import MinimeModal from 'src/components/modals/MinimeModal';

import { Wrapper, Title, Button, Balloon } from './style';

interface props {
  pageName: string;
}

function Header({ pageName }: props): ReactElement {
  const user = useSelector(selectUser);

  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(user.username !== 'undefined');
  const [characterImageHoverRef, isCharacterImageHoverRef] =
    useHover<HTMLDivElement>();

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  const handleCloseSelectModal = () => setIsSelected(true);
  const handleOpenSelectModal = () => setIsSelected(false);

  return (
    <Wrapper>
      <Title>{pageName} page</Title>
      <Button onClick={handleOpenModal} aria-label="미니미 시작 버튼">
        <CharacterImage
          character={user.character}
          border="1px solid #000"
          ref={characterImageHoverRef}
          isAbsolute
        />
        {isCharacterImageHoverRef && <Balloon>미니미 입장</Balloon>}
      </Button>
      {isOpen &&
        (isSelected ? (
          <MinimeModal
            onOpenSelectModal={handleOpenSelectModal}
            onClose={handleCloseModal}
          />
        ) : (
          <CharacterSetModal
            onCloseSelectModal={handleCloseSelectModal}
            onClose={handleCloseModal}
          />
        ))}
    </Wrapper>
  );
}

export default Header;
