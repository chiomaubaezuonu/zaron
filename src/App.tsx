import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
// import App from './App'
import WishListPage from './Pages/wishListPage'
import { Layout } from 'antd'
import { Footer } from 'antd/es/layout/layout'
import Home from './Home'
import "./App.scss"

const App2 = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wishListPage' element={<WishListPage />} />
      </Routes>
      <div className='footer-wrapper'>
        <Layout>
          <Footer className='footer'>Copyright © 2024 Zaron Cosmetics and Beauty | Powered by Zaron Cosmetic</Footer>
        </Layout>
      </div>
    </div>
  )
}

export default App2