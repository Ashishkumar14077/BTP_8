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
              // <div className="pagi">
              //   Hello u have logged in
                
              // </div>
              <div class="img-slider">
  <div class="slider-container">
    
    <div class="slide">
      <img src="http://res.cloudinary.com/hurricane10/image/upload/v1499778218/img-26_aw9alb.jpg"/>
    </div>
    
    <div class="slide">
      <img src="http://res.cloudinary.com/hurricane10/image/upload/v1499778117/img-23_pumtse.jpg"/>
    </div>

    <div class="slide">
      <img src="http://res.cloudinary.com/hurricane10/image/upload/v1499778109/img-20_ljchnk.jpg"/>
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
