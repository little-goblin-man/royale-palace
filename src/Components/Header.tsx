import { FunctionComponent, useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { WorldContext } from "../Context/WorldContext";
import { OldyTimeyDateToString } from "../Models/OldyTimeyDate";

export const Header: FunctionComponent = () => {
  const worldContext = useContext(WorldContext);

  return (
    <Navbar className="border">
      <Container>
        <Navbar.Brand>Royale Palace</Navbar.Brand>
        <Navbar.Text>{OldyTimeyDateToString(worldContext.date)}</Navbar.Text>
      </Container>
    </Navbar>
  );
};
