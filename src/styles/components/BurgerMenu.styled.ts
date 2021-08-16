import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: fixed;
  top: 5%;
  left: 85%;

  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: space-around;

  width: 2.5rem; 
  height: 2.5rem;
  border-radius: .5rem;

  background-color: #FFF;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 10;

  &:hover {
    background-color: #fff;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ isOpened }) => isOpened ? '#3671E9' : '#0D0D2B'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    padding: 0;

    :first-child {
      transform: ${({ isOpened }) => isOpened 
        ? 'rotate(45deg) translateX(10%) translateY(-95%)' 
        : 'rotate(0) translateX(0) translateY(0)'
      };
    }

    :nth-child(2) {
      opacity: ${({ isOpened }) => isOpened ? '0' : '1'};
      transform: ${({ isOpened }) => isOpened ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ isOpened }) => isOpened 
        ? 'rotate(-45deg) translateX(0%) translateY(110%)' 
        : 'rotate(0) translateX(0) translateY(0)'
      };
    }
  }
`;