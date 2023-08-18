import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.188rem;
  flex: 1;
  height: 15.625rem;
  width: 100%;
  min-width: 9.375rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    font-size: 1.6rem;
    text-decoration: none;
    color: #201b21;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;
  transform: all 0.25s ease-in-out;

  h3 {
    font-family: DM Sans;
    font-size: 2.7rem;
    text-transform: uppercase;
    text-align: center;
    margin: 0 auto;
  }

  @media screen and (max-width: 380px) {
    margin-bottom: 0;
  }
`;

export const FilterButtons = styled.div`
  justify-content: center;
  display: flex;
  gap: 1rem;
  width: 100%;
  min-width: 17.5rem;
  flex-wrap: wrap;
  align-items: center;
  color: #201b21;

  button {
    padding: 0.6rem 1.6rem;
    cursor: pointer;
    background-color: transparent;
    border: 0.125rem solid rgba(0, 0, 0, 0.3);
    transition: all 0.25s ease-in-out;
    font-family: Inter;

    &:hover {
      border: 0.125rem solid rgba(0, 0, 0, 0.5);
    }
  }
`;
