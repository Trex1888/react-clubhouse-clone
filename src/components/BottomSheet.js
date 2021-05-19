import style from "../style/sheet.module.css";
import SwipeableBottomSheet from "react-swipeable-bottom-sheet";

function BottomSheet({ props }) {
  return (
    <SwipeableBottomSheet
      open={props.sheetVisible}
      onChange={() => {
        props.setSheetVisible(!props.sheetVisible);
        props.setItemsVisible(true);
      }}
      fullScreen={props.sheetTitle === "room detail" ? true : false}
    >
      <div
        className={style.sheetContainer}
        style={{
          backgroundColor: props.sheetTitle === "profile" ? "transparent" : "",
        }}
      ></div>
    </SwipeableBottomSheet>
  );
}

export default BottomSheet;
