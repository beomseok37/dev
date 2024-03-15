/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';

interface WrapperProps {
  open: boolean;
}

interface ChatProps {
  isMine: boolean;
  checkSameUser?: boolean;
}

interface ButtonProps {
  isInputEmpty: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 2;
  right: ${({ open }) => (open ? '0' : '-400px')};
  width: 400px;
  height: 100%;
  background: #9bbbd4;
  transition: all ease 1s;
`;

const ChatListWrapper = styled.div`
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 13px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background: #ccc;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
    padding: 2px;
  }
`;

const ButtonWrapper = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button<ButtonProps>`
  ${({ isInputEmpty }) =>
    isInputEmpty
      ? `
    background: #eee;
    color:#000;
  `
      : `
      background:#fef01b;
      color:#000;
      &:hover {
        cursor: pointer;
      }
      `}
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-weight: normal;
  font-size: 14px;
`;
const ChatWrapper = styled.div<ChatProps>`
  position: relative;
  display: flex;
  justify-content: ${({ isMine }) => (isMine ? 'flex-end' : 'flex-start')};
  ${({ isMine }) => (isMine ? 'padding-right:25px' : 'padding-left:10px')};
  width: 400px;
  box-sizing: border-box;
  margin: 10px 0;
`;

const Chat = styled.div<ChatProps>`
  position: relative;
  padding: 8px;
  background: #fef01b;
  color: #000;
  border-radius: 6px;
  width: fit-content;
  max-width: 250px;
  word-break: break-all;
  font-weight: normal;
  white-space: pre-wrap;
  ${({ isMine, checkSameUser }) =>
    !isMine ? (checkSameUser ? 'margin-left:45px;' : 'margin-left:5px;') : ''}

  ${({ isMine, checkSameUser }) =>
    checkSameUser
      ? ''
      : `&::after {
      position: absolute;
      content: '';
      ${
        isMine
          ? `
      right:-6px;
      top:8px;
      border-left: 7px solid #fef01b;
      border-bottom: 7px solid transparent;
      `
          : `
      left: -6px;
      top: 10px;
      border-right: 7px solid #fef01b;
      border-bottom: 7px solid transparent;
      `
      }
    }`}
`;

const Who = styled.p`
  padding: 2px 8px;
  font-weight: normal;
`;

const Time = styled.p<ChatProps>`
  position: absolute;
  ${({ isMine }) => (isMine ? 'left:-27px;' : 'right: -25px;')}
  bottom: 0;
  font-size: 10px;
  color: #556677;
`;

const TextArea = styled.textarea`
  padding: 8px 0 8px 8px;
  width: 310px;
  height: 90px;
  box-sizing: border-box;
  background: transparent;
  font-size: 16px;
  font-family: inherit;
  border: 0;
  outline: 0;
  resize: none;
`;

Chat.defaultProps = {
  checkSameUser: false,
};

export {
  Wrapper,
  ChatListWrapper,
  Button,
  ButtonWrapper,
  ChatWrapper,
  Chat,
  Who,
  Time,
  TextArea,
};
