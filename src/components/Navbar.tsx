import { NavLink, Route, Routes } from 'react-router-dom'
import '../App.scss';
import React, { useState } from "react"
import zaron from "../images/zaron.png"
import search from '../images/search.svg'
import user from '../images/user.png'
import cart from "../images/cart.png"
import face from "../images/face.jpg"
import eyes from "../images/eyes.jpeg";
import skin from "../images/skin.jpeg"
import lips from "../images/lips.jpeg"
import bodywash from "../images/bodywash.jpg"
import bodyLotion from "../images/body-lotion.jpg"
import faceBodyLotion from "../images/face-body-lotion.jpg"
import box from "./images/box.svg"
import wishlist from "../images/wishlist.png"
import searcIcon from "../images/section3-search.svg"
import zaronMen from "../images/Zaron-men.jpeg"
import section5Img from "../images/section5-img.png"
import { Button, Input, Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import arrowdown from "../images/arrow-chevron-down.svg"
import rightArrow from "../images/chevron-right-arrow.svg"



const Navbar = () => {
  return (
    <div className='nav-container'>
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
            <NavLink to="/wishListPage" className="wishListLink">Wishlist</NavLink>
          </div>
          <div>
            <img className='nav-icon' src={search} alt="search-icon" />
            <img className='nav-icon' src={user} alt="user-icon" />
            <img style={{ position: 'relative' }} className='nav-icon' src={cart} alt="cart-icon" />
            <span className='shopping-cart-count'>0</span>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar