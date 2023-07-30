import { Container } from './layout.styles';
import Footer from './footer/footer';
import Navigation from './navigation/navigation';
import { Outlet } from 'react-router-dom';
import { FC } from 'react';

const Layout: FC = () => {
  return (
    <>
      <Container>
        <Navigation />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
