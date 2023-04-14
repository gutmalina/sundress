import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/card";
import styles from "./app.module.css";
import { getAllCardsAction } from "../../services/actions/cards";
import { useCallback } from "react";
import { TITLE, SUBTITLE, TEXT_FILTER_ACTIVE, TEXT_FILTER_INACTIVE } from "../../utils/constants";

const App = () => {
  const dispatch = useDispatch();
  const cards = useSelector((store) => store.cards.cards);
  const [isChecked, setIsChecked] = useState(false);
  const textBtnFilter = isChecked ? `${TEXT_FILTER_INACTIVE}` : `${TEXT_FILTER_ACTIVE}`

  const handleChangeChecked = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  };

  const filterCards = useCallback(() => {
    return cards.filter((card) => card.isLike);
  }, [cards]);

  useEffect(() => {
    dispatch(getAllCardsAction());
  }, [dispatch]);

  return (
    <>
      <h1 className={styles.title}>{TITLE}</h1>
      <p className={styles.subtitle}>{SUBTITLE}</p>
      <button type="button" className={styles.btn_filter} onClick={handleChangeChecked}>
      {textBtnFilter}</button>
      <section className={styles.cards}>
        {!isChecked
          ? cards.map((card) => <Card card={card} key={card._id}></Card>)
          : filterCards().map((card) => (
              <Card card={card} key={card._id}></Card>
            ))}
      </section>
    </>
  );
};

export default App;
