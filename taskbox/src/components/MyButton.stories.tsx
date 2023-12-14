import Button from "./MyButton";

export default {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    button: {
      text: "Click here",
    },
  },
};

export const Submit = {
  args: {
    button: {
      text: "Submit",
    },
  },
};
