import { FunctionComponent } from "react";

export interface PhaseProps {
  id: number;
  title: string;
  body: string;
  options: Option[];
  customComponent?: FunctionComponent<PhaseProps>;
}

interface Option {
  text: string;
  nextStep: () => void;
}
