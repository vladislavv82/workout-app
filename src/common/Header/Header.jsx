import React from 'react'
import styles from './Header.module.scss'

import userImage from  '../../images/header/user .svg'
import hamburgerImage from  '../../images/header/hamburger.svg'

export default function Header() {
  return (
    <header className= {styles.header}>
    
    <button type = 'button '>
        <img src={ userImage } alt='Auth'></img>
    </button>

    <button type = 'button '>
    <img src={ hamburgerImage } alt='hamburger'></img>
    </button>


    </header>
  )
}
