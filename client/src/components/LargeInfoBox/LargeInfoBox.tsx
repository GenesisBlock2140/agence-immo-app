import styles from './LargeInfoBox.module.css'

export const LargeInfoBox = ():JSX.Element => {
  return (
    <>
      <div className={styles.LargeInfoBoxBox}>
        <p className={styles.LargeInfoBoxTitle}>Qui sommes-nous ?</p>
        <p className={styles.LargeInfoBoxText}>Praesent metus purus, sodales quis porta sagittis, volutpat ut nisi. Nunc eget lacus sit amet neque imperdiet pretium. Quisque sit amet est cursus, pellentesque mi nec, rutrum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porta sem nunc, vel iaculis velit aliquam posuere.</p>
      </div>
    </>
  )
}