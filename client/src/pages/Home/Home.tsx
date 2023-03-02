import styles from './Home.module.css'

import { Header } from '../../components/Header/Header'
import { HeroBanner } from '../../components/HeroBanner/HeroBanner'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { LargeInfoBox } from '../../components/LargeInfoBox/LargeInfoBox'
import { InfoBox } from '../../components/InfoBox/InfoBox'
import { CardGrid } from '../../components/CardGrid/CardGrid'


export const Home = () => {

  const loremIpsumText = 'Praesent metus purus, sodales quis porta sagittis, volutpat ut nisi. Nunc eget lacus sit amet neque imperdiet pretium. Quisque sit amet est cursus, pellentesque mi nec, rutrum erat'
  
  return (
    <>
      <div className={styles.homeBox}>
        <Header />
        <HeroBanner />
        <SearchBar />
        <CardGrid sectionTitle="Logement Populaire" />
        <LargeInfoBox />
        <div className={styles.homeDoubleInfoBox}>
          <InfoBox title='Pourquoi nous ?' text={loremIpsumText} />
          <InfoBox title='Nous rejoindre' text={loremIpsumText} />
        </div>
      </div>
    </>
  )
}