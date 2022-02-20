import React from "react";
import "./App.css";
import { Main } from "./Components/Main";
import GameProvider from "./Context/GameContext";
import PeopleProvider from "./Context/PeopleContext";

function App() {
  return (
    <GameProvider>
      <PeopleProvider>
        <Main />
      </PeopleProvider>
    </GameProvider>
  );
}

export default App;
