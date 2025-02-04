import { useFormik } from "formik";
import styles from "./registrationForm.module.css";
import * as Yup from "yup";
import MyButton from "../myButton/MyButton";

interface IRegistrationForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^[a-zA-Z0-9_]+$/, "Only letters, digits, and underscores.")
    .min(3, "Username is more than 3 symbol.")
    .max(20, "Username is less 20 symbol.")
    .required("Username is required."),
  email: Yup.string()
    .required("Email is required.")
    .email("Incorrect email format."),
  password: Yup.string()
    .min(8, "Password is more than 8 symbol")
    .max(32, "Password is less 32 symbol")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
    .matches(/\d/, "Password must contain at least one digit.")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf(
      [Yup.ref("password")],
      "Confirm password does not match the password."
    )
    .required("Confirm Password is required"),
});

export default function RegistrationForm(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    } as IRegistrationForm,
    validateOnChange: false,
    validationSchema,
    onSubmit: (values,{resetForm}) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div className={styles.registrationContainer}>
      <h2>Registration Form</h2>
      <form className={styles.registrationForm} onSubmit={formik.handleSubmit}>
        <input
          value={formik.values.username}
          onChange={formik.handleChange}
          placeholder="username"
          type="text"
          name="username"
        />
        <span className={styles.errorMessage}>{formik.errors.username}</span>
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="email"
          type="text"
          name="email"
        />
        <span className={styles.errorMessage}>{formik.errors.email}</span>
        <input
          value={formik.values.password}
          onChange={formik.handleChange}
          placeholder="password"
          type="text"
          name="password"
        />
        <span className={styles.errorMessage}>{formik.errors.password}</span>
        <input
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          placeholder="confirm password"
          type="text"
          name="confirmPassword"
        />
        <span className={styles.errorMessage}>
          {formik.errors.confirmPassword}
        </span>
        <MyButton type="submit" text="send" />
      </form>
    </div>
  );
}
