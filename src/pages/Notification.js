import style from "../style/phone.module.css";
import { Link } from "react-router-dom";

function Notification() {
  return (
    <div className={style.phoneContainer}>
      <Link exact to="/" className={style.backBtn}>
        <img src="/images/arrow.png" alt="back" />
      </Link>

      <div className="text-center">
        <h1 className="mb-4">One Last Important Step!</h1>
        <h1 className="mb-3">
          Enable notifications to know when people are talking.
        </h1>
        <div className={style.noteContainer}>
          <div className="p-3">
            <h3>"Clubhouse" Would Like To Send You Notifications</h3>
            <p>Notifications may include alerts, sounds, and icon badges.</p>
          </div>

          <div className={style.action_btn}>
            <Link exact to="/home">
              Don't Allow
            </Link>
            <Link exact to="/home">
              Allow
            </Link>
            <img
              src="/images/handIcon.svg"
              alt="hand"
              className={style.hand_icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
