import { Fragment, FunctionComponent, useContext } from "react";
import { Row } from "react-bootstrap";
import { GameContext } from "../Context/GameContext";
import { PeopleContext } from "../Context/PeopleContext";
import { calculateAge } from "../Models/Person";

export const CharacterPanel: FunctionComponent = () => {
  const peopleContext = useContext(PeopleContext);
  const gameContext = useContext(GameContext);

  return (
    <Fragment>
      <Row className="h5 text-dark border-bottom">
        <div className="text-center">Character</div>
      </Row>
      {peopleContext.you?.forename && (
        <Row className="pt-1">
          Name: {peopleContext.you.forename} {peopleContext.you.surname}{" "}
        </Row>
      )}
      {peopleContext.you?.birthMonth && peopleContext.you.birthYear && (
        <Row className="pt-1">
          Age:{" "}
          {calculateAge(
            gameContext.date,
            peopleContext.you.birthMonth,
            peopleContext.you.birthYear
          )}
        </Row>
      )}
    </Fragment>
  );
};
