import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const SlideContainer = styled.div`
  height: 90%;
  display: flex;
`;

export const BottomContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: 2%;
`;

export const Circle = styled.button`
  background-color: white;
  border-radius: 50%;
  width: 2.188rem;
  height: 2.188rem;
  border: 0.063rem solid white;
  color: white;
  cursor: pointer;
  box-shadow: 0rem 0.278rem 4.167rem 0rem rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Arrow = styled.img`
  width: 1.75rem;
  height: 2rem;
  color: white;
  cursor: pointer;
`;

export const Slide = styled.img`
aspect-ratio: 0.92/1;
  width: 100%;
  max-height: 650px;
  transition: all 0.25s ease-in-out;
`;

export const Indicators = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
  height: 100%;
`;

export const Indicator = styled.button`
  background-color: #201b21;
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 50%;
  border: 0.063rem solid #201b21;
  margin: 0 0.2rem;
  cursor: pointer;
  padding: 0;
`;

export const IndicatorInactive = styled.button`
  background-color: #d9dbe1;
  height: 0.65rem;
  width: 0.65rem;
  border-radius: 50%;
  border: 0.063rem solid #d9dbe1;
  margin: 0 0.2rem;
  cursor: pointer;
  padding: 0;
`;
