import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { AnnonceContext } from '../../context/annonceContext'
import styles from './SearchBar.module.css'

export const SearchBar = ():JSX.Element => {

  const { filterAnnonce } = useContext(AnnonceContext)

  const inputSearch = useRef<HTMLInputElement>(null)

  const handleSearch = () => {
    filterAnnonce(inputSearch.current?.value)
  }

  return (
    <>
      <div className={styles.searchbarBox}>
        <input type="text" className={styles.searchbarInput} ref={inputSearch} />
      </div>
      <Link to={"/search"} className={styles.searchbarBtn} onClick={handleSearch}>Rechercher</Link>
    </>
  )
}