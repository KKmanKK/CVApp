import React, { FC, createContext, useContext, useState } from "react";
import { IBaseInfoField } from "../types";

interface AppContextData {
  data?: IBaseInfoField;
  saveData: (value: IBaseInfoField) => void;
}
export const AppContext = createContext<AppContextData | null>(null);

export const AppProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<IBaseInfoField | undefined>(undefined);
  const saveData = (value: IBaseInfoField) => {
    setData((prev) => ({
      ...prev,
      ...value,
    }));
  };
  return (
    <AppContext.Provider value={{ data, saveData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useData = () => useContext(AppContext) as AppContextData;
