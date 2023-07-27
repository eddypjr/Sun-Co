import { Outlet } from 'react-router-dom';
import { NavLink, NavigationContainer, NavBarLinks } from './navigation.styles';
import logo from '../../assets/logo.svg';
import cartIcon from '../../assets/cartIcon.svg';

const Navigation = () => {
  return (
    <>
      <NavigationContainer>
        <NavBarLinks>
          <NavLink to="/">
            <p>
              <img src={logo} />
            </p>
          </NavLink>

          <NavLink to="/cart">
            <img src={cartIcon} />
            <span>View Cart</span>
          </NavLink>
        </NavBarLinks>
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
