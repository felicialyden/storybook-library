import Button from "./Button";

export default {
  component: Button,
  title: "Button",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    button: {
      text: "Submit",
      size: 'medium'
    },
  },
};

export const Primary = {
  args: {
    button: {
      text: 'Submit',
      primary: true,
      size: 'medium'
    },
  },
};

export const Secondary = {
  args: {
    button: {
      text: 'Submit',
      primary: false,
      size: 'medium'
    },
  },
};

export const Xsmall = {
  args: {
    button: {
      text: 'Submit',
      primary: false,
      size: 'x-small'
    },
  },
};

export const Small = {
  args: {
    button: {
      text: 'Submit',
      primary: false,
      size: 'small'
    },
  },
};

export const Medium = {
  args: {
    button: {
      text: 'Submit',
      primary: false,
      size: 'medium'
    },
  },
};

export const Large = {
  args: {
    button: {
      text: 'Submit',
      primary: false,
      size: 'large'
    },
  },
};

