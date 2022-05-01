import { goalDeleted } from "../../actions/actions";
import { useDispatch } from "react-redux";

import * as Img from "../Images/Images";

export default function GoalsPageItem({ id, type, title, date, amount }) {
    const dispatch = useDispatch();

    const deleteItem = (id) => {
        dispatch(goalDeleted(id));
    };

    return (
        <div className="goals--item">
            <img src={Img[`${type}`]} alt="goals-logo" />
            <div className="goals--item--title">
                <h4>{title}</h4>
                <p>{date}</p>
            </div>
            <p className="goals--item--amount">${amount}</p>
            <div className="goals--item--button">
                <button onClick={() => deleteItem(id)} className="button--done">
                    &#10003;
                </button>
                <button
                    onClick={() => deleteItem(id)}
                    className="button--delete"
                >
                    &#10007;
                </button>
            </div>
        </div>
    );
}
