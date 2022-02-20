import { FunctionComponent } from "react";
import { GameStartEvent } from "./GameStartEvent/GameStart";

interface EventMapping {
    component: () => FunctionComponent
    weight: number
  }

export const EventsMap: EventMapping[] =
    [
        {component: () => GameStartEvent, weight: 0}
    ]

