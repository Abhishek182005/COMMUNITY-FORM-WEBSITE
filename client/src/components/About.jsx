import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 10px;
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>About Community Forum</Title>
      <Paragraph>
        Welcome to the Community Forum, a place where residents can connect,
        share their problems suggetions, and support each other.
      </Paragraph>
      <Paragraph>
        We believe in fostering a sense of community and collaboration. Feel
        free to explore the forum, like and contribute to requests.
      </Paragraph>
    </AboutContainer>
  );
};

export default About;
