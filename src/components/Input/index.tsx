import { FC, useEffect } from "react";
import {
  FieldError,
  FieldErrors,
  UseFormRegister,
  UseFormRegisterReturn,
} from "react-hook-form";
import { IBaseInfoField, IForm } from "../../types";
interface IIntpuProps {
  register: UseFormRegister<any>;
  errors: FieldError | undefined;
  lable: string;
  id: string;
  nameRegister: keyof IBaseInfoField;
}
export const Input: FC<IIntpuProps> = ({
  register,
  errors,
  lable,
  id,
  nameRegister,
}) => {
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <>
      <label htmlFor={id}>{lable}</label>
      <input
        type="text"
        {...register(nameRegister, {
          required: "Почта обязательна",
          validate: (val) => {
            if (
              !val.match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              )
            ) {
              return "Почта введна неправильно";
            }
            return true;
          },
        })}
      />
      {errors && <span>{errors.message}</span>}
    </>
  );
};
