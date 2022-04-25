import { useState, useEffect } from "react";

import instagramLogo from "./../../assets/owner/instagram.png";
import twitterLogo from "./../../assets/owner/twitter.png";
import moreIcon from "./../../assets/owner/more.png";

import "./Main.css";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="punkHighlight">
        <img className="selectedPunk" src={activePunk.image_url} />
      </div>

      <div className="punkDetailsContainer">
        <div className="punkDetails" style={{ color: `#fff` }}>
          <div className="title">{activePunk.name}</div>
          <span className="itemNumber">.#{activePunk.token_id}</span>
        </div>

        <div className="owner">
          <div className="ownerImageContainer">
            <img
              className="ownerImage"
              src={activePunk.owner.profile_img_url}
            />
            <div className="ownerNameAndHandle">
              <div>{activePunk.owner.address}</div>
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
