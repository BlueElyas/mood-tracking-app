import ProgressBar from "../ProgressBar";
import BasicButton from "../../../button/BasicButton";
import { RadioGroup, Text } from "react-aria-components";
import { sleepOptions } from "../../constants";
import SingleTag from "../../../tag/SingleTag";
import type { StepProps } from "../../../../types/types";
import { useState } from "react";

function StepFour(props: StepProps) {
  const [selectedSleep, setSelectedSleep] = useState("");
  const { updateForm, submitForm } = props;

  const handleContinue = () => {
    if (updateForm) updateForm("hoursOfSleep", selectedSleep);
    if (submitForm) submitForm();
  };

  return (
    <div className="space-y-6">
      <ProgressBar isFinalStep />
      <div className="space-y-4 flex flex-col">
        <Text className="text-3xl font-text-neutral-900 font-semibold">
          How many hours did you sleep today?
        </Text>
      </div>

      <RadioGroup className="flex flex-col gap-5" onChange={setSelectedSleep}>
        {sleepOptions.map((item) => {
          return <SingleTag key={item} value={item} />;
        })}
      </RadioGroup>

      <BasicButton style="w-full" onPress={handleContinue}>
        Submit
      </BasicButton>
    </div>
  );
}

export default StepFour;
