import style from "../style/phone.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";

function Phone() {
  const [value, setValue] = useState();
  return (
    <div className={style.phoneContainer}>
      <Link exact to="/" className={style.backBtn}>
        <img src="/images/arrow.png" alt="back" />
      </Link>
      <h1>Enter Your Phone</h1>
      <PhoneInput
        international
        defaultCountry="US"
        value={value}
        onChange={setValue}
      />
      <p>
        By entering your number, you're agreeing to our{" "}
        <span>Terms of Services and Privacy Policy. </span>
        Thanks
      </p>
      <Link
        exact
        to="/confirm"
        className="primaryBtn d-flex align-items-center"
      >
        Next
      </Link>
    </div>
  );
}

export default Phone;
