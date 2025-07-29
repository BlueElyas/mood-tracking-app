import ProgressBar from "../ProgressBar";
import BasicButton from "../../../button/BasicButton";
import { Text, TextArea } from "react-aria-components";
import { useState } from "react";
import type { StepProps } from "../../../../types/types";

function StepThree(props: StepProps) {
  const { next, data, updateForm } = props;
  const [howYouFeel, setHowYouFeel] = useState(data?.howYouFeel || "");

  const handleContinue = () => {
    if (updateForm) updateForm("howYouFeel", howYouFeel);
    if (next) next();
  };

  return (
    <div className="space-y-6">
      <ProgressBar isStepThree />
      <div className="space-y-4 flex flex-col">
        <Text className="text-3xl font-text-neutral-900 font-semibold">
          Write about your day?
        </Text>
      </div>
      <TextArea
        className="rounded-lg border-solid border-2 border-neutral-200 w-full min-h-40 placeholder:italic p-2"
        placeholder="Today, I felt..."
        value={howYouFeel}
        onChange={(e) => setHowYouFeel(e.target.value)}
      ></TextArea>

      <BasicButton style="w-full" onPress={handleContinue}>
        Continue
      </BasicButton>
    </div>
  );
}

export default StepThree;
