import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import React, { useState } from "react";
import db from "../firebase";
import "./ChatInput.css";
import { useStateValue } from "../StateProvider";

function ChatInput({ channelName, channelId }) {
  const [{ user }, dispatch] = useStateValue();
  const [message, setMessage] = useState();
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      const docRef = doc(
        db,
        "channels",
        channelId
      );
      const messageRef = collection(
        docRef,
        "messages"
      );
      addDoc(messageRef, {
        message,
        timestamp: serverTimestamp(),
        user: user?.displayName,
        userImage: user?.photoURL,
      });
    }
    setMessage("");
  };
  return (
    <div className='chat__input'>
      <form>
        <input
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          type='text'
          placeholder='chat with friend'
        />
        <button
          type='submit'
          onClick={sendMessage}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
