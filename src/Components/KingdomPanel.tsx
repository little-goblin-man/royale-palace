import { Fragment, FunctionComponent, useContext } from "react";
import { Row } from "react-bootstrap";
import { StoryContext } from "../Context/StoryContext";

export const KingdomPanel: FunctionComponent = () => {
  const storyContext = useContext(StoryContext);

  return (
    <Fragment>
      <Row className="h5 text-dark border-bottom">
        <div className="text-center">Kingdom</div>
      </Row>
      {storyContext.kingdomName && (
        <Row>Name: Kingdom of {storyContext.kingdomName} </Row>
      )}
      {storyContext.money && <Row>Treasury: {storyContext.money} gold </Row>}
    </Fragment>
  );
};
