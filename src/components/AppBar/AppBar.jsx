import Container from "components/Container/Container";
import Navigation from "components/Navigation/Navigation";

const AppBar = () => {
  return (
    <Container>
      <header style={{display: 'flex', justifyContent: 'start', width: '100%'}}>
        <Navigation />
      </header>
    </Container>
  );
};

export default AppBar;
