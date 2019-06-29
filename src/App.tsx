import React, { useState } from "react";
import "./css-reset.css";
import "./App.css";
import ButtonCircle from "./components/ButtonCircle";
import styled from "styled-components";
import Waveform from "./components/Waveform";
import Footer from "./components/Footer";
import PlayButton from "./components/PlayButton";

const App: React.FC = () => {
  const [isA, toggleButton] = useState(true);
  const [isPlaying, togglePlay] = useState(false);
  const [position, setPosition] = useState(0);
  const [isEmpty, toggleEmpty] = useState(true);

  const handleSeek = (position: number) => setPosition(position);

  return (
    <AppWrapper>
      <WaveformsWrapper>
        <AbsoluteCenter>
          <ButtonCircle isA={isA} toggleButton={() => toggleButton(!isA)} />
        </AbsoluteCenter>
        <AbsoluteLeft>
          <PlayButton
            handlePlay={() => !isEmpty && togglePlay(true)}
            handlePause={() => !isEmpty && togglePlay(false)}
            isPlaying={isPlaying}
          />
        </AbsoluteLeft>
        <Waveform
          isPlaying={isPlaying}
          isActive={isA}
          handleSeek={handleSeek}
          position={position}
          togglePlay={() => togglePlay(!isPlaying)}
          toggleEmpty={val => toggleEmpty(val)}
        />
        <Waveform
          isPlaying={isPlaying}
          isActive={!isA}
          handleSeek={handleSeek}
          position={position}
          togglePlay={() => togglePlay(!isPlaying)}
          toggleEmpty={val => toggleEmpty(val)}
        />
      </WaveformsWrapper>
      <Footer />
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.section`
  height: 100%;
  width: 100%;
`;

const WaveformsWrapper = styled.section`
  height: 97%;
  width: 100%;
  position: relative;
`;

const AbsoluteCenter = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

const AbsoluteLeft = styled.section`
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;
