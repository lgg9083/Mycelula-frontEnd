import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import NavBar from "../../components/NavBar";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { buscarCelularId } from "../../services/routes";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useFormik } from "formik";
import validationSchema from "./validationSchema";
function Reuniao() {
  const { token, celulaName } = useAuth();
  const { data, isError, isLoading, isSuccess, error } = useQuery({
    queryKey: ["membrocelula"],
    queryFn: async () => {
      const response = await buscarCelularId(celulaName ?? null);
      console.log(response);
      return response;
    },
  });
  const formik = useFormik({
    initialValues: {
      nome: "",
      nome_Lider: "",
      Bairro: "",
      Endereco_Da_Celula: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        console.log(values);
        alert("Reuniao cadastrada com sucesso!");
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="cadastrarReuniao">
          <form onSubmit={formik.handleSubmit}>
            <div className="listti">
              <h1>Cadastro de Celula</h1>
              <p>
                Preencha as informações necessárias para registrar uma nova
                célula.
              </p>
            </div>
            <div className="listCd">
              <TextField
                label="Nome"
                name="name"
                type="text"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                className="custom-textfield"
                sx={{ width: "330px" }}
                value={formik.values.nome || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.nome && Boolean(formik.errors.nome)}
                helperText={formik.touched.nome && formik.errors.nome}
              />
              <FormControl
                variant="filled"
                margin="normal"
                className="custom-textfield"
                error={
                  formik.touched.nome_Lider && Boolean(formik.errors.nome_Lider)
                }
                sx={{ width: "330px" }}
              >
                <InputLabel>Selecione um membro como Lider</InputLabel>
                <Select
                  name="nome_Lider"
                  value={formik.values.nome_Lider}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  renderValue={(selected) => {
                    const selectedMember = data?.Membros.find(
                      (membro: any) => membro.idMembro === selected
                    );
                    return selectedMember
                      ? selectedMember.nome
                      : "Selecione um membro";
                  }}
                >
                  {data
                    ? data.Membros.map((item: any) => (
                        <MenuItem key={item.idMembro} value={item.idMembro}>
                          {item.nome}
                        </MenuItem>
                      ))
                    : null}
                  <MenuItem value="">
                    <em>Selecione um membro</em>
                  </MenuItem>
                </Select>

                {formik.touched.nome_Lider && formik.errors.nome_Lider && (
                  <FormHelperText>{formik.errors.nome_Lider}</FormHelperText>
                )}
              </FormControl>
            </div>
            <div className="listCd">
              <TextField
                label="Bairro"
                name="Bairro"
                type="text"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                className="custom-textfield"
                sx={{ width: "330px" }}
                value={formik.values.Bairro || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.Bairro && Boolean(formik.errors.Bairro)}
                helperText={formik.touched.Bairro && formik.errors.Bairro}
              />
              <TextField
                label="Endereço da celula"
                name="Endereco_Da_Celula"
                type="text"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                className="custom-textfield"
                sx={{ width: "330px" }}
                value={formik.values.Endereco_Da_Celula || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.Endereco_Da_Celula &&
                  Boolean(formik.errors.Endereco_Da_Celula)
                }
                helperText={
                  formik.touched.Endereco_Da_Celula &&
                  formik.errors.Endereco_Da_Celula
                }
              />
            </div>

            <div className="listCd">
              <Button type="submit" variant="contained">
                Cadastrar
              </Button>
              {error && <p>{error.message}</p>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Reuniao;
