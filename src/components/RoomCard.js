import style from "../style/roomCard.module.css";
import data from "../data/roomCard.json";
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from "react-icons/bs";

function RoomCard() {
  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <div>
            <div className={style.roomContainer}>
              <h6>{item.title}</h6>
              <h2>{item.sub_title}</h2>
              <div className={style.roomMembers}>
                <div>
                  <img src="/images/jerry1.jpg" alt="img" />
                  <img src="/images/jerry2.jpg" alt="img" />
                </div>
                <div>
                  {item.members.map((person, index) => (
                    <p key={index}>
                      {person.first_name} {person.last_name} <BsChatDots />
                    </p>
                  ))}
                  <p className="d-flex align-items-center">
                    <span className="me-1">4.2k</span>
                    <BsFillPersonFill />
                    <span className="mx-2"></span>{" "}
                    <span className="me-1">7</span>
                    <BsChatDotsFill />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default RoomCard;
