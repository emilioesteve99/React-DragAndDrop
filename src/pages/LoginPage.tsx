import { InputText } from "primereact/inputtext";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={handleLoginSubmit}>
      <InputText ref={emailRef} type="email" placeholder="email" />
      <InputText ref={passwordRef} type="password" placeholder="password" />
      <input type="submit" value="Sign in" />
    </form>
  );
};
