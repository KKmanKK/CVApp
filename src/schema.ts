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
  desiredSalary: yup
    .number()
    .integer("Число должно быть целым")
    .min(10000, "Необходимый минимум 10000 рублей")
    .transform((value) => (Number.isNaN(value) ? undefined : value))
    .typeError("Введите число")
    .optional(),
  workSchedule: yup.string<WorkSchedule>().optional(),
  isBusinnesTrips: yup.boolean().optional(),
  busyness: yup.string<Busyness>().optional(),
  file: yup.mixed((input): input is FileList => input instanceof FileList).test({
    message: "Файлы должны иметь расширение png или jpg",
    test: (file, context) => {
      if (!file) {
        return false;
      }
      const isValid = ["png", "jpg", "jpeg"].includes(file[0].type.split("/")[1])
      if (!isValid) context?.createError();
      return isValid;
    }
  }).optional()
});
