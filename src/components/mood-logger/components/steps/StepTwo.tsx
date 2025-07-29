import { useState } from "react";
import BasicButton from "../../../button/BasicButton";
import MultipleTag from "../../../tag/MultipleTag";
import { feelingTags } from "../../constants";
import ProgressBar from "../ProgressBar";
import { Text } from "react-aria-components";

type StepProps = {
  data: any;
  updateForm: (field: string, value: any) => void;
  next: () => void;
  back: () => void;
};

function StepTwo(props: StepProps) {
  const { next, data, updateForm } = props;
  const [feelings, setFeelings] = useState<string[]>(data?.feelings || []);

  // Allow any number of selections
  const handleChange = (value: string, checked: boolean) => {
    if (checked) {
      setFeelings([...feelings, value]);
    } else {
      setFeelings(feelings.filter((f) => f !== value));
    }
  };

  const handleContinue = () => {
    updateForm("feelings", feelings);
    next();
  };

  const isDisabled = feelings.length === 0 || feelings.length > 3;

  return (
    <div className="space-y-6">
      <ProgressBar isStepTwo />
      <div className="space-y-4 flex flex-col">
        <Text className="text-3xl font-text-neutral-900 font-semibold">
          How did you feel?
        </Text>
        <Text>Select up to three tags:</Text>
        <div className="flex flex-wrap gap-4">
          {feelingTags.map((tag) => (
            <MultipleTag
              key={tag}
              value={tag}
              isSelected={feelings.includes(tag)}
              onChange={(checked: boolean) => handleChange(tag, checked)}
            />
          ))}
        </div>
      </div>
      <BasicButton
        style={`w-full ${
          isDisabled ? "bg-red-300 hover:bg-red-300 cursor-not-allowed" : ""
        }`}
        onPress={handleContinue}
        disabled={isDisabled}
      >
        {isDisabled ? "You can only select upto 3" : "Continue"}
      </BasicButton>
    </div>
  );
}

export default StepTwo;
