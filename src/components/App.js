import React, { Component } from "react";
import Web3 from "web3";
import logo from "../logo.png";
import "./App.css";
import Marketplace from "../abis/Marketplace.json";
import Navbar from "./Navbar";
import Main from "./Main";
import Welcome from "./Welcome";
import AddProperty from "./AddProperty";
import BuyProperty from "./BuyProperty";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import IPFS from "ipfs-http-client";

// const ipfsClient = require("ipfs-http-client");
// const ipfs = ipfsClient({
//   host: "ipfs.infura.io",
//   port: 5001,
//   protocol: "https",
// });

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = Marketplace.networks[networkId];
    if (networkData) {
      const marketplace = web3.eth.Contract(
        Marketplace.abi,
        networkData.address
      );
      this.setState({ marketplace });
      const productCount = await marketplace.methods.productCount().call();
      this.setState({ productCount });
      // Load products
      for (var i = 1; i <= productCount; i++) {
        const product = await marketplace.methods.products(i).call();
        this.setState({
          products: [...this.state.products, product],
        });
      }
      this.setState({ loading: false });
      console.log(this.state.products);
    } else {
      window.alert("Marketplace contract not deployed to detected network.");
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      productCount: 0,
      products: [],
      loading: true,
    };

    this.createProduct = this.createProduct.bind(this);
    this.purchaseProduct = this.purchaseProduct.bind(this);
  }

  createProduct(
    // name,
    bed,
    bath,
    acreLot,
    housesize,
    houseAddress,
    image,
    price,
    predict
  ) {
    this.setState({ loading: true });
    this.state.marketplace.methods
      .createProduct(
        // name,
        bed,
        bath,
        acreLot,
        housesize,
        houseAddress,
        image,
        price,
        predict
      )
      .send({ from: this.state.account })
      .once("transactionHash", (transactionHash) => {
        this.setState({ loading: false });
      });
  }

  purchaseProduct(id, price) {
    this.setState({ loading: true });
    console.log(id);
    this.state.marketplace.methods
      .purchaseProduct(id)
      .send({ from: this.state.account, value: price })
      .once("transactionHash", (transactionHash) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Router>
        <Navbar account={this.state.account} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Welcome account={this.state.account} />}
          />
          <Route
            path="/add"
            element={
              <AddProperty
                products={this.state.products}
                createProduct={this.createProduct}
                // account={this.state.account}
              />
            }
          />
          <Route
            path="/buy"
            element={
              <BuyProperty
                products={this.state.products}
                purchaseProduct={this.purchaseProduct}
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
