import {
  Container,
  Content,
  Grid,
  GridLeft,
  GridRight,
} from './checkout.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CartItems from '../../components/cart-items/cart-items';
import Summary from '../../components/summary/summary';

const Cart = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <Container>
      <Content>
        <Grid>
          <GridLeft>
            <div className="bag-label">
              <h1>Your Bag</h1>
            </div>
            {cartItems.map((item, i) => {
              return <CartItems item={item} key={i} />;
            })}
          </GridLeft>
          <GridRight>
            <Summary cartTotal={cartTotal} />
          </GridRight>
        </Grid>
      </Content>
    </Container>
  );
};

export default Cart;
