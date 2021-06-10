import style from "../style/sheet.module.css";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";

function BottomSheet({
  sheetVisible,
  setSheetVisible,
  setItemsVisible,
  sheetTitle,
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
      ></div>
    </SwipeableBottomSheet>
  );
}

export default BottomSheet;
