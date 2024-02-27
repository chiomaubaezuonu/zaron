import './App.scss';
import React, { useState } from "react"
import zaron from "./images/zaron.png"
import "./App.scss"
import search from './images/search.svg'
import user from './images/user.png'
import cart from "./images/cart.png"
import face from "./images/face.jpg"
import eyes from "./images/eyes.jpeg";
import skin from "./images/skin.jpeg"
import lips from "./images/lips.jpeg"
import bodywash from "./images/bodywash.jpg"
import bodyLotion from "./images/body-lotion.jpg"
import faceBodyLotion from "./images/face-body-lotion.jpg"
import box from "./images/box.svg"
import wishlist from "./images/wishlist.png"
import searcIcon from "./images/section3-search.svg"
import zaronMen from "./images/Zaron-men.jpeg"
import section5Img from "./images/section5-img.png"
import { Button, Input, Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import arrowdown from "./images/arrow-chevron-down.svg"
import rightArrow from "./images/chevron-right-arrow.svg"
import { NavLink, Route, Routes } from 'react-router-dom';
import WishListPage from './Pages/wishListPage';
import Navbar from './components/Navbar';
// import WishListPage from './Pages/wishListPage';



export default function Home() {

  // const [downArrow, setDownArrow] = useState(false)
  return (
    <div>
      <div className="wrapper">
        {/* <div className='nav-container'> 
           <nav style={{ backgroundColor: "#212121", display: "flex" }}>
            <div>
              <NavLink to="/">
                <img src={zaron} alt="zaronLogo" />
              </NavLink>
            </div>
            <div className='right-navbar'>
              <div className='navLinks'>
                <a href="" className='firstNavLink'>Makeup
                  <img src={arrowdown} alt="down-arrow" className='arrowdown' />
                  <div className='nav-dropdown-div'>
                    <ul className='nav-dropdown'>
                      <li className='face-menu'>Face
                        <img src={rightArrow} alt="down-arrow" className='menu-item-arrow' />
                        <div className='menuItem-dropdown-div'>
                          <ul className='nav-dropdown'>
                            <li>Foundation</li>
                            <li>Powder</li>
                          </ul>
                        </div>
                      </li>
                      <li>Eyes</li>
                      <li className='lips-menu'>Lips
                        <div className='menuItem-dropdown-div'>
                          <ul className='nav-dropdown'>
                            <li>Lipstick</li>
                            <li>Lip Balm</li>
                            <li className='lipGloss-menu'>Lip Gloss
                              <img src={rightArrow} alt="down-arrow" className='menu-item-arrow' />
                              <div className='lipGloss-menuItem-dropdown'>
                                <ul className='nav-dropdown'>
                                  <li>Luxurious Lip Gloss</li>
                                  <li>Maxsheen Lip Gloss</li>
                                  <li>Sheer Lip Gloss</li>
                                </ul>
                              </div>
                            </li>
                            <li>Lip Liner</li>
                            <li>Matte Lipfix</li>
                          </ul>
                        </div>
                      </li>
                      <li>Accessories</li>
                    </ul>
                  </div>
                </a>
                <a href="" className='secondNavLink'>Skincare
                  <img src={arrowdown} alt="down-arrow" className='arrowdown' />
                  <div className='nav-dropdown-div'>
                    <ul className='nav-dropdown'>
                      <li className='face-menu'>Men
                        <img src={rightArrow} alt="down-arrow" className='menu-item-arrow' />
                        <div className='menuItem-dropdown-div'>
                          <ul className='nav-dropdown'>
                            <li>Body</li>
                            <li>Face</li>
                          </ul>
                        </div>
                      </li>
                      <li className='face-menu'>Women
                        <img src={rightArrow} alt="down-arrow" className='menu-item-arrow' />
                        <div className='menuItem-dropdown-div'>
                          <ul className='nav-dropdown'>
                            <li>Body</li>
                            <li>Face</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </a>
                <a href="" className='thirdNavLink'>Explore
                  <img src={arrowdown} alt="down-arrow" className='arrowdown' />
                  <div className='nav-dropdown-div'>
                    <ul className='nav-dropdown'>
                      <li>Store Locator</li>
                      <li>About Us</li>
                      <li>Zaron Team</li>
                    </ul>
                  </div>
                </a>
                <NavLink to="/wishlist" className="wishListLink">Wishlist</NavLink>
              </div>
              <div>
                <img className='nav-icon' src={search} alt="search-icon" />
                <img className='nav-icon' src={user} alt="user-icon" />
                <img style={{ position: 'relative' }} className='nav-icon' src={cart} alt="cart-icon" />
                <span className='shopping-cart-count'>0</span>
              </div>
            </div>
          </nav> 
         </div> */}
        <hr style={{ background: "#EAEAEA" }} />
        <div className='bg-div'>
          <div className='bg-text-div'>
            <h3 className='discover'>Discover your best look</h3>
            <h1 className='bg-text'>Redefining the essence</h1>
            <h1 className='bg-text'>of beauty</h1>
            <button className='shop-now-btn'>Shop now</button>
          </div>
        </div>

      </div >

      <div className='section2'>
        <h2 className='section2-title'> Discover more from Zaron</h2>
        <div className='section2-img-div'>
          <span>
            <img className='section2-img' src={face} alt="face" />
            <p className='section2-text'>Face</p>
          </span>
          <span>
            <img className='section2-img' src={eyes} alt="eyes" />
            <p className='section2-text'>Eyes</p>
          </span>
          <span>
            <img className='section2-img' src={skin} alt="skin" />
            <p className='section2-text'>Skin</p>
          </span>
          <span>
            <img className='section2-img' src={lips} alt="lips" />
            <p className='section2-text'>Lips</p>
          </span>
        </div>
      </div>

      <div className='section3'>
        <div className='section3-text'>
          <h1 className='section3-title'>Best Seller</h1>
          <a className="view-all" href="">View all</a>
        </div>
        <div className='section3-products'>

          <div className='bodywash-div'>
            <div style={{ display: "flex" }}>
              <img className='section3-img' src={bodywash} alt="zaron-bodywash" />
              <div className='section3-icons'>
                <img className='section3-search' src={searcIcon} alt="search-icon" />
                <img className='wishlist' src={wishlist} alt="Wishlist" />
                <img className='box' src={box} alt="add to cart" />
              </div>
            </div>
            <div>
              <div style={{ display: "flex", marginLeft: '1.2rem' }}>
                <p style={{ color: "#A2A2A2", fontWeight: "bold" }}>&#8212;</p>
                <p style={{ color: '#444444' }}>Body</p>
              </div>
              <h3 className='section3-productDetails'>Zaron Vitamin C Body Wash </h3>
              <p className='section3-productPrice'>&#8358;9,350.00</p>
            </div>
          </div>

          <div className='body-lotion-div'>
            <div style={{ display: "flex" }}>
              <img className='section3-img' src={bodyLotion} alt="body lotion" />
              <div className='section3-icons'>
                <img className='section3-search' src={searcIcon} alt="search-icon" />
                <img className='wishlist' src={wishlist} alt="Wishlist" />
                <img className='box' src={box} alt="add to cart" />
              </div>
            </div>
            <div>
              <div style={{ display: "flex", marginLeft: '1.2rem' }}>
                <p style={{ color: "#A2A2A2", fontWeight: "bold" }}>&#8212;</p>
                <p style={{ color: '#444444' }}>Body</p>
              </div>
              <h3 className='section3-productDetails'>Zaron Vitamin C Body Lotion </h3>
              <p className='section3-productPrice'>&#8358;9,980.00</p>
            </div>
          </div>

          <div className='face-body-div'>
            <div style={{ display: "flex" }}>
              <img className='section3-img' src={faceBodyLotion} alt="face and body lotion" />
              <div className='section3-icons'>
                <img className='section3-search' src={searcIcon} alt="search-icon" />
                <img className='wishlist' src={wishlist} alt="Wishlist" />
                <img className='box' src={box} alt="add to cart" />
              </div>
            </div>
            <div>
              <div style={{ display: "flex", marginLeft: '1.2rem' }}>
                <p style={{ color: "#A2A2A2", fontWeight: "bold" }}>&#8212;</p>
                <p style={{ color: '#444444' }}>Body</p>
              </div>
              <h3 className='section3-productDetails'>Zaron Vitamin C face and Body Lotion - Men </h3>
              <p className='section3-productPrice'>&#8358;9,750.00</p>
            </div>
          </div>

        </div>
      </div>

      <div className='section4'>
        <div className='section4-left'>
          <div style={{ width: '20rem' }}>
            <h2 style={{ fontWeight: '700' }} className='section4-title'>SKIN BY ZARON MEN</h2>
            <h2 className='section4-title'>No stress, Self Care</h2>
            <p className='section4-text'> Carefully selected products for the ideal man to cleanse, exfoliate and moisturize.</p>
            <button className='section4-btn'>Shop Now</button>
          </div>
        </div>
        <div className='zaron-men-div'>
          <img className='zaron-men' src={zaronMen} alt="Zaron men" />
        </div>

      </div>

      <div className='section5'>
        <div className='bg-img-wrapper'>
          <div className='left-div'>
            <h2 style={{ marginTop: "3.5rem" }}>ZARON MAKEUP</h2>
            <h2 className='section5-subTitle'>Experience the variety of products <br /> exclusive to zaron</h2>
            <Button href='https://zaroncosmetics.com/product-category/zaron-makeup/' type='primary' className='explore-btn'>Explore</Button>
          </div>
          <div className='right-div'>
            <h2>ZARON SKIN</h2>
            <h2 className='section5-subTitle'>Experience the variety of products exclusive to zaron</h2>
            <Button href='https://zaroncosmetics.com/product-category/zaron-skincare/' type='primary' className='explore-btn'>Explore</Button>
          </div>
        </div>
        <div className='section5-texts'>
          <h2>Join Our Zaron Community</h2>
          <p>Get the latest beauty news, product samples and coupons in your inbox</p>
          <div className='input-div'>
            <div className='email-div'>
              <label htmlFor="Email">Email</label>
              <span style={{ color: "red", marginLeft: '0.07rem' }}>*</span>
            </div>
            <Input className='input' type='email' required />
            <Button type='text' disabled className='submit-btn'>Submit</Button>
          </div>
        </div>
        {/* <div className='footer-wrapper'>
          <Layout>
            <Footer className='footer'>Copyright © 2024 Zaron Cosmetics and Beauty | Powered by Zaron Cosmetic</Footer>
          </Layout>
        </div> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}


