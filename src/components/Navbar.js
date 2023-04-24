import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  // const connectHandler = async () => {
  //   const accounts = await window.ethereum.request({
  //     method: "eth_requestAccounts",
  //   });
  //   const account = ethers.utils.getAddress(accounts[0]);
  //   // console.log(account)
  //   setAccount(account);
  // };
  render() {
    return (
      <nav>
        <div className="nav__brand">
          <h1>Realestate</h1>
        </div>

        {/* <input type="text" className="nav__search" /> */}

        <div>
          <ul>
            <li>
              <NavLink to="/" activeStyle>
                home
              </NavLink>
            </li>
            <li>
              <NavLink to="/add" activeStyle>
                Add Property
              </NavLink>
            </li>
            <li>
              <NavLink to="/buy" activeStyle>
                Buy Property
              </NavLink>
            </li>
          </ul>
        </div>

        {this.props.account ? (
          <button type="button" className="nav__connect">
            {this.props.account.slice(0, 6) +
              "..." +
              this.props.account.slice(38, 42)}
          </button>
        ) : (
          <button type="button" className="nav__connect">
            Connect
          </button>
        )}
      </nav>
    );
  }
}

export default Navigation;

// import React, { Component } from 'react';

// class Navbar extends Component {

//   render() {
//     return (
//       <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
//         <a
//           className="navbar-brand col-sm-3 col-md-2 mr-0"
//           href="http://www.dappuniversity.com/bootcamp"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Dapp University's Blockchain Marketplace
//         </a>
//         <ul className="navbar-nav px-3">
//           <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
//             <small className="text-white"><span id="account">{this.props.account}</span></small>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Navbar;
