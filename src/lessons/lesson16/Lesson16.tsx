 import styles from './lesson16.module.css'

import { useFormik } from "formik";
import ChildrenProps from "../../components/childrenProps/ChildrenProps";
import MyButton from "../../components/myButton/MyButton";
import MyInput from "../../components/myInput/MyInput";
import * as Yup from 'yup'; 

const schema = Yup.object().shape({
  email: Yup.string().email('type valid email').required('email is required field'),
  password: Yup.string().min(8, 'password need moree than 8 symbol')
  .required('password is required field')
})

export default function Lesson16(): JSX.Element {
  const formik = useFormik({
    initialValues: {
      email: "formik@gmail.com",
      password: "formik1234",
    } as { email: string; password: string },
    validateOnChange: false,
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <div className={styles.lessonContainer}>
      <h2>Lesson 16: practice before test</h2>
      <ChildrenProps func={() => console.log("много разных пропсов 🙇‍♂️")}>
        {/* обернутые данные придут на место children */}
        <p style={{ color: "red" }}>переданные данные</p>
        <ul>
          <li>данные из lesson 16</li>
          <li>можно передать много данных</li>
        </ul>
      </ChildrenProps>
      <h2>2. Input components + formik</h2>
      <form style={{ width: '300px' }} onSubmit={formik.handleSubmit}>
        <MyInput name="email" formik={formik} />
        <MyInput name="password" label="type your secret pass" formik={formik} />
        <MyButton text="sign in" />
      </form>
    </div>
  );
}
