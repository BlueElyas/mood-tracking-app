import { ProgressBar, RadioGroup, Text } from "react-aria-components";
import BasicButton from "../../../button/BasicButton";
import SingleTag from "../../../tag/SingleTag";
import { moodTags } from "../../constants";

type StepProps = {
  data?: any;
  updateForm?: (field: string, value: any) => void;
  next?: () => void;
  back?: () => void;
};

function StepOne(props: StepProps) {
  const { next } = props;

  return (
    <div className="space-y-6">
      <ProgressBar />

      {/* Form Fields */}
      <div className="space-y-4">
        <Text className="text-2xl font-text-neutral-900">
          How was your mood today?
        </Text>
        <RadioGroup className="space-y-2">
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

      {/* Submit Button */}
      <BasicButton style="w-full" onPress={next}>
        Continue
      </BasicButton>
    </div>
  );
}

export default StepOne;
