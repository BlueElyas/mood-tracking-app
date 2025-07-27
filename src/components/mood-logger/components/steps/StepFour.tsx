import ProgressBar from "../ProgressBar";

type StepProps = {
  data: any;
  updateForm: (field: string, value: any) => void;
  next: () => void;
  back: () => void;
};

function StepFour(props: StepProps) {
  return (
    <div>
      <ProgressBar isFinalStep />
      {/* <h2>Step 1: What's your name?</h2> */}
      Step four
      <button onClick={() => {}}>Next</button>
    </div>
  );
}

export default StepFour;
