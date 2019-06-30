import React from "react";
import styled from "styled-components";
import { FaPlayCircle, FaPauseCircle, FaPlay, FaPause } from "react-icons/fa";
import colors from "../../colors";

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
        <Circle onClick={props.handlePlay}>
          <FaPlay
            style={{ transform: "translate(10%, -10%)" }}
            color={"white"}
            size={40}
          />
        </Circle>
      )}
      {props.isPlaying && (
        <Circle onClick={props.handlePause}>
          <FaPause
            style={{ transform: "translate(0%, -10%)" }}
            color={"white"}
            size={40}
          />
        </Circle>
      )}
    </Wrapper>
  );
};

export default PlayButton;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
`;
const Circle = styled.div`
  display: inline-block;
  text-decoration: none;
  background: ${colors.fifthiary};
  color: #fff;
  width: 80px;
  height: 80px;
  line-height: 120px;
  border-radius: 50%;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
  overflow: hidden;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
  border-bottom: solid 3px ${colors.fifthiary};
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

const Icon = styled.section``;
