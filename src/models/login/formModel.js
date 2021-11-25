import { Schema } from "rsuite";
const { StringType } = Schema.Types;


const minEmail = 10;
const maxEmail = 50;
const minPassword = 6;
const maxPassword = 30;

const model = Schema.Model({
    email: StringType()
        .isRequired('Campo requerido')
        .minLength(minEmail, `Debe tener mínimo ${minEmail} caracteres`)
        .maxLength(maxEmail, `Debe tener máximo ${maxEmail} caracteres`)
        .isEmail('Ingresa un email válido'),
    password: StringType()
        .isRequired('Campo requerido')
        .minLength(minPassword, `Debe tener mínimo ${minPassword} caracteres`)
        .maxLength(maxPassword, `Debe tener máximo ${maxPassword} caracteres`)
});

export default model;