import { useState } from "react";
import { GameRound, User } from "../types/types";

const UseGameState = () => {
  
  const [hostEnd, setHostEnd] = useState(false);

  const [allUsers, setAllUsers] = useState<User[]>([])

  const [gameRound, setGameRound] = useState<GameRound>({
    currentPlayer: {id: 0, username: ""},
    nextPlayer: {id: 0, username: ""},
    currentQuestion: { id: 0, content: "" },
    reshufflingQuestions: false,
    gameActive: false,
    // votingQuestionA: "",
    // votingQuestionB: "",
    //   timerRunning: false,
    //   timerSeconds: 5,
    //   timerIntervalID: "",
    // ^^ to be used for voting feature
  });

  const handleReceived = (resp: any) => {
    if (resp.endGame) {
      //this resp only exists when the host ends game
      setHostEnd(true);
    } else if (resp.room && resp.room.game_started && resp.currentQuestion) {
      //for use when game has started and players is active in game, resp.currentQuestion filters out players joining midgame
      setGameRound({
        currentPlayer: resp.currentPlayer,
        nextPlayer: resp.nextPlayer,
        currentQuestion: resp.currentQuestion,
        reshufflingQuestions: resp.reshufflingQuestions,
        gameActive: resp.room.game_started,
        // add voting timer stuff here
      });
    } else if (resp.nextPlayer && !resp.currentQuestion) {
      // for when nextPlayer logs out of the game
      setGameRound((prevGameRound) => ({
          ...prevGameRound,
          nextPlayer: resp.nextPlayer,
      })); 
     } else if (resp.room && !resp.room.game_started) {
      //used for updating lobby of users as new ones come in
      setAllUsers(resp.allUsers)
    }
  };


  const resetQuestionsShuffle = () => {
    setGameRound((prevState) => ({
      ...prevState,
      reshufflingQuestions: false,
    }));
  };


  return {
    gameRound,
    setGameRound,
    handleReceived,
    hostEnd,
    resetQuestionsShuffle,
    allUsers, 
    setAllUsers
  };
};

export default UseGameState;
