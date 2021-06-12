import style from "../style/sheet.module.css";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import StartRoom from "./bottom_sheets/StartRoom";

function BottomSheet({
  sheetVisible,
  setSheetVisible,
  setItemsVisible,
  sheetTitle,
  cardDetail,
  setSheetCreateRoom,
}) {
  return (
    <SwipeableBottomSheet
      open={sheetVisible}
      onChange={() => {
        setSheetVisible(!sheetVisible);
        setItemsVisible(true);
      }}
      fullScreen={sheetTitle === "room detail" ? true : false}
    >
      <div
        className={style.BottomSheetContainer}
        style={{
          backgroundColor: sheetTitle === "profile" ? "transparent" : "",
        }}
      >
        <StartRoom
          setSheetCreateRoom={setSheetCreateRoom}
          setSheetVisible={(item) => {
            setSheetVisible(item);
            setItemsVisible(true);
          }}
        />
      </div>
    </SwipeableBottomSheet>
  );
}

export default BottomSheet;
