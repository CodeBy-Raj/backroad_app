import React from 'react'
import { socialItems } from '../data'


const SocialIcons = ({icon, link}) => {
  return (
    <li>
        <a href={link}
        target="_blank"
        className="nav-icon">
            <i className={icon}></i>
             </a>
    </li>
  )
}

 const SocialIcon = ()=>{

    return (
        <ul className="nav-icons">
          {
            socialItems.map((item)=>(
                <SocialIcons {...item}/>
            ))
          }
        </ul>
    )
}

export default SocialIcon;
