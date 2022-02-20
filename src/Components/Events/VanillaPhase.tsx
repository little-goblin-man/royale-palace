import { Fragment, FunctionComponent } from "react";
import { Button, Card } from "react-bootstrap";
import { PhaseProps } from "./PhaseProps";

export const VanillaPhase: FunctionComponent<PhaseProps> = ({
  title,
  body,
  options,
}) => {
  return (
    <Fragment>
      <Card.Header className="bg-dark text-white fancytext">
        {title}
      </Card.Header>
      <Card.Body>
        <Card.Text>{body}</Card.Text>
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
