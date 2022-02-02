import React, {
  useEffect,
  useState,
} from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import EditIcon from "@mui/icons-material/Edit";
import "./Sidebar.css";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import DraftsIcon from "@mui/icons-material/Drafts";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import db from "../firebase";
import {
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { useStateValue } from "../StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const docRef = collection(db, "channels");

    onSnapshot(docRef, (onSnapshot) => {
      setChannels(
        onSnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);

  console.log(channels);

  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__info'>
          <h2> {user?.displayName}</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </div>
        <div className='sidebar__right'>
          <EditIcon />
        </div>
      </div>
      <SidebarOption
        Icon={InsertCommentIcon}
        title={"naybala"}
      />
      <SidebarOption
        Icon={InboxIcon}
        title={"Mention & reaction"}
      />
      <SidebarOption
        Icon={DraftsIcon}
        title={"Saved items"}
      />
      <SidebarOption
        Icon={BookmarkBorderIcon}
        title={"Channel browser"}
      />
      <SidebarOption
        Icon={PeopleAltIcon}
        title={"Peoples & users groups"}
      />
      <SidebarOption
        Icon={AppsIcon}
        title={"Apps"}
      />
      <SidebarOption
        Icon={FileCopyIcon}
        title={"File Browser"}
      />
      <SidebarOption
        Icon={ExpandLessIcon}
        title={"Show less"}
      />
      <hr />
      <SidebarOption
        Icon={ExpandMoreIcon}
        title={"More"}
      />
      <hr />
      <div className='channels'>
        <SidebarOption
          Icon={AddIcon}
          title={"Add Channel"}
          addChannelOption
        />
        {channels?.map((channel) => (
          <SidebarOption
            title={channel.name}
            id={channel.id}
            key={channel.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
