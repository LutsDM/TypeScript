import { useState } from "react";
import MyButton from "../myButton/MyButton";
import { useFormik } from "formik";
import styles from "./formGender.module.css"


interface IName {
  inputName: string;
}

export default function FormGender(): JSX.Element {
  const [gender, setGender] = useState<string>("");
  const [probability, setProbability] = useState<string>("");

  const fetchGender = async ({ inputName }: IName) => {
        try {
      const res = await fetch(`https://api.genderize.io/?name=${inputName}`);
      const data = await res.json();
      const genderData: string = data.gender;
      const genderProbability: string = data.probability;
      setGender(genderData);
      setProbability(genderProbability);
    } catch {
    console.log("error fetch");
  }}

    const formik = useFormik({
      // начальные значения для input в форме
      initialValues: {
        inputName: ""
      } as IName,
      // действие которое случится по нажатию на кнопку в форме
      onSubmit: (values: IName) => {
        fetchGender(values)
    }});


  return (
    <div className={styles.genderForm}>
      <h2>Gender Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="GenderForm">
          <input onChange={formik.handleChange}
          value={formik.values.inputName}
            name={"inputName"}
            type={"text"}
            placeholder={"Enter your Name"}
          />
        </label>
        <MyButton type="submit" text="Enter" variant="danger" />

        <h2>{gender === "male" ? "Your gender is: 🧔🏽‍♂️ male" : gender === "female" ? "Your gender is: 👩🏽‍🦰 female" : "Gender not detected"} </h2>

        <h2>{probability === "" ? "" : `Probability: ${probability}` }</h2>
      </form>
    </div>
  );
}
