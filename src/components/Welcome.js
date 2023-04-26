import React from "react";

function Welcome({ account, setAccount }) {
  return (
    <div className="home">
      {/* <h2>Welcome to Realestate</h2> */}
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex">
            {!account ? (
              <div id="loader" className="text-center">
                <div className="pagi">
                  Please login into your metamask Account
                </div>
              </div>
            ) : (
              <div className="img-slider">
                <h1 className="input-wrapper">
                  Welcome to the RealEstate Marketplace
                </h1>
                <div class="slider-container">
                  <div class="slide">
                    <img src="https://cdn.luxe.digital/media/20230123162705/most-expensive-houses-in-the-world-reviews-luxe-digital-1560x780.jpg.webp" />
                  </div>
                  <div class="slide">
                    <img src="https://img.uswitch.com/t014ej9w3ur1/1OYYdq7OHEx0Ho8StLGwq8/b3fb654a7b9f80a06a58912012651523/shutterstock_593346773.jpg?auto=format%2Ccompress&q=45&ixlib=react-9.5.1-beta.1&w=1476" />
                  </div>
                  <div class="slide">
                    <img src="https://hips.hearstapps.com/hmg-prod/images/beach-house-lr-to-ocean-1556640354.jpg?crop=1.00xw:0.334xh;0,0.399xh&resize=1200:*" />
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
