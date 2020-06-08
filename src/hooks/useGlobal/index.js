import React, { useReducer } from "react";
import { reducer, initialData, AppContextInterface } from "./reducer";

export const GlobalContextState = React.createContext();
const StateProvider = GlobalContextState.Provider;
export const GlobalContextDispatch = React.createContext();
const DispatchProvider = GlobalContextState.Provider;
/////////////

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
