type StepProps = {
  data: any;
  updateForm: (field: string, value: any) => void;
  next: () => void;
  back: () => void;
};

function StepTwo({ data, updateForm, next }: StepProps) {
  return (
    <div>
      {/* Step Progress Bars - Step 1 */}
      <div className="flex space-x-2">
        <div className="h-2 flex-1 rounded-full bg-blue-600" />
        <div className="h-2 flex-1 rounded-full bg-neutral-200" />
        <div className="h-2 flex-1 rounded-full bg-neutral-200" />
        <div className="h-2 flex-1 rounded-full bg-neutral-200" />
      </div>

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

export default StepTwo;
