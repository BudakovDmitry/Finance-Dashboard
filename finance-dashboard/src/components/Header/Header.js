import "./Header.css";
import User from "../../images/icon/User-icon.png";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Header({ mail, title, description }) {
  return (
    <header className="header">
      <div className="header--title--container">
        <h1 className="header--title">{title}</h1>
        <p className="header--description">{description}</p>
      </div>
      <div className="header--account--container">
        <Badge badgeContent={mail.length} color="error">
          <MailIcon color="disabled" />
        </Badge>
        <Badge color="error" variant="dot" overlap="circular">
          <NotificationsIcon color="disabled" />
        </Badge>
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
