import React from "react";
import fetch from "isomorphic-unfetch";
import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import { withTranslation } from "../../config/Next18Wrapper";
import useSWR from "swr";
import MainLayout from "../components/MainLayout";
import First from "../components/First";
import Service from "../components/Service";
import Spaces from "../components/Spaces";
import Cities from "../components/Cities";
import NewsLetter from "../components/NewsLetter";
import Blogs from "../components/Blogs";
import Agents from "../components/Agents";

interface IProps {
  t: (key: string) => string;
  direction: string;
  getInitialProps?: (ctx: NextPageContext) => Promise<any>;
}

const Home = ({ header }): JSX.Element => {
  const { data, error } = useSWR("headerData", (url) => header, {
    initialData: header,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return (
    <MainLayout headerData={data}>
      <Head>
        <title>Startup-Space</title>
      </Head>
      <First />
      <Service />
      <Spaces />
      <Cities />
      <Agents />
      <NewsLetter />
      <Blogs />
    </MainLayout>
  );
};

Home.getInitialProps = async ({ res }) => {
  let header = {};
  if (typeof window === "undefined") {
    const t = await fetch("https://requester.reqter.com/api/v1/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        clientid: "1d42c55e-0f44-4613-adba-a5bbbca878e1",
      },
    });
    const token = await t.json();
    const res = await fetch(
      "https://requester.reqter.com/api/v1/lists/5eb820137e1a5d001b2c1587",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + token.access_token,
        },
      }
    );
    header = await res.json();
    // const products = await Promise.all([header]);
  }
  return {
    header,
  };
};
export default Home;

/* // const initialData = await getContent("/api/data");
// header
// landing { searchBackground, searchImage , serviceTitle,serviceHeader,serviceDescription,serviceButtonText , srviceImage };
// ...get other collections data
// footer */
