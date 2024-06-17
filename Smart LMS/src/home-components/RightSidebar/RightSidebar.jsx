import React from 'react'
import './RightSidebar.css'
import RightSidebarItems from './RightsidebarItems'
import items from './RightSidebarData.json'

export default function RightSidebar() {
  return (
    <div className='rightsidebar' >
        { items.map((item, index) => <RightSidebarItems key={index} item={item} /> )}
        <div className='web-support'>
          <span>
          <a href='jkdjnjn'>web support</a>
          <br></br>
          <a href='jkdjn'>report bug</a>
          </span>
        </div>
    </div>
  )
}
