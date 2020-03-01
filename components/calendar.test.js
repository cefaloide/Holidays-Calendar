import { shallow } from "enzyme";
import * as React from "react";
import { Calendar } from "../components/calendar";

describe("Calendar", () => {
  it("should render a <div />", () => {
    const wrapper = shallow(<Calendar />);
    expect(wrapper.find("div").length).toEqual(1);
  });
});

describe("<Calendar />", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation(init => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<Calendar />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("prevMonth", () => {
    it("calls setMonth with month - 1", () => {
      wrapper
        .find("#prevMonth")
        .props()
        .onClick();
      expect(setState).toHaveBeenCalledWith(1);
    });
  });

  describe("nextMonth", () => {
    it("calls setMonth with month + 1", () => {
      wrapper
        .find("#nextMonth")
        .props()
        .onClick();
      expect(setState).toHaveBeenCalledWith(3);
    });
  });
});

describe("<Calendar />", () => {
  const setState = jest.fn();
  const useStateMock = initState => [initState, setState];

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("prevMonth", () => {
    it("Have BeenCalled one time", () => {
      jest.spyOn(React, "useState").mockImplementation(useStateMock);
      const wrapper = shallow(<Calendar />);
      wrapper.find("#prevMonth").simulate("click");
      expect(setState).toHaveBeenCalledTimes(1);
    });
  });

  describe("nextMonth", () => {
    it("Have BeenCalled one time", () => {
      jest.spyOn(React, "useState").mockImplementation(useStateMock);
      const wrapper = shallow(<Calendar />);
      wrapper.find("#nextMonth").simulate("click");
      expect(setState).toHaveBeenCalledTimes(1);
    });
  });
});
