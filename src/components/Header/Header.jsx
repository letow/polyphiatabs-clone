import React from 'react'
import classes from './Header.module.scss'

export default function Header() {
  return (
    <div className={classes.Header}>
        <hr />
        <form action="#" className={classes.search_form}>
          <a href='#' className={`material-symbols-outlined ${classes.icon} ${classes.icon_search}`}>search</a>
          <input type="search" name="search" className={classes.search_bar} placeholder='Search'/>
        </form>
        <div className={classes.right}>
          <div className={classes.cart}>
            <a href="#" className={classes.cart_text}><span class={`material-symbols-outlined ${classes.icon} ${classes.icon_cart}`}>shopping_cart</span><span>Cart (0)</span></a>
          </div>
          <div className={classes.checkout}>
          <a href="#" className={classes.cart_text}>Check Out</a>
          </div>
        </div>
    </div>
  )
}
