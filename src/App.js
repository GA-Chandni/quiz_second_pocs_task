import "./App.css";
import React, { useState ,useContext} from "react";
import MainMenu from "./Components/mainMenu";
import QuizMain from "./Components/quiz";
import EndScreen from "./Components/endScreen";

//createContext
import { QuizContext } from "./Helpers/contexts";

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{gameState,setGameState}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <QuizMain />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
