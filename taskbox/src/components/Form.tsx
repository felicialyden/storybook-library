import React from "react";
import "./form.css";
import Input from "./Input";
import Button from "./Button";

const Form = ({ form: { inputData, btnData, placeItems, title } }) => {

  return (
    <div className={['form', `form-${placeItems}`].join(' ')}>
      <h2>{title}</h2>
      <Input
        input={{
          placeholder: inputData.placeholder,
          size: inputData.size,
        }}
      ></Input>
      <Button
        button={{
          primary: btnData.primary,
          size: btnData.size,
          text: btnData.text,
        }}
      />
    </div>
  );
};

export default Form;
