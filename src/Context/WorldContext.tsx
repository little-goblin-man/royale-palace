import { createContext, useEffect, useState } from "react";
import { OldyTimeyDate } from "../Models/OldyTimeyDate";

type WorldContextType = {
  date: OldyTimeyDate;
};

export const WorldContext = createContext<WorldContextType>({
  date: {
    month: 1,
    year: 869,
  },
});

const WorldProvider = ({
  children,
}: {
  children?: JSX.Element;
}): JSX.Element => {
  const [date, setDate] = useState<OldyTimeyDate>({ month: 1, year: 869 });

  useEffect(() => {
    const updateDate = () => {
      if (date.month === 12) {
        setDate({ month: 1, year: date.year + 1 });
      } else {
        setDate({ month: date.month + 1, year: date.year });
      }
    };
    setTimeout(updateDate, 1000);
  }, [date]);

  return (
    <WorldContext.Provider value={{ date }}>{children}</WorldContext.Provider>
  );
};

export default WorldProvider;
