import { FunctionComponent, useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { GameContext } from "../Context/GameContext";
import { OldyTimeyDateToString } from "../Models/OldyTimeyDate";

export const Header: FunctionComponent = () => {
  const gameContext = useContext(GameContext);

  return (
    <Navbar className="border bg-dark">
      <Container>
        <Navbar.Brand>
          <span className="p-0 m-0 text-white fancytext">Royale Palace</span>
        </Navbar.Brand>
        <Navbar.Text className="text-white">
          {OldyTimeyDateToString(gameContext.date)}
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};
