import { Fragment, FunctionComponent, useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { GameContext } from "../Context/GameContext";
import { PeopleContext } from "../Context/PeopleContext";
import { calculateAge } from "../Models/Person";

export const CharacterPanel: FunctionComponent = () => {
  const peopleContext = useContext(PeopleContext);
  const gameContext = useContext(GameContext);

  return peopleContext.you ? (
    <Container>
      <Row className="h5 text-dark border-bottom">
        <div className="text-center">
          {peopleContext.you.forename} {peopleContext.you.surname}{" "}
        </div>
      </Row>
      <Row className="pt-1">
        Age:{" "}
        {calculateAge(
          gameContext.date,
          peopleContext.you.birthMonth,
          peopleContext.you.birthYear
        )}{" "}
        years old
      </Row>
    </Container>
  ) : (
    <div></div>
  );
};
