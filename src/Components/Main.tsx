import { Fragment, FunctionComponent } from "react";
import { Container } from "react-bootstrap";
import { Header } from "./Header";

export const Main: FunctionComponent = () => {
  return (
    <Fragment>
      <Header />
      <Container className="bg-light h-100 mw-100 m-0"></Container>
    </Fragment>
  );
};
