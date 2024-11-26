import React, { useState } from 'react'
import css from "./Header.module.css"
import Logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
import { VscThreeBars} from 'react-icons/vsc'
 const Header = () => {

  const[ShowMenu,SetShowMenu]=useState(true)
const TogleMenu =()=>{
  SetShowMenu(!ShowMenu)
}

  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="Logo"/>
        <span>amazon</span>
      </div>
      <div className={css.right}>

        <div className={css.bars} onClick={TogleMenu}>
          < VscThreeBars/>
        </div>
      
          <ul className={css.menu} style={{display:ShowMenu? 'inherit':'none'}}>
         <li>Collections</li>
         <li>brands</li>
         <li>new</li>
         <li>sales</li>
         <li>ENG</li>
          </ul>

        <input type="text" className={css.search} placeholder='Search....' />
<CgShoppingBag className={css.cart}/>
      </div>
    </div>
  )
}
export default Header;