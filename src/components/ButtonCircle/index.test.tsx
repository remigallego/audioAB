import React from "react";
import ButtonCircle from ".";
import renderer from "react-test-renderer";

test("ButtonCircle renders correctly", () => {
  const component = renderer.create(
    <ButtonCircle isA={true} toggleButton={() => null} />
  );
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
