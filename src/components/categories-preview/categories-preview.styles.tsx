import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.563rem;
`;

type BackgroundImageProps = {
  src: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ src }) => `url(${src})`};
  border-radius: 0%;
`;

export const Body = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;

  h2 {
    font-weight: 700;
    font-size: 26px;
    color: white;
    text-transform: uppercase;
    transform: all 0.25s ease-in-out;

    @media (min-width: 800px) and (max-width: 1000px) {
      font-size: 20px;
    }

    @media (width <= 800px) {
      font-size: 37px;
    }
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 26px;
  -webkit-text-stroke: 1px #201b21;
  color: white;
  text-transform: uppercase;
  transform: all 0.25s ease-in-out;

  @media (min-width: 800px) and (max-width: 1000px) {
    font-size: 12px;
  }

  @media (width <= 800px) {
    font-size: 37px;
  }
`;

export const Content = styled.div`
  height: 20rem;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  margin: 0 0.469rem 0.938rem;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    ${Body} {
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 480px) {
    height: 26vh;
    min-width: 45%;
  }
`;

export const Categories = styled.div`
  width: 80%;
  display: flex;

  @media (width < 800px) {
    all: unset;
    width: 90%;
  }
`;
