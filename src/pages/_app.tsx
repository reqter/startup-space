import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { i18n } from "../../config/Next18Wrapper";
import "./../styles/index.css";
import { appWithTranslation } from "../../config/Next18Wrapper";
import { Provider } from "../hooks/useGlobal";

const AppComponent: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="images/favicon.ico" />
      </Head>
      <Provider
        initialData={{
          dir: pageProps.dir,
          currentLanguage: pageProps.currentLanguage,
        }}
      >
        <Component {...pageProps} />
      </Provider>
    </>
  );
};
AppComponent["getInitialProps"] = async ({ Component, ctx }) => {
  const currentLanguage = ctx.req ? ctx.req.language : i18n.language;
  let props = {};
  if (Component.getInitialProps) {
    props = await Component.getInitialProps(ctx);
  }
  return {
    pageProps: { ...props, dir: i18n.dir(currentLanguage), currentLanguage },
  };
};

export default appWithTranslation(AppComponent);
