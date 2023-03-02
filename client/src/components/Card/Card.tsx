import { Link } from 'react-router-dom'
import styles from './Card.module.css'

interface CardProps {
  metre: number
  pieces: number
  ville: string
  picture: string
  price: number
  annonceId: number
}

export const Card = ({metre, pieces, ville, picture, price, annonceId}:CardProps): JSX.Element => {
  return (
    <>
      <div className={styles.cardBox}>
        <img src={picture} alt="" className={styles.cardImg} />
        <div className={styles.cardInfos}>
          <p>{metre}m</p>
          <p>{pieces} pièces</p>
          <p>{ville}</p>
        </div>
        <div className={styles.cardAction}>
          <Link to={"/annonce/" + annonceId} className={styles.cardBtn}>Details</Link>
          <p className={styles.cardPrice}>{price} €</p>
        </div>
      </div>
    </>
  )
}