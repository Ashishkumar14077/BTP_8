import React, { Component } from "react";

class BuyProperty extends Component {
  render() {
    return (
      <div className="products">
        {this.props.products.map((product, key) => (
          <div key={key} className="product">
            <img src={product.image} alt="Plot Image" />
            <h1> {product.houseAddress}</h1>
            <h1></h1>
            <span>
              <ul class="no-bullets">
                {/* <li>Name : {product.name}</li> */}
                <li>
                  Bed : {product.bed.toString()} Bath :{" "}
                  {product.bath.toString()}
                </li>
                <li>
                  Fare Price :{" "}
                  {window.web3.utils.fromWei(
                    product.predict.toString(),
                    "Ether"
                  )}{" "}
                  ETH
                </li>
                <li>
                  Price(in ETH) :{" "}
                  {window.web3.utils.fromWei(product.price.toString(), "Ether")}{" "}
                  ETH
                </li>
                <li>
                  Owner :{" "}
                  {product.owner.slice(0, 6) +
                    "..." +
                    product.owner.slice(38, 42)}
                </li>
              </ul>
            </span>

            {!product.purchased ? (
              <button
                className="price"
                name={product.id}
                value={product.price}
                onClick={(event) => {
                  this.props.purchaseProduct(
                    event.target.name,
                    event.target.value
                  );
                }}
              >
                Buy
              </button>
            ) : (
              <button className="price" name={product.id} value={product.price}>
                Sold
              </button>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default BuyProperty;
