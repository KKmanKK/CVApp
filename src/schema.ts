import * as yup from "yup";
import { Busyness, WorkSchedule } from "./types";

const regExpEmail: RegExp = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const regExpPhone: RegExp = new RegExp(/^\+?[1-9][1-9]{7,14}$/);

export const schema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Обязательное поле")
    .min(2, "Необходимо минимум 2 символа"),
  lastName: yup
    .string()
    .trim()
    .required("Обязательное поле")
    .min(2, "Необходимо минимум 2 символа"),
  phone: yup
    .string()
    .trim()
    .required("Обязательное поле")
    .matches(regExpPhone, "Неверный формат номера"),
  email: yup
    .string()
    .trim()
    .required("Обязательное поле")
    .matches(regExpEmail, "Неверный формат почты"),
  post: yup
    .string()
    .trim()
    .required("Обязательное поле")
    .min(2, "Необходимо минимум 2 символа"),
  patronymic: yup.string().trim().optional(),
  desiredSalary: yup.string().trim().optional(),
  workSchedule: yup.string<WorkSchedule>().optional(),
  isBusinnesTrips: yup.boolean().optional(),
  busyness: yup.string<Busyness>().optional(),
});
