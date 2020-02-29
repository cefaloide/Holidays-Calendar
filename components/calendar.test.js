import { shallow } from "enzyme";
import React from "react";
import { Calendar } from "../components/calendar";

describe("App", () => {
  it("should render a <div />", () => {
    const wrapper = shallow(<Calendar />);
    expect(wrapper.find("div").length).toEqual(1);
  });
});
