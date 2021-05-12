import style from "../style/phone.module.css";
import { Link } from "react-router-dom";

function Confirm() {
  return (
    <div className={style.phoneContainer}>
      <Link exact to="/" className={style.backBtn}>
        <img src="/images/arrow.png" alt="back" />
      </Link>

      <div className="text-center">
        <h1 style={{ width: "100%", maxWidth: "200px", marginBottom: "1em" }}>
          Enter The Code We Just Sent You
        </h1>
        <input
          type="text"
          style={{
            width: "100%",
            border: "none",
            textAlign: "center",
            outline: "none",
          }}
        />
        <p className="mt-2">
          Didn't receive it? <span>Tap to resend.</span>
        </p>
      </div>
      <Link
        exact
        to="/notification"
        className="primaryBtn d-flex align-items-center"
      >
        Next
      </Link>
    </div>
  );
}

export default Confirm;
