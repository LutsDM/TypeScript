import * as Yup from "yup";
import { useFormik } from "formik";
import styles from "./limitForm.module.css";

interface LimitFormProps {
  onLimitChange: (limit: number) => void;
}

export default function LimitForm({
  onLimitChange,
}: LimitFormProps): JSX.Element {
  const validationSchema = Yup.object().shape({
    count: Yup.number()
      .typeError("Value must be a number")
      .min(1, "Product count must be at least 1.")
      .max(20, "Value must be less than 20"),
  });

  const formik = useFormik({
    initialValues: { count: 20 },
    validateOnChange: false,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      onLimitChange(values.count);
      resetForm();
    },
  });

  return (
    <>
      <form className={styles.limitForm} onSubmit={formik.handleSubmit}>
        <span> Number of products: </span>
        <input
          onChange={formik.handleChange}
          value={formik.values.count}
          name="count"
          type="number"
        />

        <button type="submit">Show</button>
      </form>
      <div className={styles.error}>{formik.errors.count}</div>
    </>
  );
}
