import React from "react";
import Form from "../Form/Form";
import "./Register.scss";

export default function Register() {
  const inputLabel = [
    {
      type: "text",
      placeholder: "First Name",
      inputId: "firstName",
    },
    {
      type: "text",
      placeholder: "Last Name",
      inputId: "lastName",
    },
    
    {
      type: "email",
      placeholder: "Email",
      inputId: "email",
    },
    {
      type: "password",
      placeholder: "Password",
      inputId: "password",
    },
    {
      type: "password",
      placeholder: "Confirm Password",
      inputId: "confirmPassword",
    },
  ];

  return (
    <main className="register-container">
      <div className={"register-container__article"}>
      <h2 className="section__header">{'SignUp'}</h2>
      <p className="section__text">{"We do not share your personal details"}</p>
    </div>
      <Form
        inputLabel={inputLabel}
        button={"SignUp"}
        className={"register-container__form"}
      />
    </main>
  );
}
