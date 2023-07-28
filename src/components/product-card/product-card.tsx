import { FC } from "react";

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
}

type ProductCardProps = {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { brand, name, price } = product;

  return (
    <>
      <div>
        <img src="" alt="" />
        <div>
          <div>{brand}</div>
          <p>{name}</p>
        </div>
        <div>{price}</div>
      </div>
    </>
  );
};

export default ProductCard;
