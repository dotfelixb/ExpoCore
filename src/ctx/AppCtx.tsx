import React, { createContext } from "react";
import { ProviderProps } from "react";

interface IAppContext {}

export const AppContext = createContext<IAppContext>({});

export const AppProvider = ({ children }: ProviderProps<IAppContext>) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
