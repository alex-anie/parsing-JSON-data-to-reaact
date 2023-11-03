import { Outlet } from "react-router"
import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className="image-wrap">
            <img
              src="https://source.unsplash.com/crowd-of-people-sitting-on-chairs-inside-room-F2KRf_QfCqw"
              alt=""
            />
          </div>

          {/* Navbar */}
          <div className="nav-wrapper">
            <ul className="navlinks">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="about">About</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Outlet />
      </header>
    </>
  );
}
