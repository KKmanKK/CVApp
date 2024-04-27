import { ReactNode, createContext } from "react";
import { IBaseInfoField } from "../types";

export interface IDataContext {
  baseinfo: IBaseInfoField;
}

const DataContext = createContext<Partial<IDataContext>>({});

type DataProvideProps = {
  children: ReactNode;
};
