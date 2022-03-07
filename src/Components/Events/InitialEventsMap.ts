import EventMapping from "../../Models/EventMapping";
import { GameStartEvent } from "./Intro/GameStart";

export const InitialEventsMap: EventMapping[] =
    [
      {component: () => GameStartEvent, weight: -1, multiplier: 0, oneOffEvent: true},
    ]

