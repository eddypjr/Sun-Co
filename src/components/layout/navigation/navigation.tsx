import {
  ItemCount,
  LogoContainer,
  NavBarLinks,
  NavigationContainer,
  NavLink,
  ViewCartContainer,
} from './navigation.styles';
import logo from '../../../assets/svg/logo.svg'
import cartIcon from '../../../assets/svg/cartIcon.svg';
import { FC, useContext } from 'react';
import { CartContext } from '../../../contexts/cart.context';

const Navigation: FC = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <NavBarLinks>
          <LogoContainer>
            <NavLink to="/">
              <img src={logo} />
            </NavLink>
          </LogoContainer>

          <NavLink to="/cart" data-testid="cartLink">
            <ViewCartContainer>
              <img src={cartIcon} />
              View Cart
              {cartCount > 0 && <ItemCount>{cartCount}</ItemCount>}
            </ViewCartContainer>
          </NavLink>
        </NavBarLinks>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
