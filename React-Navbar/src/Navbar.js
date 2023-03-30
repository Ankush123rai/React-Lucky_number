import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={style.container}>

    <div className={style.logo}><h1>Logo</h1></div>

        <ul className={style.order_list}>
           <li className={style.list}>
                <NavLink to="/" className={style.item}>Home</NavLink>
           </li>
            <li className={style.list}>
                <NavLink to="/about" className={style.item}>About</NavLink>
            </li>
            <li className={style.list}>
                <NavLink to="/login" className={style.item}>Login</NavLink>
            </li>
         </ul>


    </div>
  )
}

export default Navbar