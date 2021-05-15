import style from "../style/home.module.css";
import DailyCard from "../components/DailyCard";
import Header from "../components/Header";
import RoomCard from "../components/RoomCard";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";

function Home() {
  return (
    <>
      <Header />
      <div className={style.home_Container}>
        <DailyCard />
        <RoomCard />
      </div>
      <div className={style.action_btn}>
        <button>
          <AiOutlinePlus className="me-2" />
          Start a Room
        </button>
        <button>
          <BsGrid3X3Gap />{" "}
        </button>
      </div>
    </>
  );
}
//214
export default Home;
