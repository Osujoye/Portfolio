import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import SideBar from "../Static/SideBar";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <section>
        <section className="max-w-[1280px] px-16 bg-gray-900 text-white mx-auto flex h-full items-center justify-between">
          <main>
            <img src="public/Logo.jpg" className="w-50 h-40" alt="" />
          </main>
          <section className="flex mr-20 mt-10 gap-20 mx-12 items-center font-medium max-tablet:hidden">
            <NavLink to="/">
              <nav className="hover:bg-amber-500">Home</nav>
            </NavLink>
            <NavLink to="/about">
              <nav className="hover:bg-amber-500">About</nav>
            </NavLink>
            <NavLink to="/skill">
              <nav className="hover:bg-amber-500">Skill</nav>
            </NavLink>
            <NavLink to="/project">
              <nav className="hover:bg-amber-500">Project</nav>
            </NavLink>
            <NavLink to="/contact">
              <nav className="hover:bg-amber-500">Contact</nav>
            </NavLink>
          </section>
          <section className="hidden max-tablet:block">
            {toggle ? (
              <RxCross1 size={35} onClick={handleToggle} />
            ) : (
              <RxHamburgerMenu size={35} onClick={handleToggle} />
            )}
          </section>
        </section>
      </section>

      <div>{toggle && <SideBar handleToggle={handleToggle} />}</div>
    </>
  );
};

export default Header;
