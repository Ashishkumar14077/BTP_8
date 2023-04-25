import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  
  render() {
    return (
      <header>
        <nav>
        <div className="nav__brand">
          <h1>Realestate</h1>
        </div>

        {/* <input type="text" className="nav__search" /> */}

        <div className="nav__links">
          <ul>
            <li>
              <NavLink to="/" activeStyle>
                Home
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
      </header>
      
    );
  }
}

export default Navigation;


