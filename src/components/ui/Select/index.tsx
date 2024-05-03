import React, { FC } from "react";
import ReactSelect from "react-select";
import { IOption } from "../../../types";
interface ISelectProps {
  options: IOption[];
  placeholder: string;
}
export const Select: FC<ISelectProps> = ({ options, placeholder }) => {
  return <ReactSelect placeholder={placeholder} options={options} />;
};
