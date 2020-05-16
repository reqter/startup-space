import React, { useContext } from "react";
import { GlobalContextDispatch } from "./index";

const useGlobalDispatch = () => {
  const dispatch = useContext(GlobalContextDispatch);
  const changeLang = (dir) => {
    setState((prev) => ({ ...prev, dir }));
  };

  return { dispatch };
};
export default useGlobalDispatch;
