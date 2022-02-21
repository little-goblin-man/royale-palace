import { createContext, Dispatch, SetStateAction, useState } from "react";

type StoryContextType = {
  kingdomName: string | undefined;
  setKingdomName: Dispatch<SetStateAction<string | undefined>>;
  money: number | undefined;
  setMoney: Dispatch<SetStateAction<number | undefined>>;
};

export const StoryContext = createContext<StoryContextType>({
  kingdomName: undefined,
  setKingdomName: () => {},
  money: undefined,
  setMoney: () => {},
});

const StoryProvider = ({
  children,
}: {
  children?: JSX.Element;
}): JSX.Element => {
  const [kingdomName, setKingdomName] = useState<string | undefined>();
  const [money, setMoney] = useState<number>();

  return (
    <StoryContext.Provider
      value={{ kingdomName, setKingdomName, money, setMoney }}
    >
      {children}
    </StoryContext.Provider>
  );
};

export default StoryProvider;
