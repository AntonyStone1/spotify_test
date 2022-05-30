import styles from './Card.module.scss'

const Card = ({ card }) => {
  return (
    <div className={styles.list_item}>
      <div className={styles.list_item__img}><img src={card.images[2].url} alt='album img' /></div>
      <div className={styles.text_container}>
        <div className={styles.card_name}>{card.name}</div>
        <div>{card.artists[0].name}</div>
        <div>{card.release_date}</div>
        <div className={styles.text_link}><a href={card.external_urls.spotify}>Visit on Spotify</a></div>
      </div>
    </div>
  )
}

export default Card