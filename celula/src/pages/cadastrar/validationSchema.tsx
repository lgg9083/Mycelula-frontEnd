import React from "react";
import * as yup from "yup";

const validationSchema = yup.object({
  nome: yup
    .string()
    .min(2, "nome deve conter mais de 3 caracteres")
    .required("O nome é obrigatório"),
  endereco: yup
    .string()
    .min(3, "O endereço deve conter mais de 3 caracteres")
    .required("O endereço é obrigatório"),
  bairro: yup
    .string()
    .min(3, "O bairro deve conter mais de 3 caracteres")
    .required("O bairro é obrigatório"),
  data_de_Nascimento: yup
    .string()
    .required("A data de nascimento é obrigatória"),
  data_Batismo: yup.string().required("A data de batismo é obrigatória"),

  telefone: yup
    .string()
    .min(3, "O numero de telefone deve conter mais de 3 caracteres")
    .required("O telefone é Obrigatória"),
  cidade: yup
    .string()
    .min(3, "A cidade deve conter mais de 3 caracteres")
    .required("A cidade é obrigatória"),
  email: yup
    .string()
    .email("Email inválido")
    .required("Email é obrigatório")
    .required("O email é obrigatório"),
  senha: yup
    .string()
    .min(6, "A senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
  celula: yup.string().required("Celula é obrigatória"),
});

export default validationSchema;
