import { FC, useEffect } from "react";
import Router from "next/router";
import useGlobalApi from "hooks/useGlobalApi";

interface IProps {}

const RouteHandler: React.FC<IProps> = ({ children }) => {
  const { _getPartnersPageData } = useGlobalApi();
  useEffect(() => {
    Router.events.on("routeChangeStart", (url: string) => {
      const isOfficesPage = url.includes("offices");
      if (isOfficesPage) {
        _getPartnersPageData();
      }
    });
  }, []);
  return <>{children}</>;
};

export default RouteHandler;
