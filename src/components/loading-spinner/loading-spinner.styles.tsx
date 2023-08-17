import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  position: relative;
  z-index: 1000;
  animation: text-color 2s ease-in-out infinite alternate;

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes text-color {
    0% {
      color: rgba(0, 0, 0, 1);
    }
    50% {
      color: rgba(0, 0, 0, 0.5);
    }
    100% {
      color: rgba(0, 0, 0, 0.1);
    }
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 0.625rem solid transparent;
    mix-blend-mode: overlay;
    pointer-events: none;
  }

  &:before {
    border-left-color: lightblue;
    animation: rotate 2s ease-in infinite;
  }

  &:after {
    border-right-color: lightgreen;
    animation: rotate 2.5s ease-out infinite;
  }
`;
