// import styles from './Login.module.css'
import * as Yup from 'yup';
import { useFormik } from "formik";
import MyInput from '../../../components/myInput/MyInput';
import MyButton from "../../../components/myButton/MyButton";
import { useAppDispatch } from "../../../app/hooks";
import { loginAction } from "../authActions";

export const schema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required'),

  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Password is required'),
});


export default function Login(): JSX.Element {
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      username: 'emilys',
      password: 'emilyspass'
    } as { username: string; password: string; },
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      dispatch(loginAction(values))
      console.log(values);
      resetForm();
    }
  });

  return (
    <div>
      <h2>Login 🔐</h2>
      <form onSubmit={formik.handleSubmit}>
        <MyInput name="username" formik={formik} label="Username:" placeholder="type your username" />
        <MyInput name="password" formik={formik} label="Password:" placeholder="type your password" />
        <MyButton text="sign in" />
      </form>
    </div>
  );
}

