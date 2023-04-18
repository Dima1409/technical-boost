import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Text = styled.p`
display: flex;
justify-content: center;
align-items: center;
padding: 40px;
font-size: 28px;
  opacity: 0;
  animation: ${fadeInAnimation} 2s ease-in-out forwards;
  text-shadow: 0 0 40px #471ca9;
`;

export {Text};
