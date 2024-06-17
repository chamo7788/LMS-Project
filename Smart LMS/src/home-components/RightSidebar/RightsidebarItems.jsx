import { useState } from "react"
import './RightSidebar.css'

export default function RightSidebarItems({item}){

    const [open, setOpen] = useState(false)

    if(item.childrens){
        return (
            <div className={open ? "rightsidebar-Items open" : "rightsidebar-Items"}>
                <div className="sidebar-Item-title" onClick={() => setOpen(!open)}>
                    <span>
                        {item.icon && <i className={item.icon}></i>}
                        {item.title}
                    </span>
                    <i className="bi-chevron-down toggle-btn" ></i>
                </div>
                <div className="sidebar-Item-subtitle">
                    <span>
                        {item.childrens.map((child, index) => <RightSidebarItems key={index} item={child} />)}
                    </span>
                </div>
            </div>
        )
    }else{
        return (
            <div className="rightsidebar-Items">
                <div className="sidebar-Item-title">
                    <a href="wdcwsx">
                    <span>
                        {item.icon && <i className={item.icon}></i>}
                        {item.title}
                    </span>
                    </a>
                </div>
            </div>
        )
    }
}