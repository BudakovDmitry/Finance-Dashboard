import { Link } from "react-router-dom";
import "./SignUpPage.css";

export default function SignUpPage() {
  return (
    <div className="signup">
      <div className="signup--container">
        <h2 className="signup--title">Welcome!</h2>
        <form action="#" className="signup--form">
          <input type="email" className="signup--input" placeholder="Email" />
          <input
            type="text"
            className="signup--input"
            placeholder="First Name"
          />
          <input
            type="text"
            className="signup--input"
            placeholder="Last Name"
          />
          <input
            type="password"
            className="signup--input"
            placeholder="Password"
          />
          <input
            type="password"
            className="signup--input"
            placeholder="Confirm Password"
          />
          <button className="signup--button">Sign Up</button>
        </form>
        <Link to="/Login" className="signup--login--link">
          Login
        </Link>
      </div>
    </div>
  );
}
