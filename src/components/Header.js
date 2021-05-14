import style from "../style/header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={style.header}>
      <Link exact to="/explore">
        <img src="/images/search.png" alt="search" />
      </Link>
      <div className={style.nav_items}>
        <Link exact to="/friends_invite">
          <img src="/images/invite.png" alt="img" />
        </Link>
        <Link exact to="/upcoming">
          <img src="/images/calendar.png" alt="img" />
        </Link>
        <Link exact to="/activity">
          <img src="/images/noti.png" alt="img" />
        </Link>
        <Link exact to="/profile">
          <img src="/images/b1.png" alt="img" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
