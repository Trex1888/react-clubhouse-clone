import style from "../style/sheet.module.css";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";
import StartRoom from "./bottom_sheets/StartRoom";
import NewRoom from "./bottom_sheets/NewRoom";

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
        {sheetTitle === "New Room" ? (
          <NewRoom
            cardDetail={cardDetail}
            setSheetVisible={(item) => {
              setSheetVisible(item);
              setItemsVisible(true);
            }}
          />
        ) : sheetTitle === "Start Room" ? (
          <StartRoom
            setSheetCreateRoom={setSheetCreateRoom}
            setSheetVisible={(item) => {
              setSheetVisible(item);
              setItemsVisible(true);
            }}
          />
        ) : (
          ""
        )}
      </div>
    </SwipeableBottomSheet>
  );
}

export default BottomSheet;
