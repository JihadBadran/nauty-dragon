import React, { Component } from 'react'
import { CSSTransition } from "react-transition-group";


export default class Notification extends Component {
    render() {
        return (
          <CSSTransition
            in={true}
            classNames={"item"}
          >
            <div
              style={{
                background: "wheat",
                padding: 10,
                color: "black",
                borderRadius: 10,
                display: "flex",
                minWidth: 200,
                justifyContent: "space-between"
              }}
            >
              <span>{this.props.children}</span>
              <div>
                <button>X</button>
              </div>
            </div>
          </CSSTransition>
        );
    }
}
