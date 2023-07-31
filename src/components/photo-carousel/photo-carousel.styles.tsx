import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SlideContainer = styled.div`
  height: 80%;
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
`;

export const Slide = styled.img`
  width: 100%;
  height: 100%;
`;

export const Arrow = styled.img`
  width: 1.75rem;
  height: 2rem;
  color: white;
  cursor: pointer;
`;

export const RightArrow = styled.img`
  width: 2rem;
  height: 2rem;
  color: white;
  cursor: pointer;
`;

export const Indicator = styled.button`
  background-color: #201b21;
  height: 0.75rem;
  width: 0.5rem;
  border-radius: 50%;
  border: 0.063rem solid #201b21;
  outline: none;
  margin: 0 0.2rem;
  cursor: pointer;
`;

export const IndicatorInactive = styled.button`
  background-color: #d9dbe1;
  height: 0.6rem;
  border-radius: 50%;
  border: none;
  outline: none;
  margin: 0 0.2rem;
  cursor: pointer;
  align-items: baseline;
`;

export const Indicators = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Circle = styled.div`
  background-color: white;
  width: 2.188rem;
  height: 2.188rem;
  text-align: center;
  border-radius: 50%;
  border: 0.063rem solid white;
  outline: none;
  color: white;
  cursor: pointer;
  box-shadow: 0rem 0.278rem 4.167rem 0rem rgba(0, 0, 0, 0.08);
`;
