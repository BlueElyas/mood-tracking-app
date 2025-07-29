import { Checkbox } from "react-aria-components";

interface Props {
  value: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  onChange?: (checked: boolean) => void;
}

function MultipleTag({ value, isSelected, isDisabled, onChange }: Props) {
  return (
    <Checkbox
      value={value}
      isSelected={isSelected}
      isDisabled={isDisabled}
      onChange={onChange}
      className={({ isSelected, isFocusVisible }) =>
        `group flex items-center gap-2 px-3 py-2 w-fit rounded-md border-2 ${
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
            className={`w-4 h-4 border-2 rounded-sm flex items-center justify-center ${
              isSelected ? "border-blue-600 bg-blue-600" : "border-neutral-900"
            }`}
          >
            {isSelected && (
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <span className="text-neutral-900 font-bold">{value}</span>
        </>
      )}
    </Checkbox>
  );
}

export default MultipleTag;
