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
import "./reuniao.css";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { buscarCelularId } from "../../services/routes";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import validationSchema from "./ValidationSchema";
function Reuniao() {
  const { token, celulaName } = useAuth();
  const { data, isError, isLoading, isSuccess, error } = useQuery({
    queryKey: ["membrocelula"],
    queryFn: async () => {
      const response = await buscarCelularId(celulaName ?? null);
      return response;
    },
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  const formik = useFormik({
    initialValues: {
      date: "",
      celula: "",
      responsavel_louvor: "",
      responsavel_palavra: "",
      responsavel_quebragelo: "",
      membros: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("chegabdo");
      console.log(values);
    },
  });
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="cadastrarReuniao">
          <form onSubmit={formik.handleSubmit}>
            <div className="listCd">
              <TextField
                label="Data"
                name="date"
                type="date"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                className="custom-textfield"
                sx={{ width: "330px" }}
                value={formik.values.date || ""}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.date && Boolean(formik.errors.date)}
                helperText={formik.touched.date && formik.errors.date}
              />
              <FormControl
                variant="filled"
                margin="normal"
                className="custom-textfield"
                error={
                  formik.touched.responsavel_louvor &&
                  Boolean(formik.errors.responsavel_louvor)
                }
                sx={{ width: "330px" }}
              >
                <InputLabel>Responsavel Louvor</InputLabel>
                <Select
                  name="responsavel_louvor"
                  value={formik.values.responsavel_louvor}
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
                  {data?.Membros.map((item: any) => (
                    <MenuItem key={item.idMembro} value={item.idMembro}>
                      {item.nome}
                    </MenuItem>
                  ))}
                  <MenuItem value="">
                    <em>Selecione um membro</em>
                  </MenuItem>
                </Select>

                {formik.touched.responsavel_louvor &&
                  formik.errors.responsavel_louvor && (
                    <FormHelperText>
                      {formik.errors.responsavel_louvor}
                    </FormHelperText>
                  )}
              </FormControl>
            </div>
            <div className="listCd">
              <FormControl
                variant="filled"
                margin="normal"
                className="custom-textfield"
                error={
                  formik.touched.responsavel_palavra &&
                  Boolean(formik.errors.responsavel_palavra)
                }
                sx={{ width: "330px" }}
              >
                <InputLabel>Responsavel Palavra</InputLabel>
                <Select
                  name="responsavel_palavra"
                  value={formik.values.responsavel_palavra}
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

                {formik.touched.responsavel_palavra &&
                  formik.errors.responsavel_palavra && (
                    <FormHelperText>
                      {formik.errors.responsavel_palavra}
                    </FormHelperText>
                  )}
              </FormControl>
              <FormControl
                variant="filled"
                margin="normal"
                className="custom-textfield"
                error={
                  formik.touched.responsavel_quebragelo &&
                  Boolean(formik.errors.responsavel_quebragelo)
                }
                sx={{ width: "330px" }}
              >
                <InputLabel>Responsavel quebra gelo</InputLabel>
                <Select
                  name="responsavel_quebragelo"
                  value={formik.values.responsavel_quebragelo}
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
                {formik.touched.responsavel_quebragelo &&
                  formik.errors.responsavel_quebragelo && (
                    <FormHelperText>
                      {formik.errors.responsavel_quebragelo}
                    </FormHelperText>
                  )}
              </FormControl>
            </div>
            <div className="listCd">
              <FormControl
                variant="filled"
                margin="normal"
                className="custom-textfield"
                error={formik.touched.celula && Boolean(formik.errors.celula)}
                sx={{ width: "330px" }}
              >
                <InputLabel>Celula</InputLabel>
                <Select
                  name="celula"
                  value={formik.values.celula || ""}
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
                    <em>Selecione uma Celula</em>
                  </MenuItem>
                </Select>
                {formik.touched.celula && formik.errors.celula && (
                  <FormHelperText>{formik.errors.celula}</FormHelperText>
                )}
              </FormControl>
              <FormControl
                variant="filled"
                margin="normal"
                className="custom-textfield"
                error={formik.touched.membros && Boolean(formik.errors.membros)}
                sx={{ width: "330px" }}
              >
                <InputLabel> Membros</InputLabel>
                <Select
                  name="membros"
                  value={formik.values.membros || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  multiple
                  renderValue={(selected) => {
                    return selected
                      .map((id) => {
                        const selectedMember = data?.Membros.find(
                          (membro: any) => membro.idMembro === id
                        );
                        return selectedMember ? selectedMember.nome : null;
                      })
                      .filter((nome) => nome !== null)
                      .join(", ");
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
                    <em>Selecione os participantes</em>
                  </MenuItem>
                </Select>
                {formik.touched.membros && formik.errors.membros && (
                  <FormHelperText>{formik.errors.membros}</FormHelperText>
                )}
              </FormControl>
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
