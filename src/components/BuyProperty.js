import { ethers } from "ethers";
import React from "react";

function BuyProperty({ plots, togglePop }) {
  return (
    <div>
      <h3>Listed Houses</h3>
      <div>
        {plots.map((plot, index) => (
          <div key={index}>
            <div>
              {/* <p>Image goes here</p> */}
              <img src={plot.image} alt="Plot Image" />
            </div>
            <div>
              <h4>{plot.street}</h4>
              <p>
                {ethers.utils.formatUnits(plot.price.toString(), "ether")} ETH
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyProperty;
