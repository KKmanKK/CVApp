import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Busyness, IBaseInfoField, IOption, WorkSchedule } from "../../types";
import { Input } from "../ui/Input";
import { schema } from "../../schema";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";
import { Select } from "../ui/Select";
import { useData } from "../../context/ContextData";
const Form = styled.form({
  width: "500px",
  border: "1px solid black",
  borderRadius: "5px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});
const Title = styled.div({
  alignSelf: "center",
  fontSize: "20px",
});
const InputWrapp = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
  rowGap: "15px",
  alignItems: "top",
});
const optionBusy: IOption[] = [
  { value: Busyness.Full, label: Busyness.Full },
  { value: Busyness.Partial, label: Busyness.Partial },
  { value: Busyness.Project, label: Busyness.Project },
  { value: Busyness.Internship, label: Busyness.Internship },
];
const optionWorkSchedule: IOption[] = [
  { value: WorkSchedule.FullDay, label: WorkSchedule.FullDay },
  { value: WorkSchedule.FlexSchedule, label: WorkSchedule.FlexSchedule },
  { value: WorkSchedule.ShifrSchedule, label: WorkSchedule.ShifrSchedule },
  { value: WorkSchedule.RemoteWork, label: WorkSchedule.RemoteWork },
  { value: WorkSchedule.ShiftMethod, label: WorkSchedule.ShiftMethod },
];
const optionisBusinnes: IOption[] = [
  { value: true, label: "Готов" },
  { value: false, label: "Не готов" },
];
const getValue = (
  options: IOption[],
  value: Busyness | WorkSchedule | boolean | undefined
) => {
  if (value === false) {
    return options.find((option) => option.value == value);
  }
  return value ? options.find((option) => option.value == value) : "";
};

export const BaseInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IBaseInfoField>({
    resolver: yupResolver(schema),
  });
  const { data, saveData } = useData();
  const onSubmit: SubmitHandler<IBaseInfoField> = (dataForm) => {
    saveData(dataForm);
  };
  console.log(data);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Основная информация</Title>
      <Input
        lable="Имя *"
        name={register("name").name}
        id="name"
        error={!!errors.name}
        errorsMess={errors.name?.message}
        ref={register("name").ref}
        onChange={register("name").onChange}
        placeholder="имя"
      />
      <Input
        lable="Фамилия *"
        name={register("lastName").name}
        id="lastName"
        error={!!errors.lastName}
        errorsMess={errors.lastName?.message}
        ref={register("lastName").ref}
        onChange={register("lastName").onChange}
        placeholder="фамилию"
      />
      <InputWrapp>
        <Input
          lable="Телефон *"
          name={register("phone").name}
          id="phone"
          error={!!errors.phone}
          errorsMess={errors.phone?.message}
          ref={register("phone").ref}
          onChange={register("phone").onChange}
          placeholder="телефон"
        />
        <Input
          lable="Почта *"
          name={register("email").name}
          id="email"
          error={!!errors.email}
          errorsMess={errors.email?.message}
          ref={register("email").ref}
          onChange={register("email").onChange}
          placeholder="почту"
        />
      </InputWrapp>
      <Input
        lable="Должность *"
        name={register("post").name}
        id="post"
        error={!!errors.post}
        errorsMess={errors.post?.message}
        ref={register("post").ref}
        onChange={register("post").onChange}
        placeholder="должность"
      />
      <InputWrapp>
        <Input
          lable="Желаемая зарплата"
          name={register("desiredSalary").name}
          id="desiredSalary"
          error={!!errors.desiredSalary}
          errorsMess={errors.desiredSalary?.message}
          ref={register("desiredSalary").ref}
          onChange={register("desiredSalary").onChange}
          placeholder="желаемую зарплату"
          type="number"
        />
        <Controller
          control={control}
          name="workSchedule"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Select
              onChange={(newValue) => onChange((newValue as IOption).value)}
              label="График работы"
              value={getValue(optionWorkSchedule, value)}
              options={optionWorkSchedule}
            />
          )}
        />
        <Controller
          control={control}
          name="isBusinnesTrips"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Select
              onChange={(newValue) => onChange((newValue as IOption).value)}
              label="Готовность к командировкам"
              value={getValue(optionisBusinnes, value)}
              options={optionisBusinnes}
            />
          )}
        />
        <Controller
          control={control}
          name="busyness"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <Select
              onChange={(newValue) => onChange((newValue as IOption).value)}
              label="Занятость"
              value={getValue(optionBusy, value)}
              options={optionBusy}
            />
          )}
        />
      </InputWrapp>
      <Input
        lable="Вставить фото"
        name={register("file").name}
        id="file"
        error={!!errors.file}
        errorsMess={errors.file?.message}
        ref={register("file").ref}
        onChange={register("file").onChange}
        type="file"
        placeholder=""
      />
      <button type="submit">Отправить</button>
    </Form>
  );
};
