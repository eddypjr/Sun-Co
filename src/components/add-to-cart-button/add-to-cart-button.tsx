import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddButton } from './add-to-cart-button.styles';
import { CartContext } from '../../contexts/cart.context';
import { toast } from 'react-toastify';
import type { CartItem } from '../../contexts/cart.context';

export type AddToCartButtonProps = {
  product: CartItem;
  quantity: number;
};

const AddToCartButton: FC<AddToCartButtonProps> = ({ product, quantity }) => {
  const navigate = useNavigate();
  const notify = () =>
    toast.success(`${product.name} has been added to the cart.`, {
      position: 'top-center',
      autoClose: 1500,
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
    navigate(-1);
  };

  return (
    <>
      <div onClick={addItemHandler}>
        <AddButton>Add to Cart</AddButton>
      </div>
    </>
  );
};

export default AddToCartButton;
