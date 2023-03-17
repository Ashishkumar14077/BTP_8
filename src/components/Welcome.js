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
              "Welcome to our site"
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
