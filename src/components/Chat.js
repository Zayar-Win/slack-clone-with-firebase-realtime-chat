import React, {
  useEffect,
  useState,
} from "react";
import "./Chat.css";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useParams } from "react-router-dom";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import db from "../firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {
  const { id } = useParams();
  const [roomDetail, setRoomDetail] = useState(
    []
  );
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // getRoomDetail(roomId.id);
    onSnapshot(
      doc(db, "channels", id),
      (onSnapshot) => {
        setRoomDetail(onSnapshot.data());
      }
    );
    const ref = collection(
      doc(db, "channels", id),
      "messages"
    );
    const q = query(
      ref,
      orderBy("timestamp", "asc")
    );
    onSnapshot(q, (onSnapshot) => {
      setMessages(
        onSnapshot.docs.map((doc) => doc.data())
      );
    });
  }, [id]);

  return (
    <div className='chat'>
      <div className='chat__header'>
        <div className='chat__headerLeft'>
          <h4 className='chat__channelName'>
            <strong># {roomDetail?.name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className='chat__headerRight'>
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className='chat__messages'>
        {messages?.map(
          ({
            message,
            timestamp,
            user,
            userImage,
          }) => (
            <Message
              message={message}
              timestamp={timestamp}
              user={user}
              userImage={userImage}
            />
          )
        )}
      </div>
      <ChatInput
        channelName={roomDetail?.name}
        channelId={id}
      />
    </div>
  );
}

export default Chat;
