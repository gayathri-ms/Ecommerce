import React from "react";
import "./bc.css";
import redman from "./images/PngItem_4000935.png";
import white from "./images/white.png";
import girlthink from "./images/girlthink.png";
import girlrun from "./images/girlrun.png";
import skatingrl from "./images/skategirl.png";
import coolguy from "./images/man.png";
import punjabi from "./images/punjabi.png";
import shopping from "./images/shopping.png";
import cycle from "./images/skategirl_1.png";
import loc from "./images/loc.png";
// import
function Backgorund() {
  return (
    <div className="parallax">
      <img className="redman" src={redman} alt="" />

      <div className="background background--spring">
        <img className="redman1"data-aos="zoom-in-down"src={punjabi} alt="" />
        <img className="loc loc1" src={loc} alt="" />
        <img className="loc loc2" src={loc} alt="" />
        <img className="loc loc3" src={loc} alt="" />
        <img className="redman2"data-aos="zoom-in-down"src={girlthink} alt="" />

        <div className="message-orange grlthink_msg">
          <p className="message-content">
            I agree that your message is awesome!
          </p>
        </div>
        <div className="message-blue punjabi_msg" >
          <p className="message-content">Thanks!</p>
        </div>
      </div>

      <div className="background background--summer" >
        <img className="redman3"data-aos="zoom-in-down"src={coolguy} alt="" />
        <div className="message-blue coolguy_msg">
          <p className="message-content">Thanks!</p>
        </div>
        <img className="redman4" src={girlrun}data-aos="zoom-in-down"alt="" />
        <div className="message-green girlrun_msg">
          <p className="message-content">Thanks!</p>
        </div>
        <img className="redman5" src={skatingrl} data-aos="zoom-in-down" alt="" />
        <img className="loc loc4" src={loc} alt="" />
        <img className="loc loc5" src={loc} alt="" />
        <img className="loc loc6" src={loc} alt="" />
      </div>

      <div className="background background--fall">
        <img className="redman6" src={white} alt="" />

        <img className="redman7" src={shopping} data-aos="zoom-in-down" alt="" />
        <div className="message-blue shopping_msg">
          <p className="message-content">Thanks!</p>
        </div>
        <img className="redman8" src={cycle}data-aos="zoom-in-down" alt="" />
        <div className="message-orange cycle_msg">
          <p className="message-content">
            I agree that your message is awesome!
          </p>
        </div>

        <img className="loc loc9" src={loc} alt="" />
        <img className="loc loc10" src={loc} alt="" />
        <p className="coming">
          Coming Soon
        </p>
        <div className="counter">
          <ul>
            <li>
              <span id="days"></span>days
            </li>
            <li>
              <span id="hours"></span>Hours
            </li>
            <li>
              <span id="minutes"></span>Minutes
            </li>
            <li>
              <span id="seconds"></span>Seconds
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Backgorund;
