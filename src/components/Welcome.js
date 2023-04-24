import React from "react";

function Welcome({ account, setAccount }) {
  return (
    <div>
      <h2>Welcome to Realestate</h2>
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex">
            {!account ? (
              <div id="loader" className="text-center">
                <p className="text-center">Loading...</p>
              </div>
            ) : (
              <div>
                Hello u have logged in
                {/* <base href="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/" />
                <div id="slider">
                  <figure>
                    <img src="austin-fireworks.jpg" alt />
                    <img src="taj-mahal_copy.jpg" alt />
                    <img src="ibiza.jpg" alt />
                    <img src="ankor-wat.jpg" alt />
                    <img src="austin-fireworks.jpg" alt />
                  </figure>
                </div> */}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
