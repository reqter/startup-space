import React, { useContext } from "react";
import { GlobalContextSetState } from "./index";

const useGlobalDispath = () => {
  const setState = useContext(GlobalContextSetState);
  const changeLang = (dir) => {
    setState((prev) => ({ ...prev, dir }));
  };

  return { changeLang };
};
export default useGlobalDispath;
