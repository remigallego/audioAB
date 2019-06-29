import React, { useState } from "react";
import "./css-reset.css";
import "./App.css";
import ButtonCircle from "./components/ButtonCircle";
import styled from "styled-components";
import Waveform from "./components/Waveform";
import Footer from "./components/Footer";
import Controls from "./components/Controls";

const App: React.FC = () => {
  const [isA, toggleButton] = useState(true);

  const handlePlay = () => {};
  const handlePause = () => {};

  return (
    <AppWrapper>
      <WaveformsWrapper>
        <AbsoluteCenter>
          <ButtonCircle isA={isA} toggleButton={() => toggleButton(!isA)} />
          <Controls onPlay={handlePlay} onPause={handlePause} />
        </AbsoluteCenter>
        <Waveform />
        <Waveform />
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
  height: 90%;
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
