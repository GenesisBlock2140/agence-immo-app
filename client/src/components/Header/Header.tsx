import { useState } from 'react';
import styles from './Header.module.css'

import { Link } from 'react-router-dom'

export const Header = (): JSX.Element => {

  const [isMobile, setIsMobile] = useState<boolean>(false)

  // Trigger mobile menu display when user click on svg ( hamburger )

  const mobileOn = ():void => {
    setIsMobile(prev => !prev)
  }

  return (
    <>
      <div className={`${styles.headerBox} ${isMobile && styles.headerBoxMobile}`}>
        <Link to={"/"} className={styles.headerLogo}>EazyLoger</Link>
        <ul className={styles.headerList}>
          <li><Link to={"/"}>Accueil</Link></li>
          <li><Link to={"/"}>Equipe</Link></li>
          <li><Link to={"/"}>A propos</Link></li>
        </ul>
        <button className={`${styles.headerBtn} ${isMobile && styles.headerBtnMobile}`}>Connexion</button>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.burger} onClick={mobileOn} >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </>
  )
}