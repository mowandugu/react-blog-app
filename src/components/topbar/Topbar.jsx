import { Link } from "react-router-dom";
import "./topbar.css";
import logo from "./logoipsum-logo-5.svg";

export default function Topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
                <Link className="link" to="/write">
                  WRITE
                </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topImg"/>
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
