import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #201b21;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  margin-top: 3%;

  a {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 95%;
    flex-wrap: wrap;
    font-size: 0.75rem;
    padding: 0.625rem;
    height: auto;
  }
`;

export const CopyrightContainer = styled.div`
  display: flex;
  color: #d9dbe1;

  @media screen and (max-width: 800px) {
    order: 3;
    padding: 0.313rem 0rem;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    flex: 0 0 100%;
  }
`;

export const SocialLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 6%;

  @media screen and (max-width: 800px) {
    width: auto;
  }
`;