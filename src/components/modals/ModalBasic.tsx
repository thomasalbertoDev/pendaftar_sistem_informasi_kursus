import React, { Fragment } from 'react';
import { Icon } from '@iconify/react';
import { Dialog, Transition } from '@headlessui/react';

interface ModalBasicProps {
  title: string;
  show: boolean;
  open: boolean;
  onClose: () => void;
  onClick: () => void;
  children: React.ReactNode;
}

const ModalBasic: React.FC<ModalBasicProps> = ({ show, open, onClose, title, children }) => {
  return (
    <>
      <div className="mb-5">
        <Transition appear show={show} as={Fragment}>
          <Dialog as="div" open={open} onClose={onClose}>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <div className="fixed inset-0" />
            </Transition.Child>
            <div className="fixed inset-0 bg-[black]/60 z-[999] overflow-y-auto">
              <div className="flex items-start justify-center min-h-screen px-4">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel as="div" className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-4xl my-8 text-black dark:text-white-dark">
                    <div className="flex bg-[#fbfbfb] dark:bg-[#121c2c] items-center justify-between px-5 py-3">
                      <div className="text-lg font-bold">{title}</div>
                      <button type="button" className="text-white-dark hover:text-dark" onClick={onClose}>
                        <Icon icon="ph:x-bold" width={22} />
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <div className="p-5 w-full">{children}</div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default ModalBasic;
