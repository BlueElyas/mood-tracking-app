import ProgressBar from "../ProgressBar";
import BasicButton from "../../../button/BasicButton";
import { Text } from "react-aria-components";
import Textarea from "../../../textarea.tsx/Textarea";

type StepProps = {
  data: any;
  updateForm: (field: string, value: any) => void;
  next: () => void;
  back: () => void;
};

function StepThree(props: StepProps) {
  const { next } = props;
  return (
    <div className="space-y-6">
      <ProgressBar isStepTwo />
      <div className="space-y-4 flex flex-col">
        <Text className="text-3xl font-text-neutral-900 font-semibold">
          Write about your day?
        </Text>
      </div>

      <Textarea />

      <BasicButton style="w-full" onPress={next}>
        Continue
      </BasicButton>
    </div>
  );
}

export default StepThree;
