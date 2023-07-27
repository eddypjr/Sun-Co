import { Outlet } from 'react-router-dom';
import {
  LogoContainer,
  NavLink,
  NavigationContainer,
  NavBarLinks,
  ViewCartContainer,
} from './navigation.styles';
import logo from '../../assets/logo.svg';
import cartIcon from '../../assets/cartIcon.svg';

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <NavBarLinks>
          <LogoContainer>
            <NavLink to="/">
              <img src={logo} />
            </NavLink>
          </LogoContainer>
          <ViewCartContainer>
            <NavLink to="/cart">
              <img src={cartIcon} />
            </NavLink>
            <div>View Cart</div>
          </ViewCartContainer>
        </NavBarLinks>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
