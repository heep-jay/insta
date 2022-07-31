// // import React, { useState } from "react";
// // import InputEmoji from "react-input-emoji";

// // export default function Example() {
// //   const [text, setText] = useState("");

// //   function handleOnEnter(text) {
// //     console.log("enter", text);
// //   }

// //   return (
// //     <div>
// //         <InputEmoji
// //       value={text}
// //       onChange={setText}
// //       cleanOnEnter={false}
// //       onEnter={handleOnEnter}
// //       placeholder="Type a message"
// //     />
// //     </div>
    
// //   );
// // }

// import React, { useState } from 'react';
// import Picker from 'emoji-picker-react';

// const Test = () => {
//   const [chosenEmoji, setChosenEmoji] = useState(null);
//   const [text, setText] = useState('')

//   const onEmojiClick = (event, emojiObject) => {
//     setChosenEmoji(emojiObject);
    
//   };

//   return (
//     <div>
//       <input type="text" value={(e) => setText(e.target.value)} />
//       <Picker onEmojiClick={onEmojiClick} />
//     </div>
//   );
// };

// export default Test;