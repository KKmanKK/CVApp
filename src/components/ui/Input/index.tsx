import { FC, MutableRefObject, RefObject, forwardRef, useEffect } from "react";
import {
  FieldError,
  FieldErrors,
  UseFormRegister,
  UseFormRegisterReturn,
  useFormContext,
} from "react-hook-form";
import { IBaseInfoField, IForm } from "../../../types";
interface IIntpuProps {
  lable: string;
  id: string;
  error: boolean;
  message_err?: string;
  ref: RefObject<HTMLInputElement>;
}
export const Input = forwardRef<HTMLInputElement, IIntpuProps>(
  ({ lable, id, error, message_err }, ref) => {
    debugger;
    return (
      <>
        <label htmlFor={id}>{lable}</label>
        <input ref={ref} type="text" />
        {error && message_err}
      </>
    );
  }
);
