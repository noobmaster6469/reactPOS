import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { AlignJustify, Palette, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  return (
    <div className="navbar lg:px-8 bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <AlignJustify className="size-7" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/"}>Homepage</Link>
            </li>
            <li>
              <Link to={"/settings"}>Settings</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="text-xl">
          <Link to={"/"}>POS</Link>
        </a>
      </div>
      <div className="navbar-end">
        {authUser && (
          <Link to={"/profile"}>
            <button className="btn btn-ghost btn-circle">
              <User />
            </button>
          </Link>
        )}

        <Link to={"/themes"}>
          <button className="btn btn-ghost btn-circle">
            <Palette />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
