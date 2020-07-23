import React from "react";
import MainLayout from "components/MainLayout";
import NewsLetter from "components/Common/NewsLetterSmall";
import Content from "components/404";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

function Custom404() {
  const { getValue } = useObjectPropsValue();
  const { notFoundPageInfo } = useGlobalState();
  return (
    <MainLayout title={getValue(notFoundPageInfo, "name")}>
      <Content />
      <NewsLetter />
    </MainLayout>
  );
}

export default Custom404;
