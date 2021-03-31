import React, { useState } from "react";
import { Button, List, ListItem, ListItemText } from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

//LOCAL FILES 
import { Question } from "../Helpers/questionBank";

//STYLE FILES
import '../Style/quiz.css';


function QuizMain() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <div className="quiz">
      <h3>{Question[currentQuestion].prompt}</h3>
      <div className="option-list-main">
        <List className="optionList">
          <ListItem>
            <ListItemAvatar>A</ListItemAvatar>
            <ListItemText>{Question[currentQuestion].optionA}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>B</ListItemAvatar>
            <ListItemText>{Question[currentQuestion].optionB}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>C</ListItemAvatar>
            <ListItemText>{Question[currentQuestion].optionC}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>D</ListItemAvatar>
            <ListItemText>{Question[currentQuestion].optionD}</ListItemText>
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default QuizMain;

//  <div className="option-list">
//         <Button
//           variant="contained"
//           color="secondary"
//           className="start-menu-button"
//         ></Button>

//         <Button
//           variant="contained"
//           color="secondary"
//           className="start-menu-button"
//         >
//           {Question[currentQuestion].optionB}
//         </Button>

//         <Button
//           variant="contained"
//           color="secondary"
//           className="start-menu-button"
//         >
//           {Question[currentQuestion].optionC}
//         </Button>

//         <Button
//           variant="contained"
//           color="secondary"
//           className="start-menu-button"
//         >
//           {Question[currentQuestion].optionD}
//         </Button>
//       </div>
