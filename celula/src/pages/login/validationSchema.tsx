import * as Yup from "yup";
import React from "react";


 const validationSchema = Yup.object({
    email: Yup.string()
       .email("Email inválido")
       .required("Email é obrigatório"),
    senha: Yup.string()
       .min(8, "A senha deve ter no mínimo 8 caracteres")
       .required("Senha é obrigatória")
})

export default validationSchema