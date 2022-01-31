import { InputText } from "primereact/inputtext";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import styles from "./LoginPage.module.scss";

export const LoginPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const emailInputValue = emailRef.current.value;
    const passwordInputValue = passwordRef.current.value;
    console.log({ emailInputValue, passwordInputValue });
    navigate("/grid");
  };

  return (
    <form onSubmit={handleLoginSubmit} className={styles.form}>
      <div className={styles.formgroupInline}>
        <div className="field flex flex-column">
          <label htmlFor="firstname5">Email</label>
          <InputText
            ref={emailRef}
            type="email"
            placeholder="email"
            className="inputfield"
          />
        </div>
        <div className="field flex flex-column">
          <label htmlFor="lastname5">Password</label>
          <InputText
            ref={passwordRef}
            type="password"
            placeholder="password"
            className="inputfield"
          />
        </div>

        <Button label="Login" className="p-button-raised" value="Submit" />
      </div>
    </form>
  );
};
