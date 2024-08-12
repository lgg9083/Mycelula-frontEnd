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
import {
  buscarCelularId,
  criarMembro,
  criarReuniao,
  IReuniao,
} from "../../services/routes";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import validationSchema from "./ValidationSchema";
import { useMutation } from "@tanstack/react-query";
function Reuniao() {
  const { token, celulaName } = useAuth();
  const { data, isError, isLoading, isSuccess, error } = useQuery({
    queryKey: ["membrocelula"],
    queryFn: async () => {
      const response = await buscarCelularId(celulaName ?? null);
      return response;
    },
  });
  const {
    mutateAsync: criarreuniao,
    isSuccess: sucess,
    isError: erroReuniao,
  } = useMutation({
    mutationFn: async (data: IReuniao) => {
      await criarReuniao(data);
    },
    onSuccess: () => {
      setTimeout(() => {
        navigate("/");
      }, 2000);
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
      idCelula: 0,
      responvel_Louvor: 0,
      responvel_palavra: 0,
      responvel_quebragelo: 0,
      membros: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      criarreuniao(values);
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
                  formik.touched.responvel_Louvor &&
                  Boolean(formik.errors.responvel_Louvor)
                }
                sx={{ width: "330px" }}
              >
                <InputLabel>Responsavel Louvor</InputLabel>
                <Select
                  name="responvel_Louvor"
                  value={formik.values.responvel_Louvor}
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

                {formik.touched.responvel_Louvor &&
                  formik.errors.responvel_Louvor && (
                    <FormHelperText>
                      {formik.errors.responvel_Louvor}
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
                  formik.touched.responvel_palavra &&
                  Boolean(formik.errors.responvel_palavra)
                }
                sx={{ width: "330px" }}
              >
                <InputLabel>Responsavel Palavra</InputLabel>
                <Select
                  name="responvel_palavra"
                  value={formik.values.responvel_palavra}
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

                {formik.touched.responvel_palavra &&
                  formik.errors.responvel_palavra && (
                    <FormHelperText>
                      {formik.errors.responvel_palavra}
                    </FormHelperText>
                  )}
              </FormControl>
              <FormControl
                variant="filled"
                margin="normal"
                className="custom-textfield"
                error={
                  formik.touched.responvel_quebragelo &&
                  Boolean(formik.errors.responvel_quebragelo)
                }
                sx={{ width: "330px" }}
              >
                <InputLabel>Responsavel quebra gelo</InputLabel>
                <Select
                  name="responvel_quebragelo"
                  value={formik.values.responvel_quebragelo}
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
                {formik.touched.responvel_quebragelo &&
                  formik.errors.responvel_quebragelo && (
                    <FormHelperText>
                      {formik.errors.responvel_quebragelo}
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
                  formik.touched.idCelula && Boolean(formik.errors.idCelula)
                }
                sx={{ width: "330px" }}
              >
                <InputLabel>Celula</InputLabel>
                <Select
                  name="idCelula"
                  value={formik.values.idCelula}
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
                {formik.touched.idCelula && formik.errors.idCelula && (
                  <FormHelperText>{formik.errors.idCelula}</FormHelperText>
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
