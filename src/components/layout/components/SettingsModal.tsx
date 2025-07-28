import {
  Modal,
  Dialog,
  Heading,
  ModalOverlay,
  Button,
} from "react-aria-components";
import Icon from "../../icon/Icon";
import { useState, type Dispatch, type SetStateAction } from "react";

interface Props {
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

function SettingsModal({ setIsOpen }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setIsOpen?.(false); // Close dropdown
  };

  return (
    <>
      <Button
        className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition"
        onPress={handleOpen}
      >
        <Icon name="settings" className="w-4 h-4" />
        Settings
      </Button>

      <ModalOverlay
        isDismissable
        isOpen={open}
        onOpenChange={setOpen}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center"
      >
        <Modal className="bg-lightGradient rounded-lg p-6 w-full max-w-[600px] shadow-lg">
          <Dialog>
            <form className="space-y-6">
              <Heading
                slot="title"
                className="text-2xl font-bold text-neutral-900"
              >
                <p>Log your mood</p>
              </Heading>

              {/* Optional manual close button */}
              <Button
                onPress={() => setOpen(false)}
                className="text-sm text-purple-600 underline"
              >
                Close
              </Button>
            </form>
          </Dialog>
        </Modal>
      </ModalOverlay>
    </>
  );
}

export default SettingsModal;
