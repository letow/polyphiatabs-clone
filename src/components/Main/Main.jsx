import React from 'react'
import classes from './Main.module.scss'
import facebook from './logo/facebook.svg'
import twitter from './logo/twitter.svg'
import instagram from './logo/instagram.svg'
import youtube from './logo/youtube.svg'

export default function Main() {
  return (
    <div className={classes.Main}>
        <div className={classes.sidebar}>
            <a href="#"><img className={classes.sidebar_icon} src={facebook} alt="facebook" /></a>
            <a href="#"><img className={classes.sidebar_icon} id={classes.twitter} src={twitter} alt="twitter" /></a>
            <a href="#"><img className={classes.sidebar_icon} src={instagram} alt="instagram" /></a>
            <a href="#"><img className={classes.sidebar_icon} src={youtube} alt="youtube" /></a>
        </div>
    </div>
  )
}
