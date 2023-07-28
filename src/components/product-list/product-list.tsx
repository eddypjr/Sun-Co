import { useContext, FC } from 'react';
import { ProductsContext } from '../../contexts/product.context';
import ProductCard from '../product-card/product-card';

const ProductList: FC = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <div>
        Explore the latest drops
        <div>
          {products.map((product) => (
            <ProductCard key={product['id']} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
