import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { shallow } from "enzyme";
import { useDarkTheme } from "./useDarkTheme";

Enzyme.configure({ adapter: new Adapter() });

function HookWrapper(props) {
  const hook = props.hook ? props.hook() : undefined;
  return <div hook={hook} />;
}

describe("useDarkTheme", () => {
  let useDarkThemeWrapper;

  beforeEach(() => {
    useDarkThemeWrapper = shallow(<HookWrapper hook={() => useDarkTheme()} />);
  });

  it("should render", () => {
    expect(useDarkThemeWrapper.exists()).toBeTruthy();
  });

  it("has dark theme as default", () => {
    let hook = useDarkThemeWrapper.find("div").props().hook;
    let [theme, toggleTheme] = hook;
    expect(theme).toEqual("dark");
    toggleTheme();
  });

  it("toggles to dark theme", () => {
    let hook = useDarkThemeWrapper.find("div").props().hook;
    let [theme, toggleTheme] = hook;
    expect(theme).toEqual("light");

    toggleTheme();

    hook = useDarkThemeWrapper.find("div").props().hook;
    [theme, toggleTheme] = hook;
    expect(theme).toEqual("dark");
  });
});
