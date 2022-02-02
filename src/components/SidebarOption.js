import {
  addDoc,
  collection,
} from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router-dom";
import db from "../firebase";
import "./SidebarOption.css";

function SidebarOption({
  Icon,
  title,
  addChannelOption,
  id,
}) {
  const nagivate = useNavigate();
  const addChannel = () => {
    const name = prompt(
      "Please enter channel name"
    );

    if (name) {
      addDoc(collection(db, "channels"), {
        name,
      });
    }
  };

  const selectChannel = (id) => {
    if (id) {
      nagivate(`/rooms/${id}`);
    }
  };

  return (
    <div
      className='sidebaroption'
      onClick={() =>
        addChannelOption
          ? addChannel()
          : selectChannel(id)
      }
    >
      {Icon && (
        <Icon className='sidebaroption__icon' />
      )}
      {Icon ? (
        <h3 className='sidebaroption__message'>
          {title}
        </h3>
      ) : (
        <h3 className='sidebaroption__channel'>
          <span className='sidebaroption__hash'>
            #
          </span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
