import React from "react";
import "./form.css";
import Input from "./Input";
import Button from "./Button";

const Form = ({ form: { inputData, btnData, placeItems, title } }) => {

  return (
    <div className={['form', `form-${placeItems}`].join(' ')}>
      <h2>{title}</h2>
      {
        inputData.inputs.map((input) => 
        <Input
        input={{
          placeholder: input.placeholder,
          size: input.size,
          state: input.state
        }}
      ></Input>
        )
      }
      <Button
        button={{
          primary: btnData.primary,
          size: btnData.size,
          text: btnData.text,
          state: btnData.state
        }}
      />
    </div>
  );
};

export default Form;
