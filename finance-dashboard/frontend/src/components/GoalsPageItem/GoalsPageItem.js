import { goalDeleted } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";

import * as Img from "../Images/Images";

export default function GoalsPageItem({ id, type, title, date, amount }) {
    const dispatch = useDispatch();
    const { darkTheme } = useSelector((state) => state);

    const deleteItem = (id) => {
        dispatch(goalDeleted(id));
    };

    return (
        <div className={darkTheme ? "goals--item dark" : "goals--item"}>
            <img src={Img[`${type}`]} alt="goals-logo" />
            <div className={darkTheme ? "goals--item--title dark" : "goals--item--title"}>
                <h4>{title}</h4>
                <p>{date}</p>
            </div>
            <p
                className={
                    darkTheme
                        ? "goals--item--amount dark"
                        : "goals--item--amount"
                }
            >
                ${amount}
            </p>
            <div className="goals--item--button">
                <button
                    onClick={() => deleteItem(id)}
                    className={darkTheme ? "button--done dark" : "button--done"}
                >
                    &#10003;
                </button>
                <button
                    onClick={() => deleteItem(id)}
                    className={
                        darkTheme ? "button--delete dark" : "button--delete"
                    }
                >
                    &#10007;
                </button>
            </div>
        </div>
    );
}
