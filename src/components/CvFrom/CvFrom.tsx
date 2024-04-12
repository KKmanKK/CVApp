import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IForm } from "../../types";
import { Input } from "../Input";

export const CvFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">email:</label>
        <input
          type="text"
          {...register("IBaseInfoField.email", {
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
        {errors.IBaseInfoField?.email && (
          <span>{errors.IBaseInfoField.email.message}</span>
        )}
        <Input
          lable="email"
          errors={errors.IBaseInfoField?.email}
          id="email"
          register={register}
          nameRegister="email"
        />

        <button type="submit">click</button>
      </form>
    </div>
  );
};
