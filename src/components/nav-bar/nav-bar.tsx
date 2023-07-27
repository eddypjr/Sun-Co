import cartIcon from '../../assets/cartIcon.svg';

const NavBar = () => {
  return (
    <>
      <div>
        <div>
          <p>SUN CO.</p>
        </div>
        <div>
          <img src={cartIcon} />
          <p>View Cart</p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
