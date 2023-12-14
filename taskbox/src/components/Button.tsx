import './button.css';

type ButtonProps = {
button: {
  text: string;
  size: string;
  primary?: boolean;
  state?: string
}
}

const Button = ({button: {text, size, primary, state}}: ButtonProps) => {
  const mode = primary ? 'btn-primary' : 'btn-secondary';

  return (
    <button 
    className={['btn', `btn-${size}`, mode].join(' ')}
    disabled={state === 'disabled'}
    >
    {text}
    </button>
  )
}

export default Button