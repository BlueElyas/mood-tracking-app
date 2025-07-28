import { TextArea } from "react-aria-components";

function Textarea() {
  return (
    <TextArea
      className="rounded-lg border-solid border-2 border-neutral-200 w-full min-h-40 placeholder:italic p-2"
      placeholder="Today, I felt..."
    ></TextArea>
  );
}

export default Textarea;
