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
  const [provider, setProvider] = useState(null); //provides the connection of blockchain
  const [realestate, setRealestate] = useState(null);
  const [plot, setPlot] = useState({});
  const [plots, setPlots] = useState(null);
  const [plotsCount, setPLotsCount] = useState(null);

  const togglePop = (item) => {
    console.log("togglePop....");
  };

  const loadBlockchainData = async () => {
    //connect to bc
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);

    const network = await provider.getNetwork();

    //create JS version of smart contract
    const realestate = new ethers.Contract(
      config[network.chainId].realestates.address,
      Realestate,
      provider
    );

    setRealestate(realestate);

    //load items
    const plots = [];
    const productCount = await realestate.productCount();

    // setPLotsCount(plotsCount);

    console.log(productCount.toString());
    // if (len == 0) {
    //   const plot = await realestate.plots(1);
    //   plots.push(plot);
    // }

    for (var i = 0; i < 9; i++) {
      const plot = await realestate.plots(i + 1);
      plots.push(plot);
      // console.log(item);
    }

    setPlots(plots);
  };
  useEffect(() => {
    loadBlockchainData();
  }, []);

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     account: '',
  //     productCount: 0,
  //     plots: [],
  //     loading: true
  //   }
  // }
  // createProperty(bed,bath,acreLot,housesize,street,city,state,image,price){

  // }

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
          element={plots && <BuyProperty plots={plots} togglePop={togglePop} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
