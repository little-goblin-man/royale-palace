import { createContext, Dispatch, SetStateAction, useState } from "react";

type StoryContextType = {
  kingdomName: string | undefined;
  setKingdomName: Dispatch<SetStateAction<string | undefined>>;
};

export const StoryContext = createContext<StoryContextType>({
  kingdomName: undefined,
  setKingdomName: () => {},
});

const StoryProvider = ({
  children,
}: {
  children?: JSX.Element;
}): JSX.Element => {
  const [kingdomName, setKingdomName] = useState<string>();

  return (
    <StoryContext.Provider value={{ kingdomName, setKingdomName }}>
      {children}
    </StoryContext.Provider>
  );
};

export default StoryProvider;
