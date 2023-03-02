import { useContext, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { Card } from '../../components/Card/Card'
import { GoToHomeButton } from '../../components/UI/GoToHomeButton/GoToHomeButton'
import { AnnonceContext } from '../../context/annonceContext'
import { Data } from '../../context/types'
import styles from './Search.module.css'

export const Search = () => {

  const { filterWord, listFiltered } = useContext(AnnonceContext)
  const [listResult, setListResult] = useState(listFiltered)


  const filterByHighPrice = ():void => {
    setListResult(listResult.sort((a:Data,b:Data) => {
      return b.attributes.prix - a.attributes.prix
    }))
    // Trigger re-render of React because "sort method" don't re-render
    setListResult([...listResult])
  }

  const filterByLowPrice = ():void => {
    setListResult(listResult.sort((a:Data,b:Data) => {
      return a.attributes.prix - b.attributes.prix
    }))
    setListResult([...listResult])
  }

  const filterBySmallSurface = ():void => {
    setListResult(listResult.sort((a:Data,b:Data) => {
      return a.attributes.metre - b.attributes.metre
    }))
    setListResult([...listResult])
  }

  const filterByLargeSurface = ():void => {
    setListResult(listResult.sort((a:Data,b:Data) => {
      return b.attributes.metre - a.attributes.metre
    }))
    setListResult([...listResult])
  }
  

  return (
    <>
      <div className={styles.searchBox}>
        <Header />
        <GoToHomeButton />
        {!listFiltered.data && listFiltered.length !== 0 ?
          <div>
            <h1 className={styles.searchTitle}>{`Résultat(s) pour ${filterWord}`}</h1>
            <p className={styles.searchNbResultFind}>{`${listFiltered.length} résultats trouvés`}</p>
            <ul className={styles.searchFilter}>
              <li>Filtrer par:</li>
              <li onClick={filterByLowPrice}>Prix Croissant</li>
              <li onClick={filterByHighPrice}>Prix Decroissant</li>
              <li onClick={filterBySmallSurface}>Petite surface</li>
              <li onClick={filterByLargeSurface}>Grande surface</li>
            </ul>
          </div>
        : null}
        <div className={styles.searchGrid}>
          {!listResult.data && listResult.length !== 0 ? listResult.map((item:Data, id:number) => {
            return (
              <Card 
                metre={item.attributes.metre} 
                pieces={item.attributes.pieces}
                ville={item.attributes.ville}
                picture={`http://localhost:1337${item.attributes.image.data[0].attributes.url}`}
                price={item.attributes.prix}
                annonceId={item.id}
                key={id}
              />
            )
          }): null}
        </div>
      </div>
    </>
  )
}