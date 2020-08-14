import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "./../styles/index.css";
import {
  getToken,
  getHeaderData,
  getNotFoundPageData,
  getFooterData,
} from "hooks/useGlobalApi";
import { appWithTranslation, i18n } from "../../config/Next18Wrapper";
import { Provider } from "../hooks/useGlobal";
import { init } from "services/progressbarHandler";
init();

const AppComponent: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="images/favicon.ico" />
      </Head>
      <Provider initialDataFromServer={pageProps}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};
AppComponent["getInitialProps"] = async ({ Component, ctx }) => {
  const currentLanguage = ctx.req ? ctx.req.language : i18n.language;
  let props = {},
    headerData,
    notFound,
    footerData;

  if (Component.getInitialProps) {
    props = await Component.getInitialProps(ctx);
  }
  if (ctx.pathname.includes("404")) {
    const token = await getToken();
    const [headerData, notFound, footerData] = await Promise.all([
      getHeaderData(currentLanguage),
      getNotFoundPageData(currentLanguage),
      getFooterData(currentLanguage),
    ]);
    return {
      pageProps: {
        ...props,
        dir: i18n.dir(currentLanguage),
        currentLanguage,
        headerData,
        token,
        notFoundPageInfo: notFound ? notFound[0] : {},
        footerData,
      },
    };
  }

  return {
    pageProps: {
      ...props,
      dir: i18n.dir(currentLanguage),
      currentLanguage,
    },
  };
};

export default appWithTranslation(AppComponent);
