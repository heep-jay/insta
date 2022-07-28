import React, { Fragment } from 'react';
import { modalState } from '../atoms/modalAtom'
import { useRecoilState } from 'recoil';
import { Dialog, Transition } from '@headlessui/react';

const Modal = () => {

  const [open, setOpen] = useRecoilState(modalState);
  return (
    <Transition.Root show={open}> as={Fragment}
      <Dialog 
        as='div'
        onClose={setOpen} 
        className='fixed z-10 inset-0 overflow-y-auto'
      >
        <div className='flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
           <Transition.Child 
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTO='opacity-100'
              leave='ease-out duration-200'
              leaveFrom='opacity-100'
              leaveTO='opacity-0'

           >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'/>

           </Transition.Child>
           <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden='true'></span>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal