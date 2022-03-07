import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { OldyTimeyDate } from "../Models/OldyTimeyDate";
import { EventRunner } from "../Models/EventRunner";
import { InitialEventsMap } from "../Components/Events/InitialEventsMap";

const MONTH_LENGTH = 2000;

type GameContextType = {
  date: OldyTimeyDate;
  selectedEventId: number | undefined;
  setSelectedEventId: Dispatch<SetStateAction<number | undefined>>;
  eventRunner: EventRunner;
};

export const GameContext = createContext<GameContextType>({
  date: {
    month: 1,
    year: 869,
  },
  selectedEventId: undefined,
  setSelectedEventId: () => {},
  eventRunner: { eventsMap: [] },
});

const GameProvider = ({
  children,
}: {
  children?: JSX.Element;
}): JSX.Element => {
  const [date, setDate] = useState<OldyTimeyDate>({ month: 1, year: 869 });
  const [selectedEventId, setSelectedEventId] = useState<number | undefined>(0);
  const [eventRunner, setEventRunner] = useState<EventRunner>({
    eventsMap: InitialEventsMap,
  });

  useEffect(() => {
    const updateDate = () => {
      if (selectedEventId === undefined) {
        if (date.month === 12) {
          setDate({ month: 1, year: date.year + 1 });
        } else {
          setDate({ month: date.month + 1, year: date.year });
        }
      }
    };
    setTimeout(updateDate, MONTH_LENGTH);
  }, [date, selectedEventId]);

  return (
    <GameContext.Provider
      value={{
        date,
        selectedEventId,
        setSelectedEventId,
        eventRunner,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
