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
        <PrimaryText>{props.isA ? "A" : "B"}</PrimaryText>
        <SecondaryText>{props.isA ? "B" : "A"}</SecondaryText>
      </TextWrapper>
    </Circle>
  );
};

export default ButtonCircle;

const Circle = styled.section`
  width: 150px;
  height: 150px;
  background-color: blue;
  font-family: "DM Serif Display";
  border-radius: 50%;
  position: relative;
  user-select: none;
`;

const PrimaryText = styled.section`
  color: white;
  font-size: 77px;
`;
const SecondaryText = styled.section`
  color: grey;
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
