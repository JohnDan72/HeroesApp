import { Schema } from "rsuite";
const { StringType } = Schema.Types;


const model = Schema.Model({
    email: StringType()
        .isEmail('Ingresa un email válido')
        .isRequired('Campo requerido')
        .minLength(4, 'Debe tener mínimo 4 caracteres')
        .maxLength(40, 'Debe tener máximo 40 caracteres'),
    password: StringType()
        .isRequired('Campo requerido')
        .minLength(6, 'Debe tener mínimo 6 caracteres')
        .maxLength(20, 'Debe tener máximo 20 caracteres'),
});

export default model;