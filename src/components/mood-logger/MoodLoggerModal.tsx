import {
  DialogTrigger,
  Modal,
  Dialog,
  Heading,
  ModalOverlay,
  Text,
  RadioGroup,
} from "react-aria-components";
import BasicButton from "../button/BasicButton";
import SingleTag from "../tag/SingleTag";
import { moodTags } from "./constants";

function MoodLoggerModal() {
  return (
    <DialogTrigger>
      <BasicButton>Log today's mood</BasicButton>

      <ModalOverlay
        isDismissable
        className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center"
      >
        <Modal className="bg-lightGradient rounded-lg p-6 w-full max-w-[600px] shadow-lg">
          <Dialog>
            <form className="space-y-6">
              {/* Title */}
              <Heading
                slot="title"
                className="text-2xl font-bold text-neutral-900"
              >
                <p>Log your mood</p>
              </Heading>

              {/* Step Progress Bars */}
              <div className="flex space-x-2">
                <div className="h-2 flex-1 rounded-full bg-blue-600" />
                <div className="h-2 flex-1 rounded-full bg-neutral-200" />
                <div className="h-2 flex-1 rounded-full bg-neutral-200" />
                <div className="h-2 flex-1 rounded-full bg-neutral-200" />
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <Text className="text-2xl font-bold text-neutral-900">
                  How was your mood today?
                </Text>
                <RadioGroup className="space-y-2">
                  {moodTags.map((tag) => {
                    return (
                      <SingleTag
                        key={tag.value}
                        value={tag.value}
                        emoji={tag.emoji}
                        emojiStyle="w-12 h-12"
                      />
                    );
                  })}
                </RadioGroup>
              </div>

              {/* Submit Button */}
              <BasicButton style="w-full">Submit</BasicButton>
            </form>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}

export default MoodLoggerModal;
