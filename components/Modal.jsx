import React, { Fragment, useRef, useState } from 'react';
import { modalState } from '../atoms/modalAtom'
import { useRecoilState } from 'recoil';
import { Dialog, Transition } from '@headlessui/react';
import { BsCamera } from 'react-icons/bs'
import{ db, storage } from '../firebase'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { ref, getDownloadURL, uploadString } from 'firebase/storage';


const Modal = () => {
  const {data: session } = useSession();
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [open, setOpen] = useRecoilState(modalState);

  const addImageToPost = (e) =>{
    const reader = new FileReader();
    if(e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result)
    }

  }

  const uploadPost = async () =>{
    if(isloading) return;

    setIsloading(true);
    // 1) Create a post and add to firestore 'posts' collection
    const docRef = await addDoc(collection(db,'posts'), {
      username:session.user.username,
      caption: captionRef.current.value,
      profileImg: session.user.image,
      timestamp: serverTimestamp(),
    })

   // console.log("doc added", docRef.id)
    // 2) get the post ID for the newly created Post
    // 3) Upload Image to firebase Strorage with the Post ID
    const imageRef = ref(storage, `posts/${docRef.id}/image`);
    // console.log(imageRef)

    // // 4) Get a dowload URL from firebase storage and upload to original post collection
    await uploadString(imageRef, selectedFile, 'data_url')
      .then(async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, 'posts', docRef.id), {
          image: downloadURL
        }); 
      })

      setOpen(false);
      setIsloading(false);
      setSelectedFile(null);

  }

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
              enterTo='opacity-100'
              leave='ease-out duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'

           >
            <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'/>

           </Transition.Child>
           <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden='true'> &#8203;</span>
           <Transition.Child
               as={Fragment}
               enter='ease-out duration-300'
               enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale:125'
               enterTo='opacity-100 translate-y-0 sm:scale:100'
               leave='ease-in duration-200'
               leaveFrom='opacity-100 translate-y-0 sm:scale:100'
               leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale:95'
           >
            <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
              <div>
                { selectedFile ? (
                  <img
                    onClick={()=> setSelectedFile(null)}
                    src={selectedFile}
                    className='w-full rounded-lg object-contain cursor-pointer'
                  />
                ): (
                  <div
                  onClick={()=> filePickerRef.current.click()}
                  className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer'
                
                >
                  <BsCamera 
                    className='h-6 w-6 text-red-600'
                    aria-hidden='true'
                  
                  />

                </div>
                )}
                
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as='h3'
                      className='text-lg leading-6 font-medium text-gray-500'
                    
                    >
                      Upload Photo
                    </Dialog.Title>
                  </div>
                  <div>
                    <input
                      ref={filePickerRef} 
                      type='file'
                      // ref={''}
                      hidden
                      onChange={addImageToPost} 
                    />
                  </div>
                  <div className="mt-2">
                    <input 
                      type="text"
                      className='border-none outline-none w-full text-center'
                      placeholder='Please Enter a caption'
                      ref={captionRef}
                    />
                  </div>
                 

                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    disabled={!selectedFile}
                    onClick={uploadPost}
                    type='button'
                    className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-500 focus:outline-none sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300'
                  >
                    {isloading ? 'Uploading...' : 'Upload Post'}
                  </button>
                </div>
              </div>
            </div>

           </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal