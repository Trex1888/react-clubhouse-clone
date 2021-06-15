import style from "../style/profile.module.css";
import exploreStyle from "../style/explore.module.css";
import { Link } from "react-router-dom";
import { BsAt, BsPlus, BsUpload } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineSetting,
  AiOutlineTwitter,
} from "react-icons/ai";

function Profile() {
  return (
    <>
      <div className={style.profileContainer}>
        <div className={exploreStyle.header}>
          <div
            className={`${exploreStyle.head} text-right mb-0`}
            style={{ justifyContent: "space-between" }}
          >
            <Link to="/home">
              <img
                src="/images/arrow.png"
                alt="<-"
                className={exploreStyle.arrow_icon}
                style={{
                  top: "20px",
                  left: "10px",
                }}
              />
            </Link>
            <div className={style.actionBtn}>
              <BsAt />
              <BsUpload />
              <AiOutlineSetting />
            </div>
          </div>
        </div>
        <img
          src="/images/msg12.jpg"
          alt="User"
          className={style.profile_image}
        />
        <h4>Mac McDonald</h4>
        <p>@mac222&</p>
        <div className={style.follow}>
          <p>
            <span>24</span> Followers
          </p>
          <p>
            <span>74</span> Following
          </p>
        </div>
        <button>Add Your Bio</button>
        <div className="mb-4">
          <button className="mb-0">
            <AiOutlineTwitter /> Add Twitter
          </button>
          <button className="mb-0">
            <AiOutlineInstagram /> Add Instagram
          </button>
        </div>
        <div className={style.nominated}>
          <img src="/images/msg12.jpg" alt="User" />
          <div>
            <p>Joined 05-July-2015</p>
            <p>
              Nominated by <span>Bella Jones</span>
            </p>
          </div>
        </div>
        <p>Member of </p>
        <button className={style.addMemberBtn}>
          <BsPlus />
        </button>
      </div>
    </>
  );
}

export default Profile;
