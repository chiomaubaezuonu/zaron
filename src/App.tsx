import './App.css';
import React from "react"
import zaron from "./images/zaron.png"
import "./App.css"
import search from './images/search.svg'
import user from './images/user.png'
import cart from "./images/cart.png"
import face from "../src/images/face.jpg"
import eyes from "./images/eyes.jpeg";
import skin from "./images/skin.jpeg"
import lips from "./images/lips.jpeg"
import bodywash from "./images/bodywash.jpg"
import bodyLotion from "./images/body-lotion.jpg"
import faceBodyLotion from "./images/face-body-lotion.jpg"

function App() {
  return (
    <div className="wrapper">
      <div>
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
      </div>
      <hr style={{ background: "#EAEAEA" }} />
      <div className='bg-div'>
        <div className='bg-text-div'>
          <h3 className='discover'>Discover your best look</h3>
          <h1 className='bg-text'>Redefining the essence</h1>
          <h1 className='bg-text'>of beauty</h1>
          <button className='shop-now-btn'>Shop now</button>
        </div>
      </div>
      <div className='section2' style={{ background: "red", position: "absolute" }}>
        <h2 className='section2-title'> Discover more from Zaron</h2>
        <div className='section2-img-div'>
          <span>
            <img src={face} alt="face" />
            <p>Face</p>
          </span>
          <span>
            <img src={eyes} alt="eyes" />
            <p>Eyes</p>
          </span>
          <span>
            <img src={skin} alt="skin" />
            <p>Skin</p>
          </span>
          <span>
            <img src={lips} alt="lips" />
            <p>Lips</p>
          </span>
        </div>
      </div>
      <div className='section3'>
        <div className='section3-text'>
          <h1 style={{ marginLeft: '1rem' }}>Best Seller</h1>
          <a className="view-all" href="">View all</a>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <img src={bodywash} alt="zaron-bodywash" />
            <ul>

            </ul>
          </div>
          <img src={bodyLotion} alt="body lotion" />
          <img src={faceBodyLotion} alt="face and body lotion" />
        </div>
      </div>
    </div >
  );
}

export default App;
