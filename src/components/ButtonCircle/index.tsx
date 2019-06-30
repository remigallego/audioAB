import React from "react";
import styled from "styled-components";
import colors from "../../colors";

interface Props {
  isA: boolean;
  toggleButton: () => void;
}

const ButtonCircle = (props: Props) => {
  return (
    <Circle onMouseDown={props.toggleButton} className="button">
      <Text isActive={props.isA}>A</Text>
      <Text isActive={!props.isA}>B</Text>
    </Circle>
  );
};

export default ButtonCircle;

const Circle = styled.div`
  display: inline-block;
  text-decoration: none;
  background: #ff8181;
  color: #fff;
  width: 120px;
  height: 120px;
  line-height: 120px;
  border-radius: 50%;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
  overflow: hidden;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
  border-bottom: solid 3px #bd6565;
  transition: 0.4s;
  user-select: none;
  &:active {
    -ms-transform: translateY(2px);
    -webkit-transform: translateY(2px);
    transform: translateY(2px);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
    border-bottom: none;
  }
`;

const Text = styled.section<{ isActive: boolean }>`
  display: inline-block;
  font-family: "Allan";
  color: white;
  transition: all 0.3s;
  opacity: ${props => (props.isActive ? 1 : 0.15)};
  font-size: 60px;
`;

const TextWrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-35%, -50%);

  display: flex;
  width: 100%;
`;
