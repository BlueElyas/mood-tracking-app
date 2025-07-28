import { Button, Dialog, DialogTrigger, Popover } from "react-aria-components";
import Avatar from "../../../avatar/Avatar";
import Icon from "../../../icon/Icon";
import SettingsModal from "../SettingsModal";
import { useState } from "react";

export default function ProfileDropdown() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <DialogTrigger isOpen={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <Button className="outline-none">
          <Avatar />
        </Button>

        <Popover className="bg-neutral-0 rounded-xl shadow-xl w-64 p-4 backdrop-blur-sm border border-purple-100">
          <Dialog className="flex flex-col gap-3">
            <div className="flex flex-col gap-0.5">
              <p className="text-base font-semibold text-gray-800">
                Lisa Maria
              </p>
              <p className="text-sm text-gray-500">lisa@mail.com</p>
            </div>

            <div className="border-t border-purple-200 my-2" />

            <div className="flex flex-col gap-2">
              <Button
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition"
                onPress={() => {
                  setIsPopoverOpen(false); // close dropdown
                  setIsModalOpen(true); // open modal
                }}
              >
                <Icon name="settings" className="w-4 h-4" />
                Settings
              </Button>

              <Button className="flex items-center gap-2 text-sm text-gray-700 hover:text-purple-600 transition">
                <Icon name="logout" className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </Dialog>
        </Popover>
      </DialogTrigger>

      {/* Render modal OUTSIDE the dropdown */}
      <SettingsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
