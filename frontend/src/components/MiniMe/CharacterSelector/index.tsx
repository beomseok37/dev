import { Dispatch, ReactElement, SetStateAction } from 'react';
import Image from 'next/image';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io';

import Row from 'src/components/base/Grid/Row';
import Column from 'src/components/base/Grid/Column';

import {
  CHARACTERURL1,
  CHARACTERURL2,
  CHARACTERURL3,
  CHARACTERURL4,
  CHARACTERURL5,
} from 'src/constant/character';

import { Title, ToggleButtonWrapper, ImageWrapper } from './style';

interface Props {
  characterBind: [string, Dispatch<SetStateAction<string>>];
  handleFocus: () => void;
}

function CharacterSelector({
  characterBind,
  handleFocus,
}: Props): ReactElement {
  const [character, setCharacter] = characterBind;

  const characterURLList = [
    CHARACTERURL1,
    CHARACTERURL2,
    CHARACTERURL3,
    CHARACTERURL4,
    CHARACTERURL5,
  ];

  return (
    <Row width="500px" height="110px" alignItems="center">
      <Column width="100px" borderRight="1px solid #fff">
        <Title>Select</Title>
        <Title>character</Title>
      </Column>
      <Row height="100%">
        {characterURLList.map((characterURL) => (
          <Column
            key={characterURL}
            width="80px"
            height="100%"
            position="relative"
            alignItems="center"
            padding="15px 0 0 0"
            onClick={() => {
              if (character !== characterURL) {
                setCharacter(characterURL);
              }
              handleFocus();
            }}
          >
            <ToggleButtonWrapper>
              {character === characterURL ? (
                <IoMdRadioButtonOn color="white" />
              ) : (
                <IoMdRadioButtonOff color="white" />
              )}
            </ToggleButtonWrapper>
            <ImageWrapper>
              <Image
                src={characterURL}
                width="1100px"
                height="80px"
                layout="fixed"
                alt="캐릭터 이미지"
              />
            </ImageWrapper>
          </Column>
        ))}
      </Row>
    </Row>
  );
}

export default CharacterSelector;
