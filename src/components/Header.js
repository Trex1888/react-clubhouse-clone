import style from "../style/header.module.css";
import { Link } from "react-router-dom";
import { Input } from "antd";

function Header() {
  return (
    <div className={style.header}>
      <Link exact to="/explore">
        <img src="/images/search.png" alt="search" />
      </Link>
      <div className={style.nav_items}>
        <Link exact to="/invite">
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
