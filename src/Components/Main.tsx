import { Fragment, FunctionComponent } from "react";
import { Col, Container } from "react-bootstrap";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Main: FunctionComponent = () => {
  return (
    <Fragment>
      <Header />
      <Container className="bg-light h-100 mw-100 p-0">
        <Col md={2} className="h-100">
          <Sidebar />
        </Col>
      </Container>
    </Fragment>
  );
};
