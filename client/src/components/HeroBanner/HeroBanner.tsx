import styles from './HeroBanner.module.css'

export const HeroBanner = ():JSX.Element => {
  return (
    <>
      <div className={styles.headerBox}>
        <p className={styles.headerTitle}>Trouver le logement de vos rêves.</p>
      </div>
    </>
  )
}