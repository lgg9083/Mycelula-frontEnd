import * as yup from "yup";
import Membros from "../../utils/membros";

const validationSchema = yup.object({
  nome: yup.string().required("O nome é obrigário"),
  nome_Lider: yup.string().required("O nome do Lider é obrigatório"),
  Bairro: yup.string().required("O bairro é obrigatório"),
  Endereco_Da_Celula: yup
    .string()
    .required("O endereço da Celula é obrigatório"),
  Membros: yup.array(),
});

export default validationSchema;
