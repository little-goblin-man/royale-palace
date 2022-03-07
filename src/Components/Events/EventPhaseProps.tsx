import { FunctionComponent } from "react";

export interface EventPhaseProps {
  id: number;
  title: string;
  body: string;
  options: Option[];
  customComponent?: FunctionComponent<EventPhaseProps>;
}

interface Option {
  text: string;
  nextStep: () => void;
}
