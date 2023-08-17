import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 19px;
  flex: 1;
  height: 250px;
  width: 100%;
  min-width: 150px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    font-size: 1.6rem;
    text-decoration: none;
    color: black;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;
  transform: all 0.25s ease-in-out;

  h3 {
    font-size: 2.7rem;
    text-transform: uppercase;
    text-align: center;
    margin: 0 auto;
  }

  a {
    font-size: 1.6rem;
    text-decoration: none;
    color: black;
    text-align: left;
  }

  @media (width < 380px) {
    margin-bottom: 0;
  }
`;

export const FilterButtons = styled.div`
  justify-content: center;
  display: flex;
  gap: 1rem;
  width: 100%;
  min-width: 280px;
  flex-wrap: wrap;
  align-items: center;

  button {
    padding: 0.6rem 1.6rem;
    cursor: pointer;
    background-color: transparent;
    border: 2px solid rgba(0, 0, 0, 0.3);
    transition: all 0.2s;

    &:hover {
      border: 2px solid rgba(0, 0, 0, 0.5);
    }
  }
`;
