import * as yup from "yup";

const validationSchema = yup.object({
  date: yup.string().required("A data é obrigaria"),
  idCelula: yup.string().required("A celula é obrigatória"),
  responvel_Louvor: yup
    .number()
    .required("O responsavel pelo louvor é obrigatório"),
  responvel_palavra: yup
    .number()
    .required("O responsavel pela palavra é obrigatório"),
  responvel_quebragelo: yup
    .number()
    .required("O responsavel pela quebra de gelo é obrigatório"),
  membros: yup.array().of(yup.string().required("Os membros são obrigatórios")),
});

export default validationSchema;
