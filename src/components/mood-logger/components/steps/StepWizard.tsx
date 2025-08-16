import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import type { FormDataProps } from "../../../../types/types";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";

const steps = [StepOne, StepTwo, StepThree, StepFour];

export default function StepWizard() {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState<FormDataProps>({
    mood: "",
    feelings: [],
    howYouFeel: "",
    hoursOfSleep: "",
    currentDay: new Date(),
  });
  const { save } = useLocalStorage("user");

  const StepComponent = steps[stepIndex];

  const next = () => {
    if (stepIndex < steps.length - 1) setStepIndex((i) => i + 1);
  };

  const back = () => {
    if (stepIndex > 0) setStepIndex((i) => i - 1);
  };

  const updateForm = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  console.log(formData);

  const submitForm = () => {
    save(formData);
    setFormData({
      mood: "",
      feelings: [],
      howYouFeel: "",
      hoursOfSleep: "",
      currentDay: new Date(),
    });
  };

  return (
    <div>
      <StepComponent
        data={formData}
        updateForm={updateForm}
        next={next}
        back={back}
        submitForm={submitForm}
      />
    </div>
  );
}
