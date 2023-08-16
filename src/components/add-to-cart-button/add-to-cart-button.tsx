import { AddButton } from './add-to-cart-button.styles';
import { FC, useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import type { CartItem } from '../../contexts/cart.context';

export type AddToCartButtonProps = {
  product: CartItem;
  quantity: number;
};

const AddToCartButton: FC<AddToCartButtonProps> = ({ product, quantity }) => {
  const notify = () =>
    toast.success(`${product.name} has been added to the cart.`, {
      position: 'top-center',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  const { addItemToCart } = useContext(CartContext);

  const addItemHandler = () => {
    addItemToCart(product, quantity);
    notify();
  };

  return (
    <>
      <Link to="/" onClick={addItemHandler}>
        <AddButton>Add to Cart</AddButton>
      </Link>
    </>
  );
};

export default AddToCartButton;
