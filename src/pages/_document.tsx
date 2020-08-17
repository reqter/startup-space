import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document<{
  languageDirection: string;
  language: string;
}> {
  static async getInitialProps(ctx) {
    const { res } = ctx;
    const additionalProps = {
      languageDirection: res.locals.languageDir,
      language: res.locals.language,
    };
    let initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      ...additionalProps,
    };
  }

  render() {
    const { languageDirection, language } = this.props;
    return (
      <Html
        lang={language}
        dir={languageDirection}
        prefix="og: http://ogp.me/ns#"
      >
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-145850270-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-145850270-1"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-145850270-1');
            </script>
              `,
            }}
          ></script>
          <link
            rel="stylesheet"
            href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
