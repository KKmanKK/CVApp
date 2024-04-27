import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IBaseInfoField, IForm } from "../../types";
import { schema } from "../../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../ui/Input";
export const CvFrom = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBaseInfoField>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IBaseInfoField> = (data) => {
    debugger;
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div>
          <label htmlFor="">{"Имя *"}</label>
          <input type="text" {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
        </div> */}

        <Input
          ref={register("email").ref}
          error={!!errors.email}
          message_err={errors.email?.message}
          lable="email"
          id="email"
        ></Input>
        <button type="submit">click</button>
      </form>
    </div>
  );
};
