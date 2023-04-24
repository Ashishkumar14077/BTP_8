import React, { Component } from "react";
class AddProperty extends Component {
  render() {
    return (
      <div>
        <h1>Add new Property</h1>
        <form
          onSubmit={(event) => {
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
            console.log(this.props.products);
            console.log(this.props.productCount);
          }}
        >
          <label>
            Name
            <input
              type="text"
              ref={(input) => (this._name = input)}
              name="name"
            />
          </label>
          <label>
            Bed
            <input
              type="text"
              ref={(input) => (this._bed = input)}
              name="bed"
            />
          </label>
          <label>
            Bath
            <input
              type="text"
              ref={(input) => (this._bath = input)}
              name="bath"
            />
          </label>
          <label>
            acreLot
            <input
              type="text"
              ref={(input) => (this._acreLot = input)}
              name="acreLot"
            />
          </label>
          <label>
            housesize
            <input
              type="text"
              ref={(input) => (this._housesize = input)}
              name="housesize"
            />
          </label>

          <label>
            houseAddress
            <input
              type="text"
              ref={(input) => (this._houseAddress = input)}
              name="houseAddress"
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
