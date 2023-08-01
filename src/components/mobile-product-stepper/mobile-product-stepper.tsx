import {
  Arrow,
  ArrowsDiv,
  Circle,
  NavLinkDiv,
} from './mobile-product-stepper.styles';
import { FC, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../contexts/product.context';
import ProductCard from '../product-card/product-card';
import LeftChevron from '../../assets/svg/chevron-left.svg';
import RightChevron from '../../assets/svg/chevron-right.svg';

import type { CartItem } from '../../contexts/cart.context';

const MobileProductStepper: FC = () => {
  const { products } = useContext(ProductsContext);
  const [thumbnailList, setThumbnailList] = useState<string[]>([]);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === thumbnailList.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? thumbnailList.length - 1 : slide - 1);
  };

  useEffect(() => {
    const getThumbnails = (prods: CartItem[]) => {
      const tempThumbnailList: string[] = [];
      prods.map((product) => tempThumbnailList.push(product.image));

      return tempThumbnailList;
    };

    const thumbnails = getThumbnails(products);
    setThumbnailList(thumbnails);
  }, [products]);

  return (
    <>
      {products.map((product, i) => {
        return (
          slide === i && (
            <NavLinkDiv key={product['id']}>
              <Link to={`/product/${product['id']}`} state={{ product }}>
                <ProductCard product={product} />
              </Link>
            </NavLinkDiv>
          )
        );
      })}

      <ArrowsDiv>
        <Circle>
          <Arrow src={LeftChevron} onClick={nextSlide} alt="left-chevron" />
        </Circle>
        <Circle>
          <Arrow src={RightChevron} onClick={prevSlide} alt="right-chevron" />
        </Circle>
      </ArrowsDiv>
    </>
  );
};

export default MobileProductStepper;
