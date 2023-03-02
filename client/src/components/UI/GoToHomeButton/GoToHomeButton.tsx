import styles from './GoToHomeButton.module.css'
import arrowBack from '../../../assets/svg/arrow-back.svg'
import { Link } from 'react-router-dom'

export const GoToHomeButton = ():JSX.Element => {

  return (
    <>
    <div className={styles.goToHomeBox}>
      <Link to={'/'} className={styles.goToBtn}> <img src={arrowBack} alt="" className={styles.goToHomeArrow} /> Retour</Link>
    </div>
    </>
  )

}