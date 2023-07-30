import { Shop } from './shop-now.styles';
import rightArrow from '../../assets/rightArrow.svg';
import { FC } from 'react';

const ShopNow: FC = () => {
  return (
    <>
      <Shop to="">
        Shop Now<img src={rightArrow} />
      </Shop>
    </>
  );
};

export default ShopNow;