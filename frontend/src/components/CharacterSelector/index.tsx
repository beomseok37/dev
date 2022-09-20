import { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from 'react-icons/io';

import Row from 'src/components/Grid/Row';
import Column from 'src/components/Grid/Column';

import {
  CHARACTERURL1,
  CHARACTERURL2,
  CHARACTERURL3,
  CHARACTERURL4,
  CHARACTERURL5,
} from 'src/constant/charater';

import { selectUser, changeCharacter } from 'src/redux/reducer/user';

import { Title, ToggleButtonWrapper, ImageWrapper } from './style';

function CharacterSelector(): ReactElement {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Row width="576px" height="110px" background="#506EA5">
      <Column height="120px">
        <Title>choose character</Title>
        <Row>
          <Column
            width="80px"
            height="100%"
            position="relative"
            onClick={() => {
              if (user.character !== CHARACTERURL1) {
                dispatch(changeCharacter(1));
              }
            }}
          >
            <ToggleButtonWrapper>
              {user.character === CHARACTERURL1 ? (
                <IoMdRadioButtonOn color="white" />
              ) : (
                <IoMdRadioButtonOff color="white" />
              )}
            </ToggleButtonWrapper>
            <ImageWrapper>
              <Image
                src={CHARACTERURL1}
                width="1200px"
                height="80px"
                layout="fixed"
              />
            </ImageWrapper>
          </Column>
          <Column
            width="80px"
            height="100%"
            position="relative"
            onClick={() => {
              if (user.character !== CHARACTERURL2) {
                dispatch(changeCharacter(2));
              }
            }}
          >
            <ToggleButtonWrapper>
              {user.character === CHARACTERURL2 ? (
                <IoMdRadioButtonOn color="white" />
              ) : (
                <IoMdRadioButtonOff color="white" />
              )}
            </ToggleButtonWrapper>
            <ImageWrapper>
              <Image
                src={CHARACTERURL2}
                width="1200px"
                height="80px"
                layout="fixed"
              />
            </ImageWrapper>
          </Column>
          <Column width="80px" height="100%">
            <ToggleButtonWrapper>
              {user.character === CHARACTERURL3 ? (
                <IoMdRadioButtonOn color="white" />
              ) : (
                <IoMdRadioButtonOff color="white" />
              )}
            </ToggleButtonWrapper>
          </Column>
          <Column width="80px" height="100%">
            <ToggleButtonWrapper>
              {user.character === CHARACTERURL4 ? (
                <IoMdRadioButtonOn color="white" />
              ) : (
                <IoMdRadioButtonOff color="white" />
              )}
            </ToggleButtonWrapper>
          </Column>
          <Column width="80px" height="100%">
            <ToggleButtonWrapper>
              {user.character === CHARACTERURL5 ? (
                <IoMdRadioButtonOn color="white" />
              ) : (
                <IoMdRadioButtonOff color="white" />
              )}
            </ToggleButtonWrapper>
          </Column>
        </Row>
      </Column>
    </Row>
  );
}

export default CharacterSelector;
