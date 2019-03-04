import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cartSVG from '../media/svg/cartIcon.svg'
import styles from '../styles/Header.css'


const HeaderContainer = ({ }) => (
    <div className={styles.header}>
        <div className={styles.headLabel}>Acme Store</div>
        <div className={styles.cart}>
            <img src={cartSVG} alt="Cart Icon" />
            <div className={styles.cartLabel}>Your cart is empty</div>
        </div>
    </div>
);

export default HeaderContainer
