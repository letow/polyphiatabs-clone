import React from 'react'
import classes from './SectionItem.module.scss'

export default function SectionItem(props) {
  return (
    <div className={classes.SectionItem}>
        <a href='#' className='link'><img src={props.data.img} alt="cover" className={classes.cover} /></a>
        <a href='#' className='link'><p className={classes.price}>Polyphia - {props.data.name}</p></a>
        <strong><p className={classes.price}>${props.data.price.toFixed(2)}</p></strong>
    </div>
  )
}
