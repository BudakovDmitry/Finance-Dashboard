import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { goalCreated } from '../../../actions/actions';
import './GoalsPage.css';
import Header from '../../Header/Header';
import GoalsPageItem from '../../GoalsPageItem/GoalsPageItem';
import { nanoid } from 'nanoid';

export default function GoalsPage() {
  const { goals, darkTheme } = useSelector(state => state);
  const dispatch = useDispatch();

  const initialValue = {
    id: '',
    type: '',
    title: '',
    date: '',
    amount: ''
  };

  const goalSchema = Yup.object({
    type: Yup.string().min(2, 'To short!').required('Required'),
    title: Yup.string()
      .min(2, 'To short!')
      .max(30, 'To long!')
      .required('Required'),
    date: Yup.string()
      .min(2, 'To short!')
      .max(30, 'To long!')
      .required('Required'),
    amount: Yup.number().positive().required('Required')
  });

  const addGoal = value => {
    const newItem = {
      ...value,
      id: nanoid()
    };
    dispatch(goalCreated(newItem));
  };

  const goalItem = goals.map(item => {
    return (
      <GoalsPageItem
        key={item.id}
        type={item.type}
        title={item.title}
        date={item.date}
        amount={item.amount}
        id={item.id}
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
