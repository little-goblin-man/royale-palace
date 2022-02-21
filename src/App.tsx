import React from "react";
import "./App.css";
import { Main } from "./Components/Main";
import GameProvider from "./Context/GameContext";
import PeopleProvider from "./Context/PeopleContext";
import StoryProvider from "./Context/StoryContext";

function App() {
  return (
    <GameProvider>
      <PeopleProvider>
        <StoryProvider>
          <Main />
        </StoryProvider>
      </PeopleProvider>
    </GameProvider>
  );
}

export default App;
