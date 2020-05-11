import React, { useContext } from "react";
import { GlobalContextState } from "./index";

const useGlobalState = () => useContext(GlobalContextState);
export default useGlobalState;
