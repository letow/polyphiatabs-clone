import React from 'react'
import classes from './SectionItem.module.scss'

export default function SectionItem({title}) {
  return (
    <div className={classes.SectionItem}>
        <p>Polyphia - {title}</p>
    </div>
  )
}
