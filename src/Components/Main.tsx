import {
  Fragment,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { GameContext } from "../Context/GameContext";
import { CharacterPanel } from "./CharacterPanel";
import { EventsMap } from "./Events/EventsMap";
import { Header } from "./Header";
import { KingdomPanel } from "./KingdomPanel";
import { CourtPanel } from "./CourtPanel";

export const Main: FunctionComponent = () => {
  const gameContext = useContext(GameContext);

  const [EventComponent, setEventComponent] = useState<any>();

  useEffect(() => {
    if (gameContext.selectedEventId !== undefined) {
      setEventComponent(EventsMap[gameContext.selectedEventId].component);
    } else {
      setEventComponent(undefined);
    }
  }, [gameContext.selectedEventId]);

  return (
    <Fragment>
      <Header />
      <Container className="bg-light h-100 mw-100 p-0">
        <Row className="h-100">
          <Col md={2} className="h-100">
            <Container className="border-start h-100 w-100 bg-white">
              <CourtPanel />
            </Container>
          </Col>
          <Col
            md={8}
            className="h-100 d-flex justify-content-center align-items-center"
          >
            <Card className="mt-4 border rounded w-100 bg-white">
              {EventComponent !== undefined ? (
                <EventComponent />
              ) : (
                "nothing happening"
              )}
            </Card>
          </Col>
          <Col md={2} className="h-100">
            <Container className="border-start h-100 w-100 bg-white">
              <Row className="mb-5">
                <CharacterPanel />
              </Row>
              <Row>
                <KingdomPanel />
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
