import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IForm } from "../../types";
import { Input } from "../Input";

export const CvFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = () => {};
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}></form>
      <input
        type="text"
        {...register("IBaseInfoField.email", {
          required: "Почта обязательна",
          validate: (val) => {
            if (
              val.match(
                `/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`
              )
            ) {
              return "Почта введина неправильно";
            }
          },
        })}
      />
      {errors.IBaseInfoField?.email && (
        <div>{errors.IBaseInfoField.email.message}</div>
      )}
    </div>
  );
};
