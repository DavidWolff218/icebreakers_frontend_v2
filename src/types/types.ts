export type User = {
  id: number | null;
  username: string;
};

export type RoomData = {
  room_name: string;
  host_id: number;
  host_name: string;
  game_started: false;
}

export type ReqObj = {
  method: string;
  headers: {
    "Content-Type": string;
    Accept?: string;
  };
  body: string;
};

export type RoomInfo = {
  user: User;
  roomName: string;
  host: User;
  gameStarted: boolean;
};

export type RoomForm = {
  room_name: string;
  username: string; 
};

export type CurrentQuestion = {
  id: number,
  content: string
}

export type GameRound = {
    currentPlayer: User,
    nextPlayer: User
    currentQuestion: CurrentQuestion,
    reshufflingQuestions: boolean,
    gameActive: boolean,
}