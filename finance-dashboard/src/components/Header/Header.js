import "./Header.css";
import Mail from "../../images/icon/Mail-icon.png";
import Notifications from "../../images/icon/Notifications-icon.png";
import User from "../../images/icon/User-icon.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header--title--container">
        <h1 className="header--title">Weekly sumup</h1>
        <p className="header--description">
          Get summary of your weekly online transactions here.
        </p>
      </div>
      <div className="header--account--container">
        <img src={Mail} alt="Mail" />
        <img src={Notifications} alt="Notifications" />
        <img src={User} alt="User" />
        <div className="header--account">
          <p className="header--account--text">
            <span>Andrew</span>
          </p>
          <p className="header--account--text">Admin account</p>
        </div>
      </div>
    </header>
  );
}
