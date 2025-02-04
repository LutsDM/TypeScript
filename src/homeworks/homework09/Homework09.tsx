import LoginFormValidation from "../../components/loginFormValidation/LoginFormValidation";
import RegistrationForm from "../../components/registrationForm/RegistrationForm";
import styles from './homework.module.css'

export default function Homework09(): JSX.Element {
  return (
  <div className={styles.homework09Container}>
    <RegistrationForm />
    <LoginFormValidation />
  </div>
  );
}
