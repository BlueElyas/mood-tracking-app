import { Radio } from "react-aria-components";
import Icon from "../icon/Icon";
import type { IconName } from "../../types/types";

interface Props {
  value: string;
  emoji?: IconName;
  emojiStyle?: string;
}

function SingleTag(props: Props) {
  const { value, emoji, emojiStyle } = props;
  return (
    <Radio
      value={value}
      className={({ isSelected, isFocusVisible }) =>
        `group flex items-center gap-2 px-3 py-3 rounded-md border-2 justify-between  ${
          isSelected ? "bg-blue-200 border-blue-500" : "border-blue-200"
        } ${
          isFocusVisible
            ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-white"
            : ""
        } cursor-pointer`
      }
    >
      {({ isSelected }) => (
        <>
          <div className="flex items-center gap-2">
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                isSelected ? "border-blue-600" : "border-neutral-900"
              }`}
            >
              {isSelected && (
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
              )}
            </div>
            <span className="text-neutral-900 font-bold">{value}</span>
          </div>
          {emoji ? <Icon className={`${emojiStyle}`} name={emoji} /> : ""}
        </>
      )}
    </Radio>
  );
}

export default SingleTag;
