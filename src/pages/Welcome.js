import style from "../style/welcome.module.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className={style.welcomeContainer}>
      <h1>Welcome!</h1>
      <div className={style.welcomeInfo}>
        <p>
          We are working hard to get Clubhouse ready for everyone! While we wrap
          up the finishing touches, we're adding more people gradually to make
          sure nothing breaks.
        </p>
        <p>
          Anyone can join with an invite from an existing user - or reserve your
          username and we'll text you if you have a friend on the app who can
          let you in. We are so grateful you're here and can't wait to have you
          join!
        </p>
        <p>Paul, Rohan & The Clubhosue Team</p>
      </div>
      <div className={style.actionBtn}>
        <Link
          exact
          to="/username"
          className="primaryBtn d-flex align-items-center mb-3"
        >
          Get Username{" "}
        </Link>
        <Link>Have An Invite Text? Sign in</Link>
      </div>
    </div>
  );
}

export default Welcome;
