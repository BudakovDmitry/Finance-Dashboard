import "./NewTransaction.css";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import photo1 from "../../images/photo1.jpeg";
import photo2 from "../../images/photo2.jpeg";
import photo3 from "../../images/photo3.jpeg";

export default function NewTransaction() {
  return (
    <div className="new--transaction">
      <h3 className="new--transaction--title">New transaction</h3>
      <div className="new--transaction--container">
        <div className="container--account">
          <AvatarGroup
            sx={{
              width: 100,
              marginTop: 1,
              marginRight: 1,
              marginLeft: 2,
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={photo1}
              sx={{ width: 40, height: 40 }}
            />
            <Avatar
              alt="Travis Howard"
              src={photo2}
              sx={{ width: 40, height: 40 }}
            />
            <Avatar
              alt="Agnes Walker"
              src={photo3}
              sx={{ width: 40, height: 40 }}
            />
          </AvatarGroup>
          <button className="transaction--title--button">+</button>
        </div>
        <input
          type="text"
          className="transaction--input"
          placeholder="0                                      $"
        />
        <button className="transaction--send--button">
          Send the transfer <span>&#8250;</span>
        </button>
      </div>
    </div>
  );
}
