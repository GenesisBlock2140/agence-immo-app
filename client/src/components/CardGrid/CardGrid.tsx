import styles from './CardGrid.module.css'
import { Card } from "../Card/Card"
import { useContext } from 'react'
import { AnnonceContext } from '../../context/annonceContext'
import { Data } from '../../context/types'

export const CardGrid = ({sectionTitle} : {sectionTitle:string}): JSX.Element => {

  const { list } = useContext(AnnonceContext)

  return (
    <>
      <h2 className={styles.cardGridTitle}>{sectionTitle}</h2>
      <div className={styles.cardGridBox}>
        {list.length != 0 ? 
        list.data.map((item:Data, keyId:number)=>{
          return (
            <Card 
            metre={item.attributes.metre} 
            pieces={item.attributes.pieces} 
            ville={item.attributes.ville} 
            picture={"http://localhost:1337" + item.attributes.image.data[0].attributes.url} 
            price={item.attributes.prix} 
            annonceId={item.id} 
            key={keyId} 
            />
          )
        })
        : null}
      </div>
    </>
  )
}