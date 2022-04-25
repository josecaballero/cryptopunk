import React from "react";

import instagramLogo from "./../../assets/owner/instagram.png";
import twitterLogo from "./../../assets/owner/twitter.png";
import moreIcon from "./../../assets/owner/more.png";

import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="punkHighlight">
        <img
          className="selectedPunk"
          src="https://lh3.googleusercontent.com/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q=w600"
          alt=""
        />
      </div>

      <div className="punkDetailsContainer">
        <div className="punkDetails" style={{ color: `#fff` }}>
          <div className="title">Paco Punk</div>
          <span className="itemNumber">.#3</span>
        </div>

        <div className="owner">
          <div className="ownerImageContainer">
            <img
              className="ownerImage"
              src="https://yt3.ggpht.com/yti/APfAmoHI8-Hf81fa_o3A8scaLz2szVuBC6oRvu1NoPSjIQ=s88-c-k-c0x00ffffff-no-rj-mo"
            />
            <div className="ownerNameAndHandle">
              <div>0x6D72C9cFA979A0E9FB76a92321C2Db6103d3D012</div>
              <div className="ownerHandle">@Jose</div>
            </div>
          </div>
          <div className="ownerDetails">
            <div className="ownerLink">
              <img src={instagramLogo} />
            </div>

            <div className="ownerLink">
              <img src={twitterLogo} />
            </div>

            <div className="ownerLink">
              <img src={moreIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
