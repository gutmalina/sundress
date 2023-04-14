import { useDispatch } from "react-redux";
import styles from "./card.module.css";
import {
  addLikeAction,
  deleteLikeAction,
  deleteCardAction,
} from "../../services/actions/cards";

const Card = ({ card }) => {
  const { imageUrl, name, _id, isLike } = card;
  const dispatch = useDispatch();
  const classNameIconLike = isLike
    ? `${styles.icon_like} ${styles.icon_like_active}`
    : `${styles.icon_like} ${styles.icon_like_inactive}`;

  const toggleLike = () => {
    if (isLike) {
      dispatch(deleteLikeAction(_id));
    } else {
      dispatch(addLikeAction(_id));
    }
  };

  const deleteCard = () => {
    dispatch(deleteCardAction(_id));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <figure className={styles.img_container}>
          <img className={styles.img} src={imageUrl} alt={name}></img>
          <figcaption className={styles.name}>
            <p className={styles.subtitle}>{name}</p>
            <ul className={styles.icons}>
              <li className={classNameIconLike} onClick={toggleLike}></li>
              <li className={styles.icon_delete} onClick={deleteCard}></li>
            </ul>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default Card;
