import { Schema } from "rsuite"

const { StringType } = Schema.Types;

const maxSearch = 40;

const searchModel = Schema.Model({
    search: StringType()
        .isRequired('Campo requerido')
        .maxLength(maxSearch , `Máximo ${maxSearch} caracteres`)
})


export default searchModel;