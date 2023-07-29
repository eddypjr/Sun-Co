import {
  LogoContainer,
  NavLink,
  NavigationContainer,
  NavBarLinks,
  ViewCartContainer,
} from './navigation.styles';
// import logo from '../../../../public/assets/svg/logo.svg';
// import cartIcon from '../../../../public/assets/svg/cartIcon.svg';
import logo from '../../../assets/svg/logo.svg';
import cartIcon from '../../../assets/svg/cartIcon.svg';

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

          <NavLink to="/cart">
            <ViewCartContainer>
              <img src={cartIcon} />
              View Cart
            </ViewCartContainer>
          </NavLink>
        </NavBarLinks>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
