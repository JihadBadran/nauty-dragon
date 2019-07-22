import React from 'react';
import NautyDragon from "../index";
import { shallow, render, mount } from "enzyme";
import Context from "../Context";
describe("NaytyDragon", () => {
  it("component should render without errors", () => {
    expect(render(NautyDragon)).toBeTruthy();
  });

  it("context should provide inhale and exhale", () => {
    
  });

  it("using inhale should add a notification to the list", () => {
    expect(mount(<NautyDragon />)).toBeFalsy();
  });

  it("using exhale should remove a notification from the list", () => {
  });
});
