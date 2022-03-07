import { FunctionComponent } from "react";

export default interface EventMapping {
  component: () => FunctionComponent;
  weight: number;
  multiplier: number;
  oneOffEvent: boolean;
}
