import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WaveSurfer from "wavesurfer.js";
import colors from "../../colors";
import { ClipLoader } from "react-spinners";

interface Props {
  isPlaying: boolean;
  isActive: boolean;
  position: number;
  handleSeek: (position: number) => void;
  togglePlay: () => void;
  toggleEmpty: (val: boolean) => void;
}

interface AudioFile {
  blob: File;
  name: string;
}

const activeWaveColor = "white";

const Waveform = (props: Props) => {
  let waveref: HTMLDivElement;
  let containerRef: HTMLElement;

  const [isDragOver, setDragOver] = useState<boolean>(false);
  const [audioFile, setAudioFile] = useState<AudioFile>();
  const [wavesurfer, setWaveSurfer] = useState<WaveSurfer>();
  const [loading, toggleLoading] = useState<boolean>();

  useEffect(() => {
    if (wavesurfer && audioFile && !loading) {
      wavesurfer.seekTo(props.position);
    }
  }, [props.position]);
  useEffect(() => {
    if (wavesurfer) {
      wavesurfer.setMute(!props.isActive);
      wavesurfer.setWaveColor(props.isActive ? activeWaveColor : "white");
    }
  }, [props.isActive]);

  useEffect(() => {
    if (wavesurfer) {
      if (props.isPlaying) {
        wavesurfer.setMute(!props.isActive);
        wavesurfer.play();
      }
      if (!props.isPlaying) wavesurfer.pause();
    }
  }, [props.isPlaying]);

  useEffect(() => {
    if (audioFile && wavesurfer) {
      toggleLoading(true);
      wavesurfer.loadBlob(audioFile.blob);
      props.toggleEmpty(false);
      wavesurfer.on("ready", () => {
        toggleLoading(false);
      });
    }
  }, [audioFile]);

  useEffect(() => {
    if (!wavesurfer) {
      const _wavesurfer = WaveSurfer.create({
        container: waveref,
        waveColor: activeWaveColor,
        height: containerRef.offsetHeight,
        responsive: true,
        barWidth: 1,
        progressColor: "#B28D8D",
        hideScrollbar: true,
        cursorWidth: 2
      });
      _wavesurfer.on("seek", position => {
        props.handleSeek(position);
      });
      setWaveSurfer(_wavesurfer);
    }
  });

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length === 1) {
      const file = e.dataTransfer.files[0];
      setAudioFile({
        blob: file,
        name: file.name
      });
    }
    if (props.isPlaying) props.togglePlay();
  };

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragOver(true);
  };
  const handleDragExit = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setDragOver(false);
  };

  return (
    <Wrapper
      ref={ref => {
        if (ref) containerRef = ref;
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragExit}
      onDrop={handleDrop}
      isDragOver={isDragOver}
      isActive={props.isActive}
    >
      {!audioFile && (
        <AbsoluteCenter isActive={props.isActive}>
          <BorderDashed isActive={props.isActive}>
            <Text className="drag-text">Drag an audio file</Text>
          </BorderDashed>
        </AbsoluteCenter>
      )}
      {loading && (
        <AbsoluteCenter isActive={props.isActive}>
          <ClipLoader />
        </AbsoluteCenter>
      )}
      {audioFile && (
        <TopLeft>
          <Text>{audioFile.name}</Text>
        </TopLeft>
      )}
      <WaveWrapper isActive={props.isActive}>
        <div
          style={{ overflow: "hidden" }}
          ref={ref => {
            if (ref) waveref = ref;
          }}
        />
      </WaveWrapper>
    </Wrapper>
  );
};

export default Waveform;

const Wrapper = styled.div<{ isDragOver: boolean; isActive: boolean }>`
  width: 100%;
  height: 50%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: silver;
  transition: all 0.3s;
  background-color: ${props => setBackgroundColor(props)};
  position: relative;
`;

const WaveWrapper = styled.section<{ isActive: boolean }>`
  opacity: ${props => (props.isActive ? 1 : 0.23)};
`;

const AbsoluteCenter = styled.section<{ isActive: boolean }>`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 22px;
  color: ${props => (props.isActive ? "white" : "black")};
`;

const BorderDashed = styled.section<{ isActive: boolean }>`
  border: 1px dashed grey;
  border-color: ${props => (props.isActive ? "grey" : "black")};
  padding: 50px 100px;
`;

const Text = styled.section`
  font-family: "Anonymous Pro";
`;

const TopLeft = styled.section`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
`;

const setBackgroundColor = ({
  isDragOver,
  isActive
}: {
  isDragOver: boolean;
  isActive: boolean;
}) => {
  if (isDragOver) return "grey";
  if (isActive) return "#544242";
};
