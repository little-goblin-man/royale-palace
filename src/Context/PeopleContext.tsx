import { Guid } from "guid-typescript";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Person } from "../Models/Person";
import { You } from "../Models/You";

type PeopleContextType = {
  you: You | undefined;
  setYou: Dispatch<SetStateAction<You | undefined>>;
  court: Person[];
  addPersonToCourt: (newGuy: Person) => void;
  getPerson: (id: Guid) => Person | undefined;
  updatePerson: (updatedPerson: Person) => void;
};

export const PeopleContext = createContext<PeopleContextType>({
  you: undefined,
  setYou: () => {},
  court: [],
  addPersonToCourt: () => {},
  getPerson: () => undefined,
  updatePerson: () => {},
});

const PeopleProvider = ({
  children,
}: {
  children?: JSX.Element;
}): JSX.Element => {
  const [court, setCourt] = useState<Person[]>([]);
  const [you, setYou] = useState<You | undefined>(undefined);

  const addPersonToCourt = (newGuy: Person) => {
    setCourt([...court, newGuy]);
  };

  const updatePerson = (updatedPerson: Person) => {
    const newCourt = court;
    newCourt[court.findIndex((p) => p.id.equals(updatedPerson.id))] =
      updatedPerson;
    setCourt(newCourt);
  };

  const getPerson = (id: Guid) => {
    return court.find((p) => p.id === id);
  };

  return (
    <PeopleContext.Provider
      value={{ you, setYou, court, addPersonToCourt, getPerson, updatePerson }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export default PeopleProvider;
