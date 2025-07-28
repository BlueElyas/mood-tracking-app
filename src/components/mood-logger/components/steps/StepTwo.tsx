import BasicButton from "../../../button/BasicButton";
import MultipleTag from "../../../tag/MultipleTag";
import { feelingTags } from "../../constants";
import ProgressBar from "../ProgressBar";
import { RadioGroup, Text } from "react-aria-components";

type StepProps = {
  data: any;
  updateForm: (field: string, value: any) => void;
  next: () => void;
  back: () => void;
};

function StepTwo(props: StepProps) {
  const { next } = props;
  return (
    <div className="space-y-6">
      <ProgressBar isStepTwo />
      <div className="space-y-4 flex flex-col">
        <Text className="text-3xl font-text-neutral-900 font-semibold">
          How did you feel?
        </Text>
        <Text>Select up to three tags:</Text>
        <RadioGroup className="flex flex-wrap gap-4">
          {feelingTags.map((tag) => {
            return <MultipleTag value={tag} />;
          })}
        </RadioGroup>
      </div>
      <BasicButton style="w-full" onPress={next}>
        Continue
      </BasicButton>
    </div>
  );
}

export default StepTwo;
