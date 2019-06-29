import React from "react";
import renderer from "react-test-renderer";
import Waveform from ".";

test("Waveform renders correctly", () => {
  const component = renderer.create(<Waveform />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  /*   // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot(); */
});
