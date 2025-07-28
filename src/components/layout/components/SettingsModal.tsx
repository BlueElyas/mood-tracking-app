import {
  Modal,
  ModalOverlay,
  Dialog,
  Heading,
  Button,
} from "react-aria-components";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SettingsModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <ModalOverlay
      isDismissable
      isOpen
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
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

            <div className="flex justify-end">
              <Button
                onPress={onClose}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg"
              >
                Close
              </Button>
            </div>
          </form>
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
}
