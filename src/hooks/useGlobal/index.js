import React, { useState, useContext } from "react";

export const GlobalContextState = React.createContext();
export const GlobalContextSetState = React.createContext();

export const Provider = ({ children, initialData }) => {
  const [state, setState] = useState(initialData);
  return (
    <GlobalContextState.Provider value={state}>
      <GlobalContextSetState.Provider value={setState}>
        {children}
      </GlobalContextSetState.Provider>
    </GlobalContextState.Provider>
  );
};
