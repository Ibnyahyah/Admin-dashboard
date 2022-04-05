import { useState } from "react";
import "../assets/styles/sidenav.css";

import admin from "../assets/images/admin.svg";
import knowledge from "../assets/images/knowledge.svg";
import agentInbox from "../assets/images/agentInbox.svg";
import helpCenter from "../assets/images/helpCenter.svg";
import analytics from "../assets/images/analytics.svg";
import rightArrow from "../assets/images/rightArrow.svg";

function Sidenav() {
  const [isActive, setActive] = useState(true);
  return (
    <div className="sidenavContainer">
      <div className="sideNavWrapper">
        <div className="accountWrapper">
          <p className="adminName">Admin Dashboard</p>
          <p className="adminMail">admindashboard@gmail.com</p>
        </div>

        <div className="sideNavLinksWrapper">
          <div className="sideNavLink">
            <div className="sideLinkLeft">
              <img
                src={admin}
                height="18px"
                alt="adminIcon"
                className="sideNavIcon"
              />
              <p className="sideNavText">Admin</p>
            </div>

            <div>
              <img
                src={rightArrow}
                height="12px"
                alt="adminIcon"
                className="rightArrow"
              />
            </div>
          </div>

          <div className="sideNavLink">
            <div className="sideLinkLeft">
              <img
                src={knowledge}
                height="18px"
                alt="adminIcon"
                className="sideNavIcon"
              />
              <p className="sideNavText">Knowledge Base</p>
            </div>
            <div>
              <img
                src={rightArrow}
                height="12px"
                alt="adminIcon"
                className="rightArrow"
              />
            </div>
          </div>

          <div className="sideNavLink">
            <div className="sideLinkLeft">
              <img
                src={knowledge}
                height="18px"
                alt="adminIcon"
                className="sideNavIcon"
              />
              <p className="sideNavText">Train SAM</p>
            </div>

            <div>
              <img
                src={rightArrow}
                height="12px"
                alt="adminIcon"
                className="rightArrow"
              />
            </div>
          </div>

          <div className="sideNavLink">
            <div className="sideLinkLeft">
              <img
                src={agentInbox}
                height="18px"
                alt="adminIcon"
                className="sideNavIcon"
              />
              <p className="sideNavText">Agent Inbox</p>
            </div>
            <div>
              <img
                src={rightArrow}
                height="12px"
                alt="adminIcon"
                className="rightArrow"
              />
            </div>
          </div>

          <div className="sideNavLink">
            <div className="sideLinkLeft">
              <img
                src={helpCenter}
                height="18px"
                alt="adminIcon"
                className="sideNavIcon"
              />
              <p className="sideNavText">Help Center</p>
            </div>
            <div>
              <img
                src={rightArrow}
                height="12px"
                alt="adminIcon"
                className="rightArrow"
              />
            </div>
          </div>
        </div>

        <div className="sideNavLink" onClick={() => setActive(!isActive)}>
          <div className="sideLinkLeft">
            <img
              src={analytics}
              height="18px"
              alt="adminIcon"
              className="sideNavIcon"
            />
            <p className={!isActive ? "sideNavText" : "isActive"}>Analytics</p>
          </div>

          <div>
            <img
              src={rightArrow}
              height="12px"
              alt="adminIcon"
              className={!isActive ? "rightArrow" : "downArrow"}
            />
          </div>
        </div>
        {isActive && (
          <div className="dropDown">
            <p className="dropDownText">Team</p>
            <p className="dropDownText">Knowledge Base</p>
            <p className="dropDownText">Training SAM</p>
            <p className="dropDownText">Help Center</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidenav;
