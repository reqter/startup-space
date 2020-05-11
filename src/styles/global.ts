import { css } from "linaria";
import { styled } from "linaria/lib/react";
import { media } from "./utils";

export const globals = css`
  :global(html) {
    html {
      box-sizing: border-box;
      fontsize: 62.5%;
      ${media.tabLand} {
      }
      ${media.tabPort} {
      }
      ${media.phone} {
      }
    }
    *,
    *:before,
    *:after {
      padding: 0 !important;
      margin: 0 !important;
      box-sizing: inherit;
    }
    body {
    }
  }
`;
