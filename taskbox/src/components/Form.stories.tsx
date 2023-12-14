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
        inputs: [
          {
            placeholder: 'Full name',
            size: 'medium'
          },
          {
            placeholder: 'Email',
            size: 'medium'
          }
        ]
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

export const Disabled = {
  args: {
    form: {
      inputData: {
        inputs: [
          {
            placeholder: 'Full name',
            size: 'medium',
            state: 'disabled'
          },
          {
            placeholder: 'Email',
            size: 'medium',
            state: 'disabled'
          }
        ]
      },
      btnData: {
        text: 'Submit',
        size: 'medium',
        state: 'disabled'
      },
      placeItems: 'center',
      title: 'Sign up'
    }
  },
};
