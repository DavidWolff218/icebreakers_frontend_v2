import { User } from "../types/types";
//@ts-ignore
import { UilBars } from "@iconscout/react-unicons";

type NavBarProps = {
  user: User;
  host: User;
  roomName: string;
  handleShowMenu: () => void;
};

const NavBar = ({ user, host, roomName, handleShowMenu }: NavBarProps) => {
  return (
    <nav className="w-full flex justify-between items-center">
      <UilBars size="24" className="mt-7 ml-4" onClick={handleShowMenu} />
      <h2 className="text-4xl italic font-normal mt-7 font-shrikhand">IceBreakers</h2>
      <div className="h-6 w-6 mt-7 mr-4"/>
    </nav>
  );
};

export default NavBar;
