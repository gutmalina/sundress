import styles from "./card.module.css";

const Card = ({ card }) => {
  const { imageUrl, name, _id } = card;

  return (
    <>
      <div className={styles.wrapper}>
        <figure className={styles.img_container}>
          <img className={styles.img} src={imageUrl} alt={name}></img>
          <figcaption className={styles.name}>
            <p className={styles.subtitle}>{name}</p>
            <ul className={styles.icons}>
              <li className={styles.icon_like}></li>
              <li className={styles.icon_delete}></li>
            </ul>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default Card;
