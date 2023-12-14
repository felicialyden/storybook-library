import Form from "./Form";

export default {
  component: Form,
  title: "Form",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    form: {
      inputData: {
        placeholder: 'Full name',
        size: 'medium'
      },
      btnData: {
        text: 'Submit',
        size: 'medium',
        primary: true
      },
      placeItems: 'center',
      title: 'Sign up'
    }
  },
};
