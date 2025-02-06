/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps } from "formik";
import styles from "./myInput.module.css"

interface IMyInputProps {
  name: string;
  placeholder?: string;
  label?: string;
  type?: "password" | "email" | "text" | "number";
  formik: FormikProps<any>;
}

export default function MyInput({ name, type = 'text', placeholder = 'input text', label = 'label text', formik }: IMyInputProps): JSX.Element {
  // забираем из formik деструктуризацией данные
  const { handleChange, values, errors } = formik;
  return (
    <div>
      {errors[name] ? <label className={styles.errorText}>{errors[name] as string}</label> : <label>{label}</label>}
      <input onChange={handleChange} value={values[name]} className={styles.myInput} placeholder={placeholder} name={name} type={type} />
    </div>
  );
}