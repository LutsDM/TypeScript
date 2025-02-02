import { useState } from "react";
import MyButton from "../myButton/MyButton";
import { useFormik } from "formik";

interface IName {
  inputName: string;
}

export default function FormGender(): JSX.Element {
  const [gender, setGender] = useState<string>("");

  const fetchGender = async ({ inputName }: IName) => {
        try {
      const res = await fetch(`https://api.genderize.io/?name=${inputName}`);
      const data = await res.json();
      const genderData: string = data.gender;
      setGender(genderData);
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
    <div>
      <h2>FormGender</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="GenderForm">
          <input onChange={formik.handleChange}
          value={formik.values.inputName}
            name={"inputName"}
            type={"text"}
            placeholder={"Input your Name"}
          />
        </label>
        <MyButton type="submit" text="Enter" />

        <h2>Your gender is:{gender === "male" ? "🧔🏽‍♂️" : "👩🏽‍🦰"} </h2>
      </form>
    </div>
  );
}
