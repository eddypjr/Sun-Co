import Summary from '../../components/summary/summary';
import CartItems from '../../components/cart-items/cart-items';

const Cart = () => {
  return (
    <>
      <div>
        <CartItems />

        <Summary />
      </div>
    </>
  );
};

export default Cart;
