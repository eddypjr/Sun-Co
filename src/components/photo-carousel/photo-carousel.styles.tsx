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
  background-color: #201B21;
  height: 0.75rem;
  width: 0.5rem;
  border-radius: 50%;
  border: 1px solid #201B21;
  outline: none;
  margin: 0 0.2rem;
  cursor: pointer;
`;

export const IndicatorInactive = styled.button`
  background-color: #D9DBE1;
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
  width: 35px;
  height: 35px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid white;
  outline: none;
  color: white;
  cursor: pointer;
  box-shadow: 0px 4.444444179534912px 66.66666412353516px 0px
    rgba(0, 0, 0, 0.4);
`;