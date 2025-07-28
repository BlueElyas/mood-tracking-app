import ProgressBar from "../ProgressBar";
import BasicButton from "../../../button/BasicButton";
import { RadioGroup, Text } from "react-aria-components";
import { sleepOptions } from "../../constants";
import SingleTag from "../../../tag/SingleTag";

type StepProps = {
  data: any;
  updateForm: (field: string, value: any) => void;
  next: () => void;
  back: () => void;
};

function StepFour(props: StepProps) {
  const { updateForm } = props;
  return (
    <div className="space-y-6">
      <ProgressBar isFinalStep />
      <div className="space-y-4 flex flex-col">
        <Text className="text-3xl font-text-neutral-900 font-semibold">
          How many hours did you sleep today?
        </Text>
      </div>

      <RadioGroup className="flex flex-col gap-5">
        {sleepOptions.map((item) => {
          return <SingleTag key={item} value={item} />;
        })}
      </RadioGroup>

      <BasicButton style="w-full" onPress={updateForm}>
        Submit
      </BasicButton>
    </div>
  );
}

export default StepFour;
