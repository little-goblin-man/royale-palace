import {
  Fragment,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { Button, Card, Form } from "react-bootstrap";
import { GameContext } from "../../../Context/GameContext";
import { PeopleContext } from "../../../Context/PeopleContext";
import { StoryContext } from "../../../Context/StoryContext";
import { PhaseProps } from "../PhaseProps";
import { Months } from "../../../Models/OldyTimeyDate";

export const GameStartCustomPhase: FunctionComponent<PhaseProps> = ({
  title,
  body,
  options,
}) => {
  const peopleContext = useContext(PeopleContext);
  const storyContext = useContext(StoryContext);
  const gameContext = useContext(GameContext);

  const [forename, setForename] = useState<string | undefined>();
  const [birthMonth, setBirthMonth] = useState<number | undefined>();
  const [surname, setSurname] = useState<string | undefined>();
  const birthYear = gameContext.date.year - 25;

  const [kingdomName, setKingdomName] = useState<string | undefined>();

  useEffect(() => {
    peopleContext.setYou({
      forename,
      surname,
      birthMonth,
      birthYear,
    });
  }, [forename, birthMonth, surname]);

  useEffect(() => {
    storyContext.setKingdomName(kingdomName);
  }, [kingdomName]);

  return (
    <Fragment>
      <Card.Header className="bg-dark text-white fancytext">
        {title}
      </Card.Header>
      <Card.Body>
        <Card.Text>{body}</Card.Text>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="What's your name?"
              onChange={(e) => setForename(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select
              className="text-muted"
              onChange={(e) => setBirthMonth(parseInt(e.target.value))}
            >
              <option>What month were you born in?</option>
              {Months.map((m, index) => {
                return <option value={index + 1}> {m} </option>;
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="What was your family surname?"
              onChange={(e) => setSurname(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="What was the name of your family kingdom?"
              onChange={(e) => setKingdomName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder="What are the last 4 digits of your credit card?" />
          </Form.Group>
        </Form>
      </Card.Body>
      <Card.Footer className="text-center">
        {options.map((o) => (
          <Button
            className="me-2"
            onClick={() => o.nextStep()}
            variant="secondary"
          >
            {o.text}
          </Button>
        ))}
      </Card.Footer>
    </Fragment>
  );
};
