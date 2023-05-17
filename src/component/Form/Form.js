import React from "react";
import "./Form.scss";
import Button from "../../common/Button/Button";
import Inputbox from "../../common/Input/Inputbox";
import useForm from "../../Hooks/useForm";
import validate from "../../Hooks/validateForms";

export default function Form({ className = "", inputLabel, button }) {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

  return (
    <form
      className={`${className} form`}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      {inputLabel.map((input) => (
        <Inputbox
          key={input.inputId}
          input={input}
          handleChange={handleChange}
          values={values[input.inputId]}
          errors={errors[input.inputId]}
        />
      ))}
      <Button className={"form__login-button"}>{button}</Button>
    </form>
  );
}
