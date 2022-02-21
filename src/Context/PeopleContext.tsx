import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Person, You } from "../Models/Person";

type PeopleContextType = {
  you: You | undefined;
  setYou: Dispatch<SetStateAction<You | undefined>>;
  court: Person[];
  addPersonToCourt: (newGuy: Person) => void;
};

export const PeopleContext = createContext<PeopleContextType>({
  you: undefined,
  setYou: () => {},
  court: [],
  addPersonToCourt: () => {},
});

const PeopleProvider = ({
  children,
}: {
  children?: JSX.Element;
}): JSX.Element => {
  const [you, setYou] = useState<You>();
  const [court, setCourt] = useState<Person[]>([]);

  const addPersonToCourt = (newGuy: Person) => {
    setCourt([...court, newGuy]);
  };

  return (
    <PeopleContext.Provider value={{ you, setYou, court, addPersonToCourt }}>
      {children}
    </PeopleContext.Provider>
  );
};

export default PeopleProvider;
