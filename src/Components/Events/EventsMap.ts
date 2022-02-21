import { FunctionComponent } from "react";
import { GameStartEvent } from "./Intro/GameStart";

interface EventMapping {
    component: () => FunctionComponent
    weight: number,
    oneOffEvent: boolean
  }

export const EventsMap: EventMapping[] =
    [
      {component: () => GameStartEvent, weight: 0, oneOffEvent: true},
    ]

