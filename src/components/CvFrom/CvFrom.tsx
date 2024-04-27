import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IBaseInfoField, IForm } from "../../types";
import { Input } from "../Input";
import { schema } from "../../schema";
import { yupResolver } from "@hookform/resolvers/yup";
export const CvFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBaseInfoField>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IBaseInfoField> = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">email:</label>
        <input type="text" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}

        <button type="submit">click</button>
      </form>
    </div>
  );
};
