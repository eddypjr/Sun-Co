import styled from 'styled-components';
import { Spinner } from '../loading-spinner/loading-spinner.styles';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1.25rem;
  border-top: 0.063rem solid #e9ebee;
  border-radius: 0 0 1.25rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;

export const Title = styled.h1`
  color: #201b21;
  font-family: DM Sans;
  font-size: 2.25rem;
  width: 90%;
  font-weight: 700;
  line-height: 3rem;
  letter-spacing: -0.063rem;

  @media screen and (max-width: 800px) {
    font-size: 1.75rem;
    line-height: 2.25rem;
    letter-spacing: -0.063rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;

  label {
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  input {
    height: 40px;
    width: 100%;
    padding: 8px;
    border: 0.063rem solid #ccc;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;
export const CardContainer = styled.div`
  border: 0.063rem solid #ccc;
  padding: 0.75rem;
  border-radius: 0.25rem;
`;

export const PaymentFormContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100%;
  min-width: 500px;
  display: flex;
  flex-direction: column;
`;

export const PayNowButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem 0;
  border-radius: 0.625rem;
  background: #201b21;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: Inter;
  font-weight: 700;
  line-height: 1.25rem;
  margin: 3% 0;
  text-align: center;

  &:hover {
    background-color: #67696e;
  }

  @media screen and (max-width: 1400px) {
    padding: 1rem 6rem;
  }
  @media screen and (min-width: 800px) and (max-width: 1399px) {
    margin: 0.938rem 0;
    padding: 0.75rem 5rem;
  }

  @media screen and (min-width: 480px) and (max-width: 800px) {
    padding: 1rem 6rem;
    margin: 0.938rem 0;
  }

  @media screen and (max-width: 479px) {
    padding: 0.75rem 5rem;
    margin: 0.938rem 0;
  }

  @media screen and (max-width: 319px) {
    padding: 0.75rem 3rem;
  }
`;

export const ButtonSpinner = styled(Spinner)`
  width: 1.563rem;
  height: 1.563rem;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 0.325rem solid transparent;
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
