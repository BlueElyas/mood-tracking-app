import type { PropsWithChildren } from "react";
import { Button } from "react-aria-components";

interface Props extends PropsWithChildren {
  onPress?: () => void;
}

function BasicButton(props: Props) {
  const { children, onPress } = props;

  const className =
    "bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white";

  return (
    <>
      <Button className={className} onPress={onPress}>
        {children}
      </Button>
    </>
  );
}

export default BasicButton;
