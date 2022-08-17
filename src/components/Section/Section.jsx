import React, { useState } from 'react'
import classes from './Section.module.scss'
import SectionItem from './SectionItem/SectionItem'

export default function Section({sectionTitle}) {
  const [sectionItems, setSectionItems] = useState([
    {name: 'Neurotica Tabs', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/NEUROTICA_RECOLOR_360x.jpg?v=1658155012', price: 3.00},
    {name: 'Playing God Tabs', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/POLYPHIA-PLAYINGGOD-DSP_360x.jpg?v=1652194022', price: 3.00},
    {name: 'Guitar Tab Bundle', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/guitartabbundle_360x.webp?v=1652205407', price: 50.00},
  ])

  return (
    <div className={classes.Section}>
        <h2 className={classes.header2}>{sectionTitle}</h2>
        <div className={classes.wrapper}>
          {sectionItems.map((data) => 
            <SectionItem data={data} />  
          )}
        </div>
    </div>
  )
}
