import MoodLoggerModal from "../../../components/mood-logger/MoodLoggerModal";
import { getFormattedDate } from "../../../utils/date-utils";

function Hero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 p-8  ">
        <h2 className="text-blue-900 text-xl font-bold">Hello, Lisa!</h2>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">How are you feeling today?</h1>
          <p className="text-neutral-600 text-sm mt-3 font-semibold">
            {getFormattedDate()}
          </p>
        </div>
        <MoodLoggerModal />
      </div>
    </>
  );
}

export default Hero;
