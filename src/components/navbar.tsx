import { useState } from "react";
import "../assets/styles/navbar.css";
import searchIcon from "../assets/images/searchIcon.svg";
import notificationIcon from "../assets/images/notification.svg";
import error from "../assets/images/error.svg";
import circle from "../assets/images/circle.svg";
import arrowDown from "../assets/images/arrowDown.svg";
import menu from "../assets/images/menu.svg";

function TopNavbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    
      <div className="navbar">
        <div className="hamburger">
          <img
            src={menu}
            alt="menu"
            height="30px"
            onClick={(e) => setOpen(true)}
          />
        </div>
        <div className="searchWrapper">
          <input
            className="navSearch"
            type="text"
            placeholder="Ask us any question"
          />
          <img
            src={searchIcon}
            height="20px"
            className="searchIcon"
            alt="searchIcon"
          />
        </div>

        <div className="iconWrap">
          <div className="notificationSide">
            <img src={notificationIcon} height="25px" alt="notificationImage" />
            <img src={error} alt="error" height="20px" />
          </div>

          <div className="avatarSide">
            <img
              src={circle}
              height="25px"
              className="circle"
              alt="notificationImage"
            />
            <img
              src={arrowDown}
              height="5px"
              className="arrowDown"
              alt="arrowDown"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNavbar;
