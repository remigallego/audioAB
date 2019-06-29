import React from "react";
import styled from "styled-components";

interface Props {
  isA: boolean;
  toggleButton: () => void;
}

const ButtonCircle = (props: Props) => {
  return (
    <Circle onClick={props.toggleButton}>
      <TextWrapper>
        <Text isActive={props.isA}>A</Text>
        <Text isActive={!props.isA}>B</Text>
      </TextWrapper>
    </Circle>
  );
};

export default ButtonCircle;

const Circle = styled.section`
  width: 150px;
  height: 150px;
  background-color: blue;
  border-radius: 50%;
  position: relative;
  user-select: none;
`;

const Text = styled.section<{ isActive: boolean }>`
  color: white;
  opacity: ${props => (props.isActive ? 1 : 0.2)};
  font-size: 77px;
`;

const TextWrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-35%, -50%);

  display: flex;
  width: 100%;
`;
