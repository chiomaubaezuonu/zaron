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
            <a href="">Makeup</a>
            <a href="">Skincare</a>
            <a href="">Explore</a>
            <a href="">Wishlist</a>
          </div>
          <div>
            <img className='nav-icon' src={search} alt="search-icon" />
            <img className='nav-icon' src={user} alt="user-icon" />
            <img className='nav-icon' src={cart} alt="cart-icon" />
          </div>
        </div>
      </nav>
      <hr style={{ background: "#EAEAEA" }} />
      <div className='bg-div'>
        <div className='bg-text-div'>
          <h3 className='discover'>Discover your best look</h3>
          <h1 className='bg-text'>Redefining the essence</h1>
          <h1 className='bg-text'>of beauty</h1>
          <button>Shop now</button>
        </div>
      </div>
    </div>
  );
}

export default App;
