import React, { Component } from "react";
import Notification from "./Notification";
import Context from "./Context";
import { TransitionGroup } from "react-transition-group";

export class TrayPanel extends Component {
  render() {
    return (
      <Context.Consumer>
      {({tray}) =>
          (<div
            style={{
              position: "fixed",
              display: "flex",
              top: 20,
              right: 20,
              flexDirection: "column"
            }}
          >
            <TransitionGroup className="todo-list">
              {tray.map(({ message, id }) => (
                <Notification key={id}>{message}</Notification>
              ))}
            </TransitionGroup>
          </div>)
      }
      </Context.Consumer>
    );
  }
}

const withNotifications = component => {
  return (
    <Context.Consumer>
      {value => <component inhale={value.inhale} exhale={value.exhale} />}
    </Context.Consumer>
  );
};

export default TrayPanel;
