import { Radio } from "react-aria-components";

interface Props {
  value: string;
}

function SingleTag({ value }: Props) {
  return (
    <Radio
      value={value}
      className={({ isSelected, isFocusVisible }) =>
        `group flex items-center gap-2 px-3 py-2  w-[176px] rounded-md border-2 ${
          isSelected ? "bg-blue-100 border-blue-500" : "border-blue-100"
        } ${
          isFocusVisible
            ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-white"
            : ""
        } cursor-pointer`
      }
    >
      {({ isSelected }) => (
        <>
          <div
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
              isSelected ? "border-blue-600" : "border-neutral-900"
            }`}
          >
            {isSelected && <div className="w-2 h-2 bg-blue-600 rounded-full" />}
          </div>
          <span className="text-neutral-900 font-bold">{value}</span>
        </>
      )}
    </Radio>
  );
}

export default SingleTag;
