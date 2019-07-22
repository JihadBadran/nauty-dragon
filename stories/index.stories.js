import React, {useState} from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";
import NautyDragon from '../src/index';
import { CSSTransition } from "react-transition-group";

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Nauty Dragon", module).add("with text", () => (
  <NautyDragon>Hello Button</NautyDragon>
));