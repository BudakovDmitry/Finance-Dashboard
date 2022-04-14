import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import "./GoalsPage.css";
import Header from "../../Header/Header";
import GoalsPageItem from "../../GoalsPageItem/GoalsPageItem";

export default function GoalsPage() {
  const [goal, setGoal] = useState([]);

  const initialValue = {
    type: "",
    title: "",
    date: "",
    amount: "",
  };

  const goalSchema = Yup.object({
    type: Yup.string().min(2, "To short!").required("Required"),
    title: Yup.string()
      .min(2, "To short!")
      .max(30, "To long!")
      .required("Required"),
    date: Yup.string()
      .min(2, "To short!")
      .max(30, "To long!")
      .required("Required"),
    amount: Yup.number().required("Required"),
  });

  const updateGoal = (newItem) => {
    setGoal((prevItem) => [...prevItem, newItem]);
  };

  console.log(goal);

  const goalItem = goal.map((item) => {
    return (
      <GoalsPageItem
        type={item.type}
        title={item.title}
        date={item.date}
        amount={item.amount}
      />
    );
  });

  return (
    <div className="page--goals">
      <Header
        title="Goals"
        description="Get a summary of your goals."
        mail="2"
      />
      <div className="page--goals--container">
        <div className="goals--form--container">
          <h3 className="goals--form--title">Add Goals</h3>
          <Formik
            initialValues={initialValue}
            validationSchema={goalSchema}
            onSubmit={(values) => updateGoal(values)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form onSubmit={handleSubmit} className="goals--form">
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  placeholder="Goal"
                  className="goals--form--input"
                />
                {errors.title && touched.title ? (
                  <div className="error--input">{errors.title}</div>
                ) : null}
                <input
                  type="number"
                  name="amount"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.amount}
                  placeholder="Amount"
                  className="goals--form--input"
                />
                {errors.amount && touched.amount ? (
                  <div className="error--input">{errors.amount}</div>
                ) : null}
                <input
                  type="text"
                  name="date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.date}
                  placeholder="Date"
                  className="goals--form--input"
                />
                {errors.date && touched.date ? (
                  <div className="error--input">{errors.date}</div>
                ) : null}
                <select
                  name="type"
                  id="type"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.type}
                  className="goals--form--input--select"
                >
                  <option value="" defaultValue={""}>
                    -- Select type --
                  </option>
                  <option value="Mountain">Rest</option>
                  <option value="Joystick">Entertainment</option>
                  <option value="Brash">Instruments</option>
                </select>
                {errors.type && touched.type ? (
                  <div className="error--input">{errors.type}</div>
                ) : null}
                <button type="submit" className="goals--form--button">
                  Add
                </button>
              </form>
            )}
          </Formik>
        </div>
        <div className="goals--item--container">{goalItem}</div>
      </div>
    </div>
  );
}
