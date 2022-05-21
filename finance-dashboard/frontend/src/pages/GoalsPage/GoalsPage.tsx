import { Formik } from 'formik';
import GoalsPageItem from 'src/components/GoalsPageItem/GoalsPageItem';
import Header from 'src/components/Header/Header';
import Loader from 'src/components/Loader/Loader';
import { useGoalsPage } from 'src/pages/GoalsPage/useGoalsPage';
import { goalSchema } from 'src/pages/GoalsPage/validationGoal';
import { GoalType } from 'src/types/types';

import './GoalsPage.css';

const initialValue: GoalType = {
  id: '',
  type: '',
  title: '',
  date: '',
  amount: ''
};

export default function GoalsPage() {
  const { addGoal, darkTheme, goals } = useGoalsPage();

  if (!goals) return <Loader />;

  const goalItem = goals.map((item: any) => {
    return (
      <GoalsPageItem
        key={item._id}
        type={item.type}
        title={item.title}
        date={item.date}
        amount={item.amount}
        id={item._id}
      />
    );
  });

  return (
    <div className="page--goals">
      <Header title="Goals" description="Get a summary of your goals." />
      <div className="page--goals--container">
        <div className="goals--form--container">
          <h3
            className={
              darkTheme ? 'goals--form--title dark' : 'goals--form--title'
            }
          >
            Add Goals
          </h3>
          <Formik
            initialValues={initialValue}
            validationSchema={goalSchema}
            onSubmit={values => addGoal(values)}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit
            }) => (
              <form onSubmit={handleSubmit} className="goals--form">
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  placeholder="Goal"
                  className={
                    darkTheme ? 'goals--form--input dark' : 'goals--form--input'
                  }
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
                  className={
                    darkTheme ? 'goals--form--input dark' : 'goals--form--input'
                  }
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
                  className={
                    darkTheme ? 'goals--form--input dark' : 'goals--form--input'
                  }
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
                  className={
                    darkTheme
                      ? 'goals--form--input--select dark'
                      : 'goals--form--input--select'
                  }
                >
                  <option value="" defaultValue={''}>
                    -- Select type --
                  </option>
                  <option value="Mountain">Rest</option>
                  <option value="Joystick">Entertainment</option>
                  <option value="Brash">Instruments</option>
                </select>
                {errors.type && touched.type ? (
                  <div className="error--input">{errors.type}</div>
                ) : null}
                <button
                  type="submit"
                  className={
                    darkTheme
                      ? 'goals--form--button dark'
                      : 'goals--form--button'
                  }
                >
                  Add
                </button>
              </form>
            )}
          </Formik>
        </div>
        <div className="goals--item--container">
          {goals.length > 0 ? (
            goalItem
          ) : (
            <h3 className="no--goals--item">
              No goals, please add first goal.
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}
