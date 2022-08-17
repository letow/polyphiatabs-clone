import React, { useState } from 'react'
import classes from './Section.module.scss'
import SectionItem from './SectionItem/SectionItem'

export default function Section({sectionTitle}) {
  const [sectionItems, setSectionItems] = useState([
    'Neurotica Tabs',
    'Playing God Tabs',
    'Guitar Tab Bundle',
  ])

  return (
    <div className={classes.Section}>
        <h2 className={classes.header2}>{sectionTitle}</h2>
        {sectionItems.map((item) => 
          <SectionItem title={item} />  
        )}
    </div>
  )
}
