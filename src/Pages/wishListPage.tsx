import React from 'react'

const WishListPage = () => {
  return (
   <div style={{background:'yellow', height:'100vh', marginTop:'0'}}>
     <div className='wishlist-title'>
      <h1>My Wishlist</h1>
      <div>
        <p>Product name</p>
        <p>Unit price</p>
        <p>Stock status</p>
      </div>
      <p>No products added to the wishlist</p>
   
    </div>
   </div>
  )
}

export default WishListPage