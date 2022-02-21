import { Fragment, FunctionComponent, useContext } from "react";
import { Row } from "react-bootstrap";
import { PeopleContext } from "../Context/PeopleContext";

export const CourtPanel: FunctionComponent = () => {
  const peopleContext = useContext(PeopleContext);

  return (
    <Fragment>
      <Row className="h5 text-dark border-bottom">
        <div className="text-center">Court</div>
      </Row>
      {peopleContext.court.map((p) => {
        return (
          <Row className="pt-1">
            <span>
              {p.forename} {p.surname} <i className="fas fa-face-grin"></i>
            </span>
          </Row>
        );
      })}
    </Fragment>
  );
};
