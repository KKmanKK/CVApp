import { FC, forwardRef, useEffect } from "react";
import { ChangeHandler } from "react-hook-form";
import styled from "styled-components";
interface IIntpuProps {
  lable?: string;
  name: string;
  id: string;
  error: boolean;
  errorsMess?: string;
  type?: string;
  onChange: ChangeHandler;
  placeholder: string;
}

const Wrapper = styled.div({
  display: "flex",
  gap: "5px",
  flexDirection: "column",
  position: "relative",
});
const CustomInput = styled.input({
  padding: "8px",
  border: "1px solid black",
  borderRadius: "5px",
});
const CustomLable = styled.label({
  background: "",
});
const Error = styled.span({
  color: "red",
});
export const Input = forwardRef<HTMLInputElement, IIntpuProps>(
  (
    { lable, id, errorsMess, error, name, onChange, type, placeholder },
    ref
  ) => {
    return (
      <Wrapper>
        <CustomLable htmlFor={id}>{lable}</CustomLable>
        <CustomInput
          type={type ? type : "text"}
          name={name}
          ref={ref}
          placeholder={`Введите ${placeholder}`}
          onChange={onChange}
        />
        {error && <Error>{errorsMess}</Error>}
      </Wrapper>
    );
  }
);
