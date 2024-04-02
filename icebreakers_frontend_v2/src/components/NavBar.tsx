import { User } from "../types/types";


type NavProps = {
  user: User,
  host: User,
  handleLogOut: () => void
  handleEndGame: () => void
  roomName: string
}

const NavBar = ({user, host, handleLogOut, handleEndGame, roomName}: NavProps) => {
  
  const logOutBtn = (): JSX.Element => {
    if (user.id === host.id) {
      return <button onClick={handleEndGame}>ENDGAME</button>;
    } else {
      return <button onClick={handleLogOut}>LOGOUT</button>;
    }
  };

  return <span>
  {logOutBtn()}
  ** PLAYBREAKERS **
  Room: {roomName}
  </span>;
};

export default NavBar;
