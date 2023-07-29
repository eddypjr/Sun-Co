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
          <ViewCartContainer>
            <NavLink to="/cart">
              <img src={cartIcon} />
            </NavLink>
            <div>View Cart</div>
          </ViewCartContainer>
        </NavBarLinks>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
