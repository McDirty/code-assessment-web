import React from 'react'
import HeaderContainer from './HeaderContainer'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import styles from '../styles/App.css'

const App = () => (
  <div className={styles.container}>
    <HeaderContainer />
    <hr />
    <ProductsContainer />
    <hr />
    <CartContainer />
  </div>
)

export default App
