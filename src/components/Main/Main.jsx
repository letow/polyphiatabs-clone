import React from 'react'
import classes from './Main.module.scss'
import facebook from './logo/facebook.svg'
import twitter from './logo/twitter.svg'
import instagram from './logo/instagram.svg'
import youtube from './logo/youtube.svg'
import header from './tab_store_header.webp'
import Section from '../Section/Section'

export default function Main({sections}) {
  return (
    <div className={classes.Main}>
        <div className={classes.sidebar}>
            <a href="#"><img className={classes.sidebar_icon} src={facebook} alt="facebook" /></a>
            <a href="#"><img className={classes.sidebar_icon} id={classes.twitter} src={twitter} alt="twitter" /></a>
            <a href="#"><img className={classes.sidebar_icon} src={instagram} alt="instagram" /></a>
            <a href="#"><img className={classes.sidebar_icon} src={youtube} alt="youtube" /></a>
        </div>
        <div className={classes.main_content}>
          <img className={classes.header_img} src={header} alt="header_img" />
          {sections.map((title) => 
            <Section sectionTitle={title} />  
          )}
        </div>
    </div>
  )
}
