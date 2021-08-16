import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100vh;
  padding: 2rem;
  z-index: 1;

  background: #0D0D2B;
  text-align: left;

  position: fixed; 
  top: 0;
  left: 0;

  transform: ${({ isOpened }) => isOpened ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: 700px) {
    width: 70%;
  } 

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #FFF;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 700px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #3671E9;
    }
  }
`;