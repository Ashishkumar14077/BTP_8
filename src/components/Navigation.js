import { ethers } from "ethers";
import { NavLink } from "react-router-dom";

const Navigation = ({ account, setAccount }) => {
  const connectHandler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = ethers.utils.getAddress(accounts[0]);
    // console.log(account)
    setAccount(account);
  };

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

      {account ? (
        <button type="button" className="nav__connect">
          {account.slice(0, 6) + "..." + account.slice(38, 42)}
        </button>
      ) : (
        <button type="button" className="nav__connect" onClick={connectHandler}>
          Connect
        </button>
      )}
    </nav>
  );
};

export default Navigation;
