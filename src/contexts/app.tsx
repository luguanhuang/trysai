"use client";

import { useTheme } from "next-themes";
import { ReactNode, createContext, useContext, useEffect } from "react";

export interface ContextValue {}

const AppContext = createContext({} as ContextValue);

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    console.log("app init");
    setTheme("dark");
  }, []);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
