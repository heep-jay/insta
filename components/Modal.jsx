import React from 'react';
import { modalState } from '../atoms/modalAtom'
import { useRecoilState } from 'recoil';

const Modal = () => {

  const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>Modal

      {open && 
      <p>The Modal is opened</p> }
    </div>
  )
}

export default Modal