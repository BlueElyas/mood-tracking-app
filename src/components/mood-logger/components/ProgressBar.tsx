interface Props {
  isStepTwo?: boolean;
  isStepThree?: boolean;
  isFinalStep?: boolean;
}

function ProgressBar(props: Props) {
  const { isStepTwo, isStepThree, isFinalStep } = props;

  let count = isStepTwo ? 1 : isStepThree ? 2 : isFinalStep ? 3 : 0;

  return (
    <div className="flex space-x-2">
      <div className="h-2 flex-1 rounded-full bg-blue-600" />
      <div
        className={`h-2 flex-1 rounded-full bg-${
          count >= 1 ? "blue-600" : "neutral-200"
        }`}
      />
      <div
        className={`h-2 flex-1 rounded-full bg-${
          count >= 2 ? "blue-600" : "neutral-200"
        }`}
      />
      <div
        className={`h-2 flex-1 rounded-full bg-${
          count >= 3 ? "blue-600" : "neutral-200"
        }`}
      />
    </div>
  );
}

export default ProgressBar;
