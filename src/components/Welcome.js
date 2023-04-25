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
              <div className="pagi">
                Hello u have logged in

              </div>
              // <div className="pagi">
              // <base href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/"/>
              // <div id="slider">
              // <figure>
              // <img src="austin-fireworks.jpg" alt/> 
              // <img src="taj-mahal_copy.jpg" alt/>
              // <img src="ibiza.jpg" alt/>
              // <img src="ankor-wat.jpg" alt/>
              // <img src="austin-fireworks.jpg" alt/>
              // </figure>
              // </div>
              // </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
