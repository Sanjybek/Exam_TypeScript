import { FormValues } from './../components/productPost/index';
import * as yup from 'yup';
const requiredStringWithName = (name = 'Поле') => yup.string().required(`${name} обязателен для заполнения`).trim();

const scheme = {
  username: requiredStringWithName().min(3, 'Не менее 3-х').max(12, 'Не более 12-ти'),
  password: requiredStringWithName().min(6, 'Не менее 6-х'),
};

export const AuthScheme = yup.object(scheme);

export const RegisterScheme = yup.object({
  ...scheme,
  confirmpassword: requiredStringWithName('Подтверждение пароля')
    .min(6, 'Не менее 6 символов')
    .test('passwords-match', 'Пароли должны совпадать', function (value) {
      return this.parent.password === value;
    })
    .required('Подтвердите пароль'),
});

const schema = {
  title: requiredStringWithName().max(25, 'называния товара не более 25 символов'),
  description: requiredStringWithName(),
  price: requiredStringWithName().min(1, '').max(3, 'цена должна содержать не больше 3 символа'),
};
export const postSchema = yup.object(schema);
