import "./App.css";
import Header from "./components/Header/Header";
import PunkList from "./components/PunkList/PunkList";
import { useState, useEffect } from "react";
import axios from "axios";
import Main from "./components/Main/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/api/v1/assets?asset_contract_addresses=0x6D72C9cFA979A0E9FB76a92321C2Db6103d3D012&order_direction=asc&offset=0&limit=20"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
