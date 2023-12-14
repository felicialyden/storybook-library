import Input from "./Input";

export default {
  component: Input,
  title: "Input",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    input: {
      placeholder: "Search here...",
      size: 'medium'
    },
  },
};

export const Small = {
  args: {
    input: {
      placeholder: "Search here...",
      size: 'small'
    },
  },
};

export const Medium = {
  args: {
    input: {
      placeholder: "Search here...",
      size: 'medium'
    },
  },
};

export const Large = {
  args: {
    input: {
      placeholder: "Search here...",
      size: 'large'
    },
  },
};

export const Error = {
  args: {
    input: {
      placeholder: "Search here...",
      size: 'medium',
      state: 'error'
    },
  },
};

export const Disabled = {
  args: {
    input: {
      placeholder: "Search here...",
      size: 'medium',
      state: 'disabled'
    },
  },
};
