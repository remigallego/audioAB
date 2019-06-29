import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WaveSurfer from "wavesurfer.js";

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

const Waveform = (props: Props) => {
  let waveref: HTMLDivElement;
  let containerRef: HTMLElement;

  const [isDragOver, setDragOver] = useState(false);
  const [audioFile, setAudioFile] = useState<AudioFile>();
  const [wavesurfer, setWaveSurfer] = useState<WaveSurfer>();

  useEffect(() => {
    if (wavesurfer) {
      wavesurfer.seekTo(props.position);
    }
  }, [props.position]);
  useEffect(() => {
    if (wavesurfer) {
      wavesurfer.setMute(!props.isActive);
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
      wavesurfer.loadBlob(audioFile.blob);
      props.toggleEmpty(false);
    }
  }, [audioFile]);

  useEffect(() => {
    if (!wavesurfer) {
      const _wavesurfer = WaveSurfer.create({
        container: waveref,
        waveColor: "blue",
        height: containerRef.offsetHeight,
        responsive: true,
        barWidth: 1,
        progressColor: "purple",
        hideScrollbar: true
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

  console.log("isDragOver === ", isDragOver);
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
      {!audioFile && <AbsoluteCenter>Drag an audio file</AbsoluteCenter>}
      <div
        style={{ overflow: "hidden" }}
        ref={ref => {
          if (ref) waveref = ref;
        }}
      />
    </Wrapper>
  );
};

export default Waveform;

const Wrapper = styled.div<{ isDragOver: boolean; isActive: boolean }>`
  width: 100%;
  height: 50%;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: whitesmoke;
  transition: all 0.3s;
  background-color: ${props => setBackgroundColor(props)};
  border: ${props => (props.isDragOver ? "1px solid blue" : "1px solid black")};
`;

const AbsoluteCenter = styled.section`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const setBackgroundColor = ({
  isDragOver,
  isActive
}: {
  isDragOver: boolean;
  isActive: boolean;
}) => {
  if (isDragOver) return "grey";
  if (isActive) return "#9ea9f0";
};
