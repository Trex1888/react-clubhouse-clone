import { useState } from "react";
import { AiOutlineFile, AiOutlinePlus } from "react-icons/ai";
import { BsMicFill, BsMicMuteFill } from "react-icons/bs";
import style from "../../style/roomDetail.module.css";

function NewRoom({ cardDetail, setSheetVisible }) {
  const [muteVisible, setmuteVisible] = useState(false);

  return (
    <>
      <div className={style.roomDetailContainer}>
        <div className={style.head}>
          <div className="d-flex align-items-center">
            <a href="#" onClick={() => setSheetVisible(false)}>
              <img
                src="/images/arrow.png"
                alt="<-"
                className={style.arrow_icon}
              />
            </a>
            <span>Hallway</span>
          </div>
          <div>
            <AiOutlineFile />
            <img
              src="/images/jerry1.jpg"
              alt="User"
              className={style.profile_img}
            />
          </div>
        </div>

        <div className={style.roomDetailCard}>
          <div
            className="d-flex align-items-center justify-content-between flex-wrap"
            style={{ padding: "0.5em 1em" }}
          >
            {cardDetail.members.map((item, index) => (
              <div className={style.memberContainer} key={index}>
                {muteVisible ? (
                  <div className={style.audioIcon}>
                    <BsMicMuteFill />
                  </div>
                ) : (
                  ""
                )}
                <img src="images/jerry1.jpg" alt="User" />
                <p>
                  <span>*</span>
                  {item.first_name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={style.footer}>
          <button
            onClick={() => {
              setSheetVisible(false);
            }}
          >
            <img src="/images/hand-peace.png" alt="/\" />
            Leave Quietly
          </button>
          <div>
            <button>
              <AiOutlinePlus />
            </button>
            <button>
              <img src="/images/stopHandIcon.png" alt="Stop" />
            </button>
            <button
              onClick={() => {
                setmuteVisible(!muteVisible);
              }}
            >
              {muteVisible ? <BsMicMuteFill /> : <BsMicFill />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewRoom;
