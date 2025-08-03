import type { ChangeEvent } from "react";
import { Input } from "react-aria-components";

interface Props {
  type: string;
  name: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  onChange?: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  onBlur?: {
    (e: FocusEvent): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  value?: string;
}

function TextInput(props: Props) {
  const { type, name, isDisabled, isLoading, isRequired, placeholder } = props;

  const className = `border-opacity-60 fill-neutral-0 px-2 py-3 text-neutral-600 border-neutral-300 border-2 border-solid rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:ring-offset-white `;

  return (
    <Input
      type={type}
      required={isRequired}
      disabled={isDisabled}
      name={name}
      aria-busy={isLoading}
      className={className}
      placeholder={placeholder}
      onChange={props.onChange}
      onBlur={props.onBlur}
      value={props.value}
    />
  );
}

export default TextInput;
