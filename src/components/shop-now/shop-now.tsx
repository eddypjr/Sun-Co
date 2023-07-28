import { Shop } from './shop-now.styles';
import rightArrow from '../../assets/rightArrow.svg';

const ShopNow = () => {
  // use Link instead of div for buttons
  return (
    <>
      <Shop to="">
        Shop Now<img src={rightArrow} />
      </Shop>
    </>
  );
};

export default ShopNow;