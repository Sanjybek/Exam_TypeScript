import * as yup from 'yup'

const scheme = {
    username: yup.string().required('Поле обязательно').min(3, 'Не менее 3-х').max(12, 'Не более 12-ти'),
    password: yup.string().required('Поле обязательно').min(6, 'Не менее 6-х'),
}

export const AuthScheme = yup.object(scheme)

export const RegisterScheme = yup.object({
    ...scheme,
    confirmpassword: yup.string().required('Поле обязательно').min(6, 'Не более 6-ти')
    .test('passwords-match', 'Пароли должны совподать', function (value) {
        return this.parent.password === value
    })
})

