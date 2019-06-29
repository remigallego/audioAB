import React from "react";
import renderer from "react-test-renderer";
import Footer from ".";

test("Footer renders correctly", () => {
  const component = renderer.create(<Footer />);
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
