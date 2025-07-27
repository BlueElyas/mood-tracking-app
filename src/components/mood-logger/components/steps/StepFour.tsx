type StepProps = {
  data: any;
  updateForm: (field: string, value: any) => void;
  next: () => void;
  back: () => void;
};

function StepFour({ data, updateForm, next }: StepProps) {
  return (
    <div>
      <h2>Step 1: What's your name?</h2>
      <input
        type="text"
        value={data.name}
        onChange={(e) => updateForm("name", e.target.value)}
      />
      <button onClick={next}>Next</button>
    </div>
  );
}

export default StepFour;
