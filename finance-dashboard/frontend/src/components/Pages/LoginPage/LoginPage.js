import { Link } from "react-router-dom";
import Logo from "../../../images/Logo.png";
import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login">
      <div className="login--container">
        <img src={Logo} alt="Logo" className="login--logo" />
        <h2 className="login--title">Welcome!</h2>
        <form action="#" className="login--form">
          <input type="email" className="login--input" placeholder="Email" />
          <input
            type="password"
            className="login--input"
            placeholder="Password"
          />
          <button className="login--button">Login</button>
        </form>
        <Link to="/SignUp" className="login--signup--link">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
