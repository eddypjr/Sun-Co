import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
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
`;

export const Body = styled.div`
  height: 90px;
  padding: 3.125rem 3.438rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.625rem;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: 700;
    margin: 0 0.375rem 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }
`;

export const Content = styled.div`
  height: 20rem;
  // height: 100%;
  // height: 700px;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  // border: 1px solid black;
  border-radius: 1.173rem;
  margin: 0 0.469rem 0.938rem;
  overflow: hidden;

  &:first-child {
    // margin-right: 0.469rem;
      // grid-row-start: 1;
  // grid-row-end: 3;
  }


  &:nth-last-child(2) {
    // margin-left: 0.469rem;
  // grid-row-start: 1;
  // grid-row-end: 2;
    // grid-column: 2;
    // border: 1px solid black;
  }

  &:nth-last-child(3) {
    // margin-left: 0.469rem;
    // grid-column: 1;
  }

  &:last-child {
    // margin-left: 0.469rem;
    // grid-column: 2;
  }

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

export const Blah = styled.div`
  width: 80%;
  display: flex;
`;
