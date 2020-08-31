import { FC, useEffect } from "react";
import Router from "next/router";
import useGlobalApi from "hooks/useGlobalApi";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalDispatch from "hooks/useGlobal/useGlobalDispatch";

interface IProps {}

const RouteHandler: React.FC<IProps> = ({ children }) => {
  const {} = useGlobalState();
  const { dispatch } = useGlobalDispatch();
  const { _getPartnersPageData } = useGlobalApi();
  useEffect(() => {
    Router.events.on("routeChangeStart", (url: string) => {
      const isOfficesPage = url.includes("offices");
      if (isOfficesPage) {
        _getPartnersPageData();
      }
      const isPartnerDetailPage = url.split("offices/");
      if (
        isPartnerDetailPage &&
        isPartnerDetailPage.length &&
        isPartnerDetailPage[1]
      ) {
        dispatch({
          type: "TOGGLE_IS_PARTNER_DETAIL_PAGE",
          payload: true,
        });
      } else {
        dispatch({
          type: "TOGGLE_IS_PARTNER_DETAIL_PAGE",
          payload: false,
        });
      }
    });
  }, []);
  return <>{children}</>;
};

export default RouteHandler;
