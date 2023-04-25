import React, { Component } from "react";
import Axios from "axios";

class AddProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bed: "",
      bath: "",
      acreLot: "",
      housesize: "",
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
// <<<<<<< HEAD
//       <div className="loginkabaap">
//         <div class="login-box">
//         <h2>Add new Property</h2>
//         <form
//           onSubmit={(event) => {
//             event.preventDefault();

//             const name = this._name.value;
//             const bed = this._bed.value;
//             const bath = this._bath.value;
//             const acreLot = this._bed.value;
//             const housesize = this._housesize.value;
//             const houseAddress = this._houseAddress.value;
//             const image = this._image.value;
//             const price = window.web3.utils.toWei(
//               this._price.value.toString(),
//               "Ether"
//             );

//             this.props.createProduct(
//               name,
//               bed,
//               bath,
//               acreLot,
//               housesize,
//               houseAddress,
//               image,
//               price
//             );
//             console.log(this.props.products);
//             console.log(this.props.productCount);
//           }}
//         >
//           <div class="user-box">
//           {/* <label>
//             Name
//           </label> */}
//           <input type="text" ref={(input) => (this._name = input)} name="name" placeholder="Enter your Full Name" />
//         </div>
          
//         <div class="user-box">
//               {/* <label>Bed</label> */}
//               <input type="text"
//                 ref={(input) => (this._bed = input)}
//                 name="bed"
//                 placeholder="Enter no. of Beds" 
//                 />
//             </div>
//             <div class="user-box">
//               {/* <label>
//                 Bathroom
//               </label> */}
//               <input type="text"
//                 ref={(input) => (this._bath = input)}
//                 name="bath" 
//                 placeholder="Enter no. of Bathrooms"/>
//             </div>
//             <div class="user-box">
//               {/* <label>
//                 AcreLot
//               </label> */}
//               <input type="text"
//                 ref={(input) => (this._acreLot = input)}
//                 name="acreLot" 
//                 placeholder="Enter AcreLot "/>
//             </div>
//             <div class="user-box">
//               {/* <label>
//                 HouseSize
//               </label> */}
//               <input type="text"
//                 ref={(input) => (this._housesize = input)}
//                 name="housesize" 
//                 placeholder="Enter House Size (Size in sq. yards)"/>
//             </div>
//             <div class="user-box">
//               {/* <label>
//                 HouseAddress
//               </label> */}
//               <input type="text"
//                 ref={(input) => (this._houseAddress = input)}
//                 name="HouseAddress" 
//                 placeholder="Enter Full House Address"/>
//             </div>
//             <div class="user-box">
//               {/* <label>
//               Price
//               </label> */}
//               <input type="text"
//                 ref={(input) => (this._price = input)}
//                 name="Price" 
//                 placeholder="Enter Price of the  (in ETHERIUM)"/>
//             </div>
//             <div class="user-box">
//               {/* <label>
//               Upload image of the Property
//               </label> */}
//               <input type="text"
//                 ref={(input) => (this._image = input)}
//                 name="image" 
//                 placeholder="Upload Image of the Property"/>
//             </div>
            
          
//           {/* <a href="#">
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           Submit
          
//         </a> */}
//           <button className=".btn1" type="submit"><span></span>
//           <span></span>
//           <span></span>
//           <span></span>Predict</button>
//           <button className=".btn2" type="submit">
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           Submit
//           </button>
         
//         {/* </a> */}
          
// =======
      <div className="loginkabaap">
        <div class="login-box">
        <h2>Add new Property</h2>
        <form>
        <div class="user-box">
            
            <input
              type="text"
              // value={this.state.name}
              ref={(input) => (this._name = input)}
              name="name"
              placeholder="Enter your Full Name"
            />
           </div>
           <div class="user-box">
          
            <input
              type="text"
              value={this.state.bed}
              ref={(input) => (this._bed = input)}
              name="bed"
              onChange={this.handleInputChange}
              placeholder="Enter no. of Beds" 
            />
          </div>
          <div class="user-box">
           
            <input
              type="text"
              value={this.state.bath}
              ref={(input) => (this._bath = input)}
              name="bath"
              onChange={this.handleInputChange}
              placeholder="Enter no. of Bathrooms"
            />
          </div>
          <div class="user-box">
            
            <input
              type="text"
              value={this.state.acreLot}
              ref={(input) => (this._acreLot = input)}
              name="acreLot"
              onChange={this.handleInputChange}
              placeholder="Enter AcreLot "
            />
           </div>
           <div class="user-box">
            
            <input
              type="text"
              value={this.state.housesize}
              ref={(input) => (this._housesize = input)}
              name="housesize"
              onChange={this.handleInputChange}
              placeholder="Enter House Size (Size in sq. yards)"
            />
           </div>

           <div class="user-box">
            
            <input
              type="text"
              value={this.state.houseAddress}
              ref={(input) => (this._houseAddress = input)}
              name="houseAddress"
              onChange={this.handleInputChange}
              placeholder="Enter Full House Address"
            />
          </div>
          <div class="user-box">
            
            <input
              type="text"
              ref={(input) => (this._price = input)}
              name="Price"
              placeholder="Enter Price of the  (in ETHERIUM)"
            />
          </div>
          <div class="user-box">
            
            <input
              type="text"
              ref={(input) => (this._image = input)}
              name="image"
              placeholder="Upload Image of the Property"
            />
           </div>
           <div class="user-box">
           {this.state.prediction && <label>Fair Market Value (in ETH): {this.state.prediction}</label>}
           </div>
           
          <button className=".btn1" onClick={this.handlePrediction}><span></span>
          <span></span>
          <span></span>
          <span></span>Predict</button>
          {/* {console.log(this.state.prediction)} */}
          
          <button className=".btn2" onClick={this.handleSubmit}><span></span>
          <span></span>
          <span></span>
          <span></span>Submit</button>
{/* >>>>>>> 924d7f60cef9adf1816702082ab1c7ad81ea0deb */}
        </form>
        </div>
        
      </div>
    );
  }
}

export default AddProperty;
