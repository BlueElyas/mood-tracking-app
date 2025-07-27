import { Input } from "react-aria-components";

interface Props {
  type: string;
  name: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  placeholder?: string;
}

function TextInput(props: Props) {
  const { type, name, isDisabled, isLoading, isRequired, placeholder } = props;

  const className = `max-w-[466px] borer-radius fill-neutral-0 text-neutral-600 border-neutral-300 border-2 border-solid rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white`;

  return (
    <Input
      type={type}
      required={isRequired}
      disabled={isDisabled}
      name={name}
      aria-busy={isLoading}
      className={className}
      placeholder={placeholder}
    />
  );
}

export default TextInput;
