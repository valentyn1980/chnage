import * as Yup from "yup";
const phoneRegExp = /^\+[\d\s-]+$/;

export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Короткое значение")
    .max(50, "Длинное значение")
    .required("Обязательное поле"),
  // mail: Yup.string().email("Неправильный емейл").required("Обязательное поле"),
  phone: Yup.string()
    .matches(phoneRegExp, "Неправильный формат, нужно +74957556983")
    .min(5, "Короткое значение")
    .max(25, "Длинное значение")
    .required("Обязательное поле"),
});
