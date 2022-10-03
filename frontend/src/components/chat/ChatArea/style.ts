/* eslint-disable no-nested-ternary */
import styled from '@emotion/styled';

interface WrapperProps {
  open: boolean;
}

interface ChatProps {
  isMine: boolean;
  checkSameUser?: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: ${({ open }) => (open ? '0' : '-400px')};
  width: 400px;
  height: 100%;
  background: #506ea5;
  transition: all ease 1s;
`;

const ChatListWrapper = styled.div`
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Button = styled.button`
  color: #fff;
  width: 45px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-image: linear-gradient(45deg, #323c73 50%, #506ea5 50%);
  background-position: 100%;
  background-size: 400%;
  &:hover {
    cursor: pointer;
    background-position: 0;
    transition: background ease-in-out 0.3s;
  }
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

const Chat = styled.p<ChatProps>`
  padding: 8px;
  background: #fff;
  color: #000;
  border-radius: 6px;
  width: fit-content;
  max-width: 250px;
  word-break: break-all;
  ${({ isMine, checkSameUser }) =>
    !isMine ? (checkSameUser ? 'margin-left:45px;' : 'margin-left:5px;') : ''}

  &::after {
    position: absolute;
    content: '';
    ${({ isMine, checkSameUser }) =>
      isMine
        ? `
    right:20px;
    border-left: 7px solid #fff;
    border-bottom: 7px solid transparent;
    `
        : `
    left: 49px;
    ${checkSameUser ? 'top:10px;' : 'top:30px;'}
    border-right: 7px solid #fff;
    border-bottom: 7px solid transparent;
    `}
  }
`;

const Who = styled.p`
  padding: 2px 8px;
`;

Chat.defaultProps = {
  checkSameUser: false,
};

export { Wrapper, ChatListWrapper, Button, ChatWrapper, Chat, Who };
