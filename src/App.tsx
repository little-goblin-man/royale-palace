import React from "react";
import "./App.css";
import { Main } from "./Components/Main";
import WorldProvider from "./Context/WorldContext";

function App() {
  return (
    <WorldProvider>
      <Main />
    </WorldProvider>
  );
}

export default App;
