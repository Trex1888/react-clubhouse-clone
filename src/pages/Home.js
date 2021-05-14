import style from "../style/home.module.css";
import DailyCard from "../components/DailyCard";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <div className={style.home_Container}>
        <DailyCard />
      </div>
    </>
  );
}

export default Home;
