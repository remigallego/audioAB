import React from "react";
import styled from "styled-components";
import colors from "../../colors";

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Text>github</Text>
        <Text>twitter</Text>
        <Text>about me</Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.section`
  width: 100%;
  height: 3%;
  display: flex;
  justify-content: center;
  background-color: ${colors.black};
  color: white;
`;

const TextWrapper = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Text = styled.div`
  font-size: 24px;
  font-family: "DM Serif Display";
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    color: ${colors.fifthiary};
  }
`;
