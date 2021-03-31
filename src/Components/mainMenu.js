import React,{useContext} from "react";
import {Button} from '@material-ui/core';
import {QuizContext} from '../Helpers/contexts';
import '../Style/mainMenu.css';


function MainMenu() {
    const {gameState,setGameState} = useContext(QuizContext)
  return (
    <div className="menu">
      <Button variant="contained" color="secondary" className="start-menu-button" onClick={()=>{setGameState("quiz")}}>
        Start Quiz
      </Button>
    </div>
  );
}

export default MainMenu;
