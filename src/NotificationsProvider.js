import React, { useState } from "react";
import Context from "./Context";
import { TrayPanel } from "./TrayPanel";
import uuid from "uuid";
import "./styles/main.css";

export default ({ limit = 5, position = { V: "top", H: "right" } }) => {
  const [tray, setTray] = useState([
    { message: "start", type: "success", id: uuid() },
    { message: "start", type: "success", id: uuid() }
  ]);
  const inhale = newNotification => {
    // add the new notification to the begining of the list
    // so it can be on top
    setTray([newNotification, ...tray]);
  };

  const exhale = (id = null) => {
    // id is not given, then remove all tray in the tray
    if (id === null) setTray([]);
    // remove the notification associated with the id given
    setTray(tray.filter(item => id !== item.id));
  };

  return (
    <React.Fragment>
      <Context.Provider value={{ inhale, exhale, tray }}>
        <TrayPanel className={"tray-pannel"} />
        <button
          onClick={() => {
            inhale({
              message: "an error here",
              type: "error",
              id: uuid()
            });
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            exhale(tray[0].id);
          }}
        >
          Delete
        </button>
        <p>{JSON.stringify(tray)}</p>
      </Context.Provider>
    </React.Fragment>
  );
};
