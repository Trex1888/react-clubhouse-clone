import style from "../style/home.module.css";
import { useState } from "react";
import DailyCard from "../components/DailyCard";
import Header from "../components/Header";
import RoomCard from "../components/RoomCard";
import { AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3Gap } from "react-icons/bs";
import data from "../data/roomCard.json";
import BottomSheet from "../components/BottomSheet";

function Home() {
  const [itemsVisible, setItemsVisible] = useState(true);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
  const [loaderVisibility, setLoaderVisibility] = useState(false);
  const [cardId, setCardId] = useState(1);

  return (
    <>
      <Header />
      <div className={style.home_container}>
        <DailyCard />
        <RoomCard />
      </div>

      <div className={style.action_btn}>
        <button onClick={() => setSheetVisible(true)}>
          <AiOutlinePlus className="me-2" />
          Start A Room
        </button>
        <button>
          <BsGrid3X3Gap />
        </button>
      </div>

      {/* <BottomSheet
        sheetTitle="start room"
        setSheetVisible={(item) => setSheetVisible(item)}
        sheetVisible={sheetVisible}
        cardDetail={data.find((item) => item.id === cardId)}
        setItemsVisible={(item) => setItemsVisible(item)}
        setSheetCreateRoom={(item) => {
          setLoaderVisibility(true);
          setTimeout(() => {
            setSheetCreateRoom(item);
            setLoaderVisibility(false);
          }, 1000);
        }}
      /> */}
    </>
  );
}

export default Home;
