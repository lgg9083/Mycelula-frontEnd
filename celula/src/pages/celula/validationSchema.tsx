import * as yup from "yup";

const validationSchema = yup.object({
  nome: yup.string().required("O nome é obrigário"),
  nome_Lider: yup.string().required("O nome do Lider é obrigatório"),
  Bairro: yup.string().required("O bairro é obrigatório"),
  endereco_Da_Celula: yup
    .string()
    .required("O endereço da Celula é obrigatório"),
});


export default validationSchema;