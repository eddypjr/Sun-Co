import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

export const Slide = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
`;

export const SlideHidden = styled.img`
  display: none;
  border-radius: 0.5rem;
  width: 100%;
  height: 100%;
`;

export const Arrow = styled.img`
  width: 2rem;
  height: 2rem;
  color: white;
  cursor: pointer;
`;

export const RightArrow = styled.img`
  // position: aboslute;
  width: 2rem;
  height: 2rem;
  color: white;
  // right: 1rem;
  cursor: pointer;
`;

export const Indicator = styled.button`
  background-color: black;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  border: 1px solid black;
  outline: none;
  // box-shadow: 0px 0px 5px #555;
  margin: 0 0.2rem;
  cursor: pointer;
`;

export const IndicatorInactive = styled.button`
  background-color: gray;
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  border: none;
  outline: none;
  // box-shadow: 0px 0px 5px #555;
  margin: 0 0.2rem;
  cursor: pointer;
`;

export const Indicators = styled.span`
  display: flex;
  // position: absolute;
  bottom: 1rem;
`;

