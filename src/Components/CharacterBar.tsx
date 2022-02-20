import { Fragment, FunctionComponent, useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { GameContext } from "../Context/GameContext";
import { PeopleContext } from "../Context/PeopleContext";
import { calculateAge } from "../Models/Person";

export const CharacterBar: FunctionComponent = () => {
  const peopleContext = useContext(PeopleContext);
  const gameContext = useContext(GameContext);

  return (
    <Container className="border-start h-100 w-100 bg-white">
      {peopleContext.you && (
        <Fragment>
          {peopleContext.you.forename && (
            <Row>
              Name: {peopleContext.you.forename} {peopleContext.you.surname}{" "}
            </Row>
          )}
          {peopleContext.you.birthMonth && peopleContext.you.birthYear && (
            <Row>
              Age:{" "}
              {calculateAge(
                gameContext.date,
                peopleContext.you.birthMonth,
                peopleContext.you.birthYear
              )}
            </Row>
          )}
        </Fragment>
      )}
    </Container>
  );
};
