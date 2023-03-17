import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navigation from "./components/Navigation";
import Welcome from "./components/Welcome";
import AddProperty from "./components/AddProperty";
import BuyProperty from "./components/BuyProperty";

// ABIs
import Realestate from "./abis/Realestate.json";

// Config
import config from "./config.json";

function App() {
  const [account, setAccount] = useState(null);

  const loadBlockchainData = async () => {
    //get accounts from meta msk
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    // console.log(account)
    setAccount(account);
  };
  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <Router>
      <Navigation account={account} setAccount={setAccount} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Welcome account={account} setAccount={setAccount} />}
        />
        <Route
          path="/add"
          element={<AddProperty account={account} setAccount={setAccount} />}
        />
        <Route
          path="/buy"
          element={<BuyProperty account={account} setAccount={setAccount} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
