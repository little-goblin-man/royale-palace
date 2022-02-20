import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Person, PersonBase } from "../Models/Person";

type PeopleContextType = {
  you: PersonBase | undefined;
  setYou: Dispatch<SetStateAction<PersonBase | undefined>>;
  court: Person[];
  addPersonToCourt: (newGuy: PersonBase) => void;
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
  const [you, setYou] = useState<PersonBase>();
  const [court, setCourt] = useState<Person[]>([]);

  const addPersonToCourt = (newGuy: PersonBase) => {
    setCourt([...court, { ...newGuy, happiness: 100 }]);
  };

  return (
    <PeopleContext.Provider value={{ you, setYou, court, addPersonToCourt }}>
      {children}
    </PeopleContext.Provider>
  );
};

export default PeopleProvider;
