import React from "react";
import { MetaTags, RobotsContent, PageType } from "interfaces/tag";
import MainLayout from "components/MainLayout";
import NewsLetter from "components/Common/NewsLetterSmall";
import Content from "components/404";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

function Custom404() {
  const { getValue } = useObjectPropsValue();
  const { notFoundPageInfo } = useGlobalState();

  const metaTags: MetaTags = {
    keywords: ``,
    title: `${getValue(notFoundPageInfo, "name")}`,
    description: ``,
    image: null,
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    type: PageType.website,
    canonical: "",
  };

  return (
    <MainLayout metaTags={metaTags}>
      <Content />
      <NewsLetter />
    </MainLayout>
  );
}

export default Custom404;
