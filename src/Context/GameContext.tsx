import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { OldyTimeyDate } from "../Models/OldyTimeyDate";

type GameContextType = {
  date: OldyTimeyDate;
  selectedEventId: number | undefined;
  setSelectedEventId: Dispatch<SetStateAction<number | undefined>>;
};

export const GameContext = createContext<GameContextType>({
  date: {
    month: 1,
    year: 869,
  },
  selectedEventId: undefined,
  setSelectedEventId: () => {},
});

const GameProvider = ({
  children,
}: {
  children?: JSX.Element;
}): JSX.Element => {
  const [date, setDate] = useState<OldyTimeyDate>({ month: 1, year: 869 });
  const [selectedEventId, setSelectedEventId] = useState<number | undefined>(0);

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
    setTimeout(updateDate, 2000);
  }, [date, selectedEventId]);

  return (
    <GameContext.Provider value={{ date, selectedEventId, setSelectedEventId }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
