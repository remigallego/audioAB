import React from "react";
import styled from "styled-components";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";

interface Props {
  isPlaying: boolean;
  handlePlay: () => void;
  handlePause: () => void;
}

// Workaround to get a white background behind the icon
const IconBack = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        position: "absolute",
        height: 50,
        width: 50,
        left: "20%",
        top: "20%",
        zIndex: -1
      }}
    />
  );
};

const PlayButton = (props: Props) => {
  return (
    <Wrapper>
      {!props.isPlaying && (
        <>
          <IconBack />
          <FaPlayCircle size={90} onClick={props.handlePlay} />
        </>
      )}
      {props.isPlaying && (
        <>
          <IconBack />
          <FaPauseCircle size={90} onClick={props.handlePause}>
            Pause
          </FaPauseCircle>
        </>
      )}
    </Wrapper>
  );
};

export default PlayButton;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.section``;
