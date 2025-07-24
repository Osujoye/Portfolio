import { NavLink } from "react-router-dom";

const SideBar = ({ handleToggle }) => {
  return (
    <div className=" bg-gray-900 min-h-[80vh] fixed text-amber-500 w-full flex items-center justify-center">
      <div className=" flex flex-col items-center  gap-5 ">
        <NavLink onClick={handleToggle} to="/">
          <nav>Home</nav>
        </NavLink>
        <NavLink onClick={handleToggle} to="/about">
          <nav>About</nav>
        </NavLink>
        <NavLink onClick={handleToggle} to="/skill">
          <nav>Skill</nav>
        </NavLink>
        <NavLink onClick={handleToggle} to="/project">
          <nav>Project</nav>
        </NavLink>
        <NavLink onClick={handleToggle} to="/contact">
          <nav>Contact</nav>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
