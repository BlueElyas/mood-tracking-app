import type { PropsWithChildren } from "react";
import { Button } from "react-aria-components";

interface Props extends PropsWithChildren {
  onPress?: any; // TODO: Define a more specific type for onPress
  style?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

function BasicButton(props: Props) {
  const { children, onPress, type = "button", disabled = false, style } = props;

  const className = `bg-blue-700 px-4 py-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500  focus:ring-offset-2 font-semibold focus:ring-offset-white text-lg text-neutral-0 ${style}`;

  return (
    <>
      <Button
        type={type}
        isDisabled={disabled}
        className={className}
        onPress={onPress}
      >
        {children}
      </Button>
    </>
  );
}

export default BasicButton;
