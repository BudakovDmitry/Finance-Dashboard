import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import './SignUpPage.css';

const SignupSchema = Yup.object({
  email: Yup.string().email('Invalid email!').required('Required'),
  firstName: Yup.string()
    .min(2, 'To short!')
    .max(50, 'To long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'To short!')
    .max(50, 'To long!')
    .required('Required'),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      'Password must contain at least 8 characters, one upper case, one lower case and one number'
    )
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required')
});

export default function SignUpPage() {
  return (
    <div className="signup">
      <div className="signup--container">
        <h2 className="signup--title">Registration</h2>
        <Formik
          initialValues={{
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: ''
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit} className="signup--form">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="signup--input"
                placeholder="Email"
              />
              {errors.email && touched.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                className="signup--input"
                placeholder="First Name"
              />
              {errors.firstName && touched.firstName ? (
                <div className="error">{errors.firstName}</div>
              ) : null}
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                className="signup--input"
                placeholder="Last Name"
              />
              {errors.lastName && touched.lastName ? (
                <div className="error">{errors.lastName}</div>
              ) : null}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="signup--input"
                placeholder="Password"
              />
              {errors.password && touched.password ? (
                <div className="error">{errors.password}</div>
              ) : null}
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                className="signup--input"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className="error">{errors.confirmPassword}</div>
              ) : null}
              <button
                type="submit"
                disabled={isSubmitting}
                className="signup--button"
              >
                Sign Up
              </button>
            </form>
          )}
        </Formik>
        <Link to="/Login" className="signup--login--link">
          Login
        </Link>
      </div>
    </div>
  );
}
