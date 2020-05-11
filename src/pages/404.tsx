import React from "react";
import Head from "next/head";
import { withTranslation } from "../../config/Next18Wrapper";
function Custom404() {
  return <h1>404 - Page Not Found</h1>;
}

export default withTranslation("common")(Custom404);
