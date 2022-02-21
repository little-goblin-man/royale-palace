import { Fragment, FunctionComponent, useContext } from "react";
import { Row } from "react-bootstrap";
import { PeopleContext } from "../Context/PeopleContext";

export const CourtPanel: FunctionComponent = () => {
  const peopleContext = useContext(PeopleContext);

  return (
    <Fragment>
      {peopleContext.court.length > 0 ? (
        <Row className="h5 text-dark border-bottom">
          <div className="text-center">Court</div>
        </Row>
      ) : (
        <div></div>
      )}
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
