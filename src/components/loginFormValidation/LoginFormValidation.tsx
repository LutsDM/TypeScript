import styles from "./loginFormValidation.module.css";
import { useFormik } from "formik";
import MyButton from "../myButton/MyButton";
import * as Yup from "yup";

interface ILoginForm {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required.")
    .email("Incorrect email format."),
  password: Yup.string()
    .min(8, "Password is more than 8 symbol")
    .required("Password is required"),
});

export default function LoginFormValidation(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as ILoginForm,
    validateOnChange: false,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div className={styles.loginContainer}>
      <h2>Login Form</h2>
      <form className={styles.loginForm} onSubmit={formik.handleSubmit}>
        <input
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="email"
          type="text"
          name="email"
        />
        <span className={styles.errorMessage}>{formik.errors.email}</span>
        <input
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder="password"
          type="text"
          name="password"
        />
        <span className={styles.errorMessage}>{formik.errors.password}</span>
        <MyButton type="submit" text="send" />
      </form>
    </div>
  );
}
