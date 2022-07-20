import React from 'react'
import classes from './Footer.module.scss'
import amex from './logo/amex.svg'
import applepay from './logo/apple-pay.svg'
import discover from './logo/discover.svg'
import mastercard from './logo/mastercard.svg'
import paypal from './logo/paypal.svg'
import visa from './logo/visa.svg'

export default function Footer() {
  return (
    <div className={classes.Footer}>
        <span className={classes.copyright}>Copyright © 2022, <a className='link' href='#'>Polyphia Tabs</a>.</span>
        <div className={classes.paylogo}>
            <img className={classes.paylogo_item} src={amex} alt="amex" />
            <img className={classes.paylogo_item} src={applepay} alt="applepay" />
            <img className={classes.paylogo_item} src={discover} alt="discover" />
            <img className={classes.paylogo_item} src={mastercard} alt="mastercard" />
            <img className={classes.paylogo_item} src={paypal} alt="paypal" />
            <img className={classes.paylogo_item} src={visa} alt="visa" />
        </div>
    </div>
  )
}
