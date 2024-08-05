import React from "react";
import * as yup from "yup";

const validationSchema = yup.object({
  nome: yup.string(),
  endereco: yup.string().min(3, "O endereço deve conter mais de 3 caracteres"),
  bairro: yup.string().min(3, "O bairro deve conter mais de 3 caracteres"),
  data_de_Nascimento: yup.string(),
  data_Batismo: yup.string(),

  telefone: yup
    .string()
    .min(3, "O numero de telefone deve conter mais de 3 caracteres"),
  cidade: yup.string().min(3, "A cidade deve conter mais de 3 caracteres"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  senha: yup
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
  celula: yup.string(),
});

export default validationSchema;
