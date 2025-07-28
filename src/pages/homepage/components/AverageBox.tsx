interface Props {
  title: string;
}

export default function AverageBox(props: Props) {
  const { title } = props;

  return (
    <>
      <div className="text-lg font-semibold text-neutral-900">
        Average {title}
        <span className="text-sm font-normal text-neutral-500">
          (Last 5 Check-ins)
        </span>
      </div>
      <div className="bg-lightGradient rounded-2xl px-6 py-8 shadow-md flex flex-col items-start justify-center min-h-[140px] w-full max-w-xs">
        <div className=" text-2xl font-bold text-neutral-700">
          Keep tracking!
        </div>
        <div className="mt-2 text-sm text-neutral-500">
          Log 5 check-ins to see your average mood.
        </div>
      </div>
    </>
  );
}
