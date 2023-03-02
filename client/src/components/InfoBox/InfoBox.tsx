import styles from './InfoBox.module.css'

interface InfoBoxProps {
  title: string
  text: string
}

export const InfoBox = ({title, text}:InfoBoxProps):JSX.Element => {
  return (
    <>
      <div className={styles.InfoBoxBox}>
        <p className={styles.InfoBoxTitle}>{title}</p>
        <p className={styles.InfoBoxText}>{text}</p>
      </div>
    </>
  )
}