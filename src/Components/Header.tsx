import { FunctionComponent } from "react";
import { Container, Navbar } from "react-bootstrap";

export const Header: FunctionComponent = () => {
  return (
    <Navbar className="border">
      <Container>
        <Navbar.Brand>Royale Palace</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
