import {
  DialogTrigger,
  Modal,
  Dialog,
  Heading,
  ModalOverlay,
} from "react-aria-components";
import BasicButton from "../button/BasicButton";
import StepWizard from "./components/steps/StepWizard";

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
              <StepWizard />
            </form>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}

export default MoodLoggerModal;
