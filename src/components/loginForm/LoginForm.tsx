import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import "./loginForm.css";

function LoginForm() {
  return (
    <div className="loginForm">
      <h2>Login🤖</h2>
      <form>
        <MyInput name={"login"} type={"text"} placeholder={"Login"} label="Login" />
        <MyInput name= {"email"} type={"email"} placeholder={"Email"} label={"Email"} />
        <MyInput name={"password"} type={"password"} placeholder={"Password"} label={"Password"}/>
        <MyButton type="submit" text="Login"/>
      </form>
    </div>
  );
}

export default LoginForm;
