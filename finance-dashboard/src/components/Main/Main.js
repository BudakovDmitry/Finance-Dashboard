import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <Header />
      <div className="main--item">
        <Cards />
      </div>
    </div>
  );
}
