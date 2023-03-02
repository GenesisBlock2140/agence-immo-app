import { Header } from "../../components/Header/Header"
import { GoToHomeButton } from "../../components/UI/GoToHomeButton/GoToHomeButton"
import { API_IMAGE_ROUTE } from "../../constant/apiRoute"
import mapPing from '../../assets/svg/map-ping.svg'

import styles from './Annonce.module.css'
import { useParams } from "react-router-dom"

import { AnnonceContext } from "../../context/annonceContext"
import { useContext } from "react"

export const Annonce = () => {

  const { annonceId } = useParams<string>()
  const { list } = useContext(AnnonceContext)

  const tempSmallPicture = `https://images.adsttc.com/media/images/63c0/a935/7643/4a39/8498/948f/large_jpg/casa-tunich-apiron_13.jpg?1673570670`
  
  return (
    <>
      <Header />
      <GoToHomeButton />
      {list.length != 0 ?
      <div className={styles.annonceBox}>
        <div>
          <h1>{list.data[Number(annonceId)-1].attributes.titre}</h1>
          <img src={API_IMAGE_ROUTE + list.data[Number(annonceId)-1].attributes.image.data[0].attributes.url} alt="" className={styles.annonceFirstImage} />
          <div className={styles.annonceMoreImage}>
            <img src={tempSmallPicture} alt="Fake Small Picture" />
            <img src={tempSmallPicture} alt="Fake Small Picture" />
            <img src={tempSmallPicture} alt="Fake Small Picture" />
            <img src={tempSmallPicture} alt="Fake Small Picture" />
          </div>
        </div>
        <div>
          <p className={styles.annoncePrice}>{list.data[Number(annonceId)-1].attributes.prix}€</p>
          <p className={styles.annonceAddress}>
            <img src={mapPing} alt="mapPing" width={32} />
            {`${list.data[Number(annonceId)-1].attributes.adresse}, ${list.data[Number(annonceId)-1].attributes.ville} ${list.data[Number(annonceId)-1].attributes.codePostal}`}
          </p>
          <div className={styles.annonceInfos}>
            <p>{list.data[Number(annonceId)-1].attributes.metre}m²</p>
            <p>{list.data[Number(annonceId)-1].attributes.pieces} pièces</p>
            <p>Internet Haut Débit</p>
          </div>
          <p className={styles.annonceDescription}>{list.data[Number(annonceId)-1].attributes.description}</p>
          <button className={styles.annonceContact} onClick={() => console.log(list)}>Contacter le vendeur</button>
        </div>
      </div> : null}
    </>
  )
}