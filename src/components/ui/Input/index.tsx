import { FC, forwardRef, useEffect } from "react";
import { ChangeHandler } from "react-hook-form";
import { IBaseInfoField, IForm } from "../../../types";
import styled from "styled-components";
interface IIntpuProps {
  lable?: string;
  name: string;
  id: string;
  error: boolean;
  errorsMess?: string;
  type?: string;
  onChange: ChangeHandler;
}

const Wrapper = styled.div({
  display: "flex",
  gap: "5px",
  flexDirection: "column",
});
const CustomInput = styled.input({
  background: "",
});
const CustomLable = styled.label({
  background: "",
});
const Error = styled.div({
  background: "",
});
export const Input = forwardRef<HTMLInputElement, IIntpuProps>(
  ({ lable, id, errorsMess, error, name, onChange, type }, ref) => {
    return (
      <Wrapper>
        <CustomLable htmlFor={id}>{lable}</CustomLable>
        <CustomInput
          type={type ? type : "text"}
          name={name}
          ref={ref}
          onChange={onChange}
        />
        {error && <Error>{errorsMess}</Error>}
      </Wrapper>
    );
  }
);
