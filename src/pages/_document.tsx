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
      <Html lang={language} dir={languageDirection}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
