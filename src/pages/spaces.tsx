import React from "react";
import MainLayout from "../components/MainLayout";
import { styled } from "linaria/lib/react";

const Wrapper = styled.div`
  @apply h-screen bg-black;
`;

const Content = styled.div`
  @apply w-1150 flex m-auto pt-32 text-white text-2xl;
`;

const Spaces = ({ title }) => {
  return (
    <MainLayout>
      <Wrapper>
        <Content>
          <h1>{title}</h1>
        </Content>
      </Wrapper>
    </MainLayout>
  );
};

Spaces.getInitialProps = async (context) => {
  return {};
};

export default Spaces;
