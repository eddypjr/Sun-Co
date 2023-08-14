import {
  Container,
  Content,
  ItemCount,
  NavBarLinks,
  ViewCartContainer,
} from './navigation.styles';
import logo from '../../../assets/svg/logo.svg';
import cartIcon from '../../../assets/svg/cartIcon.svg';
import { Link } from 'react-router-dom';
import { FC, useContext } from 'react';
import { CartContext } from '../../../contexts/cart.context';

const Navigation: FC = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <nav>
      <Container>
        <Content>
          <NavBarLinks>
            <div>
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>

            <Link to="/cart" data-testid="cartLink">
              <ViewCartContainer>
                <img src={cartIcon} alt="cart-icon" />
                View Cart
                {cartCount > 0 && <ItemCount>{cartCount}</ItemCount>}
              </ViewCartContainer>
            </Link>
          </NavBarLinks>
        </Content>
      </Container>
    </nav>
  );
};

export default Navigation;
