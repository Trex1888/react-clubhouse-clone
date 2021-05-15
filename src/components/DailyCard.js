import style from "../style/daily.module.css";
import { Link } from "react-router-dom";
import data from "../data/dailyCard.json";

function DailyCard() {
  return (
    <div className={style.dailyCard}>
      {data.map((item, index) => (
        <div key={index}>
          <span>{item.time}</span>
          <div>
            <span>{item.title}</span>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DailyCard;
