import React, { Component } from "react";
import Axios from "axios";

class AddProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bed: 0,
      bath: 0,
      acreLot: 0,
      housesize: 0,
      houseAddress: "",
      prediction: "",
    };
  }
  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  handlePrediction = (event) => {
    // console.log(this.state);
    event.preventDefault();
    Axios.post("http://localhost:8080/api/form/", this.state)
      .then((response) => {
        this.setState({ prediction: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("Prediction button clicked");
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const name = this._name.value;
    const bed = this._bed.value;
    const bath = this._bath.value;
    const acreLot = this._bed.value;
    const housesize = this._housesize.value;
    const houseAddress = this._houseAddress.value;
    const image = this._image.value;
    const price = window.web3.utils.toWei(
      this._price.value.toString(),
      "Ether"
    );

    this.props.createProduct(
      name,
      bed,
      bath,
      acreLot,
      housesize,
      houseAddress,
      image,
      price
    );
    // console.log(this.props.products);
    // console.log(this.props.productCount);
  };

  render() {
    return (
      <div>
        <h1>Add new Property</h1>
        <form>
          <label>
            Name
            <input
              type="text"
              // value={this.state.name}
              ref={(input) => (this._name = input)}
              name="name"
            />
          </label>
          <label>
            Bed
            <input
              type="text"
              value={this.state.bed}
              ref={(input) => (this._bed = input)}
              name="bed"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Bath
            <input
              type="text"
              value={this.state.bath}
              ref={(input) => (this._bath = input)}
              name="bath"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            acreLot
            <input
              type="text"
              value={this.state.acreLot}
              ref={(input) => (this._acreLot = input)}
              name="acreLot"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            housesize
            <input
              type="text"
              value={this.state.housesize}
              ref={(input) => (this._housesize = input)}
              name="housesize"
              onChange={this.handleInputChange}
            />
          </label>

          <label>
            houseAddress
            <input
              type="text"
              value={this.state.houseAddress}
              ref={(input) => (this._houseAddress = input)}
              name="houseAddress"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Price
            <input
              type="text"
              ref={(input) => (this._price = input)}
              name="Price"
            />
          </label>
          <label>
            Upload image of the Property
            <input
              type="text"
              ref={(input) => (this._image = input)}
              name="image"
            />
          </label>
          <button onClick={this.handlePrediction}>Predict</button>
          {/* {console.log(this.state.prediction)} */}
          {this.state.prediction && <p>Prediction: {this.state.prediction}</p>}
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
