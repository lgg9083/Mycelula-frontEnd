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
import { useMutation } from "@tanstack/react-query";
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
          <form>
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
                //   value={formik.values.date || ""}
                //   onChange={formik.handleChange}
                //   onBlur={formik.handleBlur}
                //   error={formik.touched.date && Boolean(formik.errors.date)}
                //   helperText={formik.touched.date && formik.errors.date}
              />
              <FormControl
                variant="filled"
                margin="normal"
                className="custom-textfield"
                //   error={
                //     formik.touched.responvel_palavra &&
                //     Boolean(formik.errors.responvel_palavra)
                //   }
                sx={{ width: "330px" }}
              >
                <InputLabel>Selecione um membro como Lider</InputLabel>
                <Select
                  name="nome_Lider"
                  // value={formik.values.responvel_palavra}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
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
                {/*   
                  {formik.touched.responvel_palavra &&
                    formik.errors.responvel_palavra && (
                      <FormHelperText>
                        {formik.errors.responvel_palavra}
                      </FormHelperText>
                    )} */}
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
                //   value={formik.values.date || ""}
                //   onChange={formik.handleChange}
                //   onBlur={formik.handleBlur}
                //   error={formik.touched.date && Boolean(formik.errors.date)}
                //   helperText={formik.touched.date && formik.errors.date}
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
                //   value={formik.values.date || ""}
                //   onChange={formik.handleChange}
                //   onBlur={formik.handleBlur}
                //   error={formik.touched.date && Boolean(formik.errors.date)}
                //   helperText={formik.touched.date && formik.errors.date}
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
