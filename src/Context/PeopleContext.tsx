import { Guid } from "guid-typescript";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import { Person } from "../Models/Person";
import { Relationship } from "../Models/Relationship";
import { You } from "../Models/You";

type PeopleContextType = {
  you: You | undefined;
  relationships: Relationship[];
  setYou: Dispatch<SetStateAction<You | undefined>>;
  court: Person[];
  addPersonToCourt: (newGuy: Person) => void;
  getPerson: (id: Guid) => Person | undefined;
  updatePerson: (updatedPerson: Person) => void;
  removePerson: (id: Guid) => void;
};

export const PeopleContext = createContext<PeopleContextType>({
  you: undefined,
  relationships: [],
  setYou: () => {},
  court: [],
  addPersonToCourt: () => {},
  getPerson: () => undefined,
  updatePerson: () => {},
  removePerson: () => {},
});

const PeopleProvider = ({
  children,
}: {
  children?: JSX.Element;
}): JSX.Element => {
  const [court, setCourt] = useState<Person[]>([]);
  const [you, setYou] = useState<You | undefined>(undefined);
  const [relationships, setRelationships] = useState<Relationship[]>([]);

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

  const removePerson = (id: Guid) => {
    const newCourt = court.filter((c) => c.id !== id);
    setCourt(newCourt);
  };

  const addRelationship = (
    relationship: Relationship,
    reverseRelationship: Relationship
  ) => {
    const newRelationships = relationships;
    newRelationships.push(relationship);
    newRelationships.push(reverseRelationship);
    setRelationships(newRelationships);
  };

  return (
    <PeopleContext.Provider
      value={{
        you,
        relationships,
        setYou,
        court,
        addPersonToCourt,
        getPerson,
        updatePerson,
        removePerson,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export default PeopleProvider;
