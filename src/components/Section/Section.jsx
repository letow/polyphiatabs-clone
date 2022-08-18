import React, { useState } from 'react'
import classes from './Section.module.scss'
import SectionItem from './SectionItem/SectionItem'

export default function Section({sectionTitle}) {
  const featuredItems = [
    {name: 'Neurotica Tabs', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/NEUROTICA_RECOLOR_360x.jpg?v=1658155012', price: 3.00},
    {name: 'Playing God Tabs', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/POLYPHIA-PLAYINGGOD-DSP_360x.jpg?v=1652194022', price: 3.00},
    {name: 'Guitar Tab Bundle', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/guitartabbundle_360x.webp?v=1652205407', price: 50.00},
    {name: 'Bass Tab Bundle', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/basstabbundle_360x.webp?v=1652205768', price: 45.00},
    {name: 'New Levels New Devils Tabs', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/album_art_456d6837-2f7f-4507-9ab6-9d82b886b908_360x.jpg?v=1572106106', price: 20.00},
    {name: 'The Most Hated EP Tabs', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/album_art_360x.jpg?v=1502409475', price: 6.00},
  ]

  const allTabs = [
    {name: 'The Most Hated EP Tabs', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/album_art_360x.jpg?v=1502409475', price: 6.00},
    {name: 'New Levels New Devils Tabs', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/album_art_456d6837-2f7f-4507-9ab6-9d82b886b908_360x.jpg?v=1572106106', price: 20.00},
    {name: 'Renaissance Tabs', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/Polyphia_Ren_Cover_Final_360x.jpg?v=1502410275', price: 12.00},
    {name: 'Muse Tabs', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/front_cover_360x.jpg?v=1502411240', price: 11.00},
    {name: 'LIT Tabs', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/art_360x.jpg?v=1502412083', price: 1.00},
    {name: 'Look But Don\'t Touch', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/lbdt_art_2_360x.jpg?v=1557359910', price: 2.00},
    {name: 'The Most Hated EP Backing Tracks', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/tmhbackingtrack_360x.jpg?v=1585906410', price: 6.00},
    {name: 'Lalala (Remix) Tabs', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/1_360x.png?v=1574108073', price: 2.00},
    {name: 'Inspire EP Tabs', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/a3281393018_10_360x.jpg?v=1502413234', price: 5.00},
    {name: 'Inferno (Cover) Tabs', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/1000_360x.jpg?v=1504544677', price: 1.00},
    {name: 'Envision Tabs', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/Polyphia-Envision_360x.jpg?v=1502412421', price: 1.00},
    {name: 'Resurrect EP Tabs', img: 'https://cdn.shopify.com/s/files/1/2262/7457/products/a2998576452_10_360x.jpg?v=1502418085', price: 4.00},
  ]

  return (
    <div className={classes.Section}>
        <h2 className={classes.header2}>{sectionTitle}</h2>
          {sectionTitle === 'Featured'
            ? <div className={classes.wrapper}>{featuredItems.map((data) => <SectionItem data={data} /> )}</div>
            : <div className={classes.wrapper}>{allTabs.map((data) => <SectionItem data={data} /> )}</div>
          }
    </div>
  )
}
