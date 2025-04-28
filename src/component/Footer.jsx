import React from 'react'
import {  socialItems } from '../data'


// const SocialList =({icon, link})=>{
//   return (
//     <li>
//     <a href={link} target="_blank" className="footer-icon"
//       ><i className={icon}></i
//     ></a>
//   </li>
//   )
// }

function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {
          socialItems.map((item)=>(
            <li>
            <a href={item.link} className="footer-link">
             {item.name}
              </a>
          </li>
          ))
        }

       
      </ul>
      <ul className="footer-icons">
      {
          socialItems.map((item)=>(
            <li>
          <a href={item.link} target="_blank" className="footer-icon"
            ><i className={item.icon}></i
          ></a>
        </li>
          ))
        }
        
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
      <p className="credit">
        Developed and  Maintained By
        <span id="date"></span> <b>Harsh Raj (2300320120105)</b>
      </p>
    </footer>
  )
}

export default Footer
