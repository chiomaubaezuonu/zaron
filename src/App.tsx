import './App.css';
import React from "react"
import zaron from "./images/zaron.png"
import "./App.css"
import search from './images/search.svg'
import user from './images/user.png'
import cart from "./images/cart.png"

function App() {
  return (
    <div className="wrapper">
      <nav style={{ backgroundColor: "#212121", display: "flex" }}>
        <div>
          <img src={zaron} alt="zaronLogo" />
        </div>
        <div className='right-navbar'>
          <div className='navLinks'>
            <a href=""><p>Makeup</p></a>
            <a href=""><p>Skincare</p></a>
            <a href=""><h4>Explore</h4></a>
            <a href=""><h2>Wishlist</h2></a>
          </div>
          <div>
            <img src={search} alt="search-icon" />
            <img src={user} alt="user-icon" />
            <img src={cart} alt="cart-icon" />
          </div>
        </div>
      </nav>
      <hr style={{ background: "#EAEAEA" }} />
    </div>
  );
}

export default App;
