import React from "react";
import styled from "styled-components";

interface Props {
  onPlay: () => void;
  onPause: () => void;
}

const Controls = (props: Props) => {
  return (
    <Wrapper>
      <Button onClick={props.onPlay}>Play</Button>
      <Button>Pause</Button>
    </Wrapper>
  );
};

export default Controls;

const Wrapper = styled.section`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.section`
  background-color: black;
  height: 20px;
  color: white;
`;
