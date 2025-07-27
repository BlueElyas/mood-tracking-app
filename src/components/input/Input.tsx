import { TextField, Label, Input } from "react-aria-components";

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

  const className = `max-w-[466px] borer-radius fill-neutral-0 text-neutral-600 border-neutral-300 border-2 border-solid rounded-md`;

  return (
    <TextField className="flex flex-col gap-2">
      <Label>{name}</Label>
      <Input
        type={type}
        required={isRequired}
        disabled={isDisabled}
        name={name}
        aria-busy={isLoading}
        className={className}
        placeholder={placeholder}
      />
    </TextField>
  );
}

export default TextInput;
