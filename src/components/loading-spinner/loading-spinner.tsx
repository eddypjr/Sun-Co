import { Container, Content, Spinner } from './loading-spinner.styles';

function LoadingSpinner() {
  return (
    <Container>
      <Content>
        <Spinner className="spinner"></Spinner>
        <h1>Loading...</h1>
      </Content>
    </Container>
  );
}

export default LoadingSpinner;
