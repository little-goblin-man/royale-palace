import { FunctionComponent, useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { StoryContext } from "../Context/StoryContext";

export const KingdomPanel: FunctionComponent = () => {
  const storyContext = useContext(StoryContext);

  return storyContext ? (
    <Container>
      {storyContext.kingdomName && (
        <Row className="h5 text-dark border-bottom">
          <div className="text-center">
            Kingdom of {storyContext.kingdomName}{" "}
          </div>
        </Row>
      )}
      {storyContext.money && <Row>Treasury: {storyContext.money} gold </Row>}
    </Container>
  ) : (
    <div></div>
  );
};
