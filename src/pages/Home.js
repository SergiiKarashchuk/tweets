import React from "react";
import { Container } from "../components/SharedLayout/SharedLayout.styled";
import styled from "@emotion/styled";

function Home() {
  return (
    <Container>
      <div>
        <Caption>Welcome!</Caption>
        <Text>Follow to interesting people</Text>
      </div>
    </Container>
  );
}

export default Home;

export const Caption = styled.h1`
  text-align: center;
  font-size: ${(p) => p.theme.fontSize.xl};
  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  margin-bottom: 40px;
`;

export const Text = styled.p`
  text-align: center;
  font-style: italic;
  font-size: ${(p) => p.theme.fontSize.xxl};
`;
