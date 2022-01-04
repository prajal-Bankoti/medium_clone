import "./Navbar.css";
import Logo from "../Image/logo1.png";
import { useState } from "react";
import Login from "../Login/components/Login";
import ScrollDialog from "../Login/components/page";
export const Navbar = () => {
  const [color, setColor] = useState(true);
  window.addEventListener("scroll", function () {
    var element = document.querySelector(".card_mid_box");
    var position = element.getBoundingClientRect();

    if (position.top >= 78) {
      setColor(true);
    } else {
      setColor(false);
    }
  });
  return (
    <div
      style={
        color
          ? { backgroundColor: "rgb(196, 226, 255)", transition: "1s" }
          : { backgroundColor: "white", transition: "1s" }
      }
      className="navbar_2"
    >
      <div className="navbar_2_l">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar_2_r">
        <span
          id="get_started"
          style={
            color
              ? { backgroundColor: "black", transition: "1s" }
              : { backgroundColor: "green", transition: "1s" }
          }
        >
          <ScrollDialog  value="Get started"/>
          <p style={{ display: "none" }}>
            {" "}
            <Login />
          </p>
        </span>

        <span style={{color:"black"}}>    <ScrollDialog value="Sign In"/></span>
        <span  onClick={() => {
            window.location.href = "/writehome";
          }} >Write</span>
        
        <span
          onClick={() => {
            window.location.href = "/membership";
          }}
        >
          Membership
        </span>
        <span
          onClick={() => {
            window.location.href = "/ourstory";
          }}
        >
          {" "}
          Our story
        </span>
      </div>
    </div>
  );
};
