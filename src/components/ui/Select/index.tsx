import React, { FC } from "react";
import ReactSelect, { SingleValue } from "react-select";
import { IOption } from "../../../types";
import "./index.css";
import styled from "styled-components";
interface ISelectProps {
  options: IOption[];
  label: string;
  value: IOption | string | undefined;
  onChange: (newValue: SingleValue<string | IOption>) => void;
}
const Wrapper = styled.div({
  display: "flex",
  gap: "5px",
  flexDirection: "column",
});
export const Select: FC<ISelectProps> = ({
  options,
  label,
  value,
  onChange,
}) => {
  return (
    <Wrapper>
      <label htmlFor="">{label}</label>
      <ReactSelect
        classNamePrefix="custom-select"
        placeholder={"Выберите из списка"}
        options={options}
        onChange={onChange}
        value={value}
      />
    </Wrapper>
  );
};
