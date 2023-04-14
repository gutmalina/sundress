import { useEffect, useState } from "react";
import api from "../../utils/api";
import Card from "../card/card";
import styles from './app.module.css'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .getAllData()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <h1 className={styles.title}>Тестовое задание react в проекты Сарафан и Докт24</h1>
    <p className={styles.subtitle}>Для выполнения тестового задания использовано публичное Disney API</p>
    <div className={styles.filter}>
      <label for="like" className={styles.text}>Только отмеченные Like</label>
      <input id="like" className={styles.checkbox} type="checkbox"></input>
    </div>
      <section className={styles.cards}>
        {data.map((card) => (
          <Card card={card} key={card._id}></Card>
        ))}
      </section>
    </>
  );
};

export default App;
