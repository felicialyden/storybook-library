import "./input.css";

type InputProps = {
  input: {
    placeholder: string;
    size: string;
    state?: string;
  };
};

const Input = ({ input: { placeholder, size, state } }: InputProps) => {
  const inputState = state ? `input-${state}` : 'input-idle';
  console.log(state)
  return (
    <input
      className={["input", `input-${size}`, inputState].join(" ")}
      placeholder={placeholder}
      disabled={state === 'disabled'}
    ></input>
  );
};

export default Input;
