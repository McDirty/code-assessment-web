import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import styles from './App.css'
import cartSVG from '../media/svg/cartIcon.svg'

const App = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.headLabel}>Acme Store</div>
      <div className={styles.cart}>
        <img src={cartSVG} alt="Cart Icon" />
        <div className={styles.cartLabel}>Your cart is empty</div>
      </div>
    </div>
    <hr />
    <ProductsContainer />
    <hr />
    <CartContainer />
  </div>
)

export default App
