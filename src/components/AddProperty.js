import React, { Component } from "react";
class AddProperty extends Component {
  render() {
    return (
      <div className="loginkabaap">
        <div class="login-box">
        <h2>Add new Property</h2>
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
          <div class="user-box">
          {/* <label>
            Name
          </label> */}
          <input type="text" ref={(input) => (this._name = input)} name="name" placeholder="Enter your Full Name" />
        </div>
          
        <div class="user-box">
              {/* <label>Bed</label> */}
              <input type="text"
                ref={(input) => (this._bed = input)}
                name="bed"
                placeholder="Enter no. of Beds" 
                />
            </div>
            <div class="user-box">
              {/* <label>
                Bathroom
              </label> */}
              <input type="text"
                ref={(input) => (this._bath = input)}
                name="bath" 
                placeholder="Enter no. of Bathrooms"/>
            </div>
            <div class="user-box">
              {/* <label>
                AcreLot
              </label> */}
              <input type="text"
                ref={(input) => (this._acreLot = input)}
                name="acreLot" 
                placeholder="Enter AcreLot "/>
            </div>
            <div class="user-box">
              {/* <label>
                HouseSize
              </label> */}
              <input type="text"
                ref={(input) => (this._housesize = input)}
                name="housesize" 
                placeholder="Enter House Size (Size in sq. yards)"/>
            </div>
            <div class="user-box">
              {/* <label>
                HouseAddress
              </label> */}
              <input type="text"
                ref={(input) => (this._houseAddress = input)}
                name="HouseAddress" 
                placeholder="Enter Full House Address"/>
            </div>
            <div class="user-box">
              {/* <label>
              Price
              </label> */}
              <input type="text"
                ref={(input) => (this._price = input)}
                name="Price" 
                placeholder="Enter Price of the  (in ETHERIUM)"/>
            </div>
            <div class="user-box">
              {/* <label>
              Upload image of the Property
              </label> */}
              <input type="text"
                ref={(input) => (this._image = input)}
                name="image" 
                placeholder="Upload Image of the Property"/>
            </div>
            
          
          {/* <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
          
        </a> */}
          <button className=".btn1" type="submit"><span></span>
          <span></span>
          <span></span>
          <span></span>Predict</button>
          <button className=".btn2" type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
          </button>
         
        {/* </a> */}
          
        </form>
        </div>
        
      </div>
    );
  }
}

export default AddProperty;
