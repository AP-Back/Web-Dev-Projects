import React from "react";
import "./chatheads.css";
import { useState } from "react";
export default function ChatHeads({ items, setreceiver }) {
  const [isActive, setIsActive] = useState(null);
  function hehe(obj, i) {
    setreceiver(obj);
    setIsActive(i);
  }
  return (
    //Rendering all the available users from firebase with a profile picture and their username Clicking the username sets them as the receiver
    <div>
      <p className="users">Users</p>
      {items.map((obj, i) => (
        <div
          style={{ backgroundColor: isActive == i ? "#7e49f9" : "" }}
          key={i}
          className="chat-head-item"
          onClick={() => {
            hehe(obj, i);
          }}
        >
          <div className="user-profile-pic">
            <p className="user-profile-pic-text">{obj.email[0]}</p>
          </div>
          <p className="username" title={obj.email.substr(0, obj.email.indexOf("@"))}>
            {obj.email.substr(0, obj.email.indexOf("@"))}
          </p>
        </div>
      ))}
    </div>
  );
}
