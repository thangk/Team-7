import React from 'react'

// import logo from '../images/icons/logo-icon.png'
// import account from '../images/icons/account-icon.png'
import logo2 from '../images/icons/logo2-icon.png'
import data from '../assets/template.json'
import noimage from '../images/icons/noimage.jpg'

function Products() {
  return (
    <>

      {/* Navbar */}
      <div className='header-wrapper'>

          <div className="header">
                  <input className="searchbox" type="text" placeholder='Search' />
                  {/* <h1 className="brand-logo">The Watchmen</h1> */}
                  <img src={logo2} alt='logo2' className='logo-image' />
                  <nav className="navbar">
                      <a href="/#" className="links">Account</a>
                      <a href="/#" className="links">Cart</a>
                      <a href="/#" className="links">Menu</a>
                  </nav>
          </div>
      </div>

      <main className='productspage-wrapper'>

        <h1 className='page-title'>Products</h1>

        <div className='products-content-wrapper'>

          {/* filtering panel LEFT SIDE */}
          <section className='filter-panel'>
            <div className='placeholder-text'>filter panel</div>
          </section>


          {/* products listing RIGHT SIDE */}
          <section className='products-panel'>

            <div className='product-cards-wrapper'>
            {data.map(item => {
                return (
                

                  <div className='product-card'>
                    <img src={noimage} alt='noimage' />

                    <div className='product-card-text'>
                      
                      <div>Brand: {item.brand}</div>
                      <div>Name: {item.name}</div>
                      <div>Price: {item.price}</div>
                      
                      

                    </div>
                  </div>
                
                )

              })}

              </div>




          </section>
        </div>


      </main>

    </>
  )
}

export default Products