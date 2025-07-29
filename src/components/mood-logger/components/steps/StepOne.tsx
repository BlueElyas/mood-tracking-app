import { RadioGroup, Text } from "react-aria-components";
import BasicButton from "../../../button/BasicButton";
import SingleTag from "../../../tag/SingleTag";
import { moodTags } from "../../constants";
import ProgressBar from "../ProgressBar";
import { useState } from "react";
import type { StepProps } from "../../../../types/types";

function StepOne(props: StepProps) {
  const { next, data, updateForm } = props;
  const [selectedMood, setSelectedMood] = useState(data?.mood || "");

  const handleContinue = () => {
    if (updateForm) updateForm("mood", selectedMood);
    if (next) next();
  };

  return (
    <div className="space-y-6">
      <ProgressBar />
      <div className="space-y-4">
        <Text className="text-3xl font-text-neutral-900 font-semibold">
          How was your mood today?
        </Text>
        <RadioGroup
          className="space-y-2"
          value={selectedMood}
          onChange={setSelectedMood}
        >
          {moodTags.map((tag) => {
            return (
              <SingleTag
                key={tag.value}
                value={tag.value}
                emoji={tag.emoji}
                emojiStyle="w-12 h-12"
              />
            );
          })}
        </RadioGroup>
      </div>

      <BasicButton style="w-full" onPress={handleContinue}>
        Continue
      </BasicButton>
    </div>
  );
}

export default StepOne;
