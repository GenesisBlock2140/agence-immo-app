import styles from './Footer.module.css'

export const Footer = ():JSX.Element => {

  return (
    <>
      <div className={styles.footerBox}>
        <p>Copyright EazyLoger 2023 - Using ReactJS and Strapi for back-end.</p>
        <p>Lien du repository Github</p>
      </div>
    </>
  )
  
}