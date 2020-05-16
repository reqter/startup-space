import React, { useState, useContext, useReducer } from "react";
import { reducer, initialData } from "./reducer";

export const GlobalContextState = React.createContext();
export const GlobalContextDispatch = React.createContext();

export const Provider = ({ children, initialDataFromServer }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialData,
    ...initialDataFromServer,
  });
  return (
    <GlobalContextState.Provider value={state}>
      <GlobalContextDispatch.Provider value={dispatch}>
        {children}
      </GlobalContextDispatch.Provider>
    </GlobalContextState.Provider>
  );
};
