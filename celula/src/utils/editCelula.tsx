import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import NavBar from "../components/NavBar";
import { useFormik } from "formik";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  atualizarCelula,
  buscarCelularId,
  ICreateCelula,
} from "../services/routes";
import validationSchema from "../pages/celula/validationSchema";
import { useAuth } from "../hooks/useAuth";
import { useParams } from "react-router-dom";
interface Cel {
  id: number;
}

const EditCelula: React.FC = () => {
  const { token, celulaName } = useAuth();
  const { id } = useParams<{ id: string }>();
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ["membrocelula"],
    queryFn: async () => {
      const response = await buscarCelularId(Number(id) ?? null);
      return response;
    },
  });
  console.log(data?.nome_Lider);
  const { mutate: atualizarCelulaId, error } = useMutation<
    void,
    Error,
    { id: any; data: ICreateCelula }
  >({
    mutationFn: async ({ id, data }) => {
      const response = await atualizarCelula(id, data);
      return response;
    },
  });

  const formik = useFormik({
    initialValues: {
      nome: data?.nome || "",
      nome_Lider: data?.nome_Lider || "",
      Bairro: data?.Bairro || "",
      endereco_Da_Celula: data?.endereco_Da_Celula || "",
    },
    enableReinitialize: true, // Permite reinitializar os valores quando "data" é carregado
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const id = data?.id; // Supondo que você tenha o ID da célula para atualizar
      atualizarCelulaId({ id, data: values });
    },
  });

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="cadastrarReuniao">
          <form onSubmit={formik.handleSubmit}>
            <div className="listti">
              <h1>Cadastro de Célula</h1>
              <p>
                Preencha as informações necessárias para registrar uma nova
                célula.
              </p>
            </div>
            <div className="listCd">
              <TextField
                label="Nome"
                name="nome"
                type="text"
                placeholder="Digite o nome da célula"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                className="custom-textfield"
                sx={{ width: "330px" }}
                value={formik.values.nome}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.nome && Boolean(formik.errors.nome)}
                helperText={
                  typeof formik.errors.nome === "string"
                    ? formik.errors.nome
                    : undefined
                }
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
                <InputLabel>Selecione um membro como Líder</InputLabel>
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
                  {data?.Membros.map((item: any) => (
                    <MenuItem key={item.idMembro} value={item.idMembro}>
                      {item.nome}
                    </MenuItem>
                  ))}
                  <MenuItem value="">
                    <em>Selecione um membro</em>
                  </MenuItem>
                </Select>
                {formik.touched.nome_Lider && formik.errors.nome_Lider && (
                  <FormHelperText>
                    {typeof formik.errors.nome_Lider === "string"
                      ? formik.errors.nome_Lider
                      : null}
                  </FormHelperText>
                )}
              </FormControl>
            </div>
            <div className="listCd">
              <TextField
                label="Bairro"
                name="Bairro"
                type="text"
                placeholder="Qual o bairro da célula?"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                className="custom-textfield"
                sx={{ width: "330px" }}
                value={formik.values.Bairro}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.Bairro && Boolean(formik.errors.Bairro)}
                helperText={
                  typeof formik.errors.Bairro === "string"
                    ? formik.errors.Bairro
                    : undefined
                }
              />
              <TextField
                label="Endereço da célula"
                name="endereco_Da_Celula"
                type="text"
                placeholder="Qual o endereço da célula?"
                variant="outlined"
                margin="normal"
                InputLabelProps={{ shrink: true }}
                className="custom-textfield"
                sx={{ width: "330px" }}
                value={formik.values.endereco_Da_Celula}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.endereco_Da_Celula &&
                  Boolean(formik.errors.endereco_Da_Celula)
                }
                helperText={
                  typeof formik.errors.endereco_Da_Celula === "string"
                    ? formik.errors.endereco_Da_Celula
                    : undefined
                }
              />
            </div>
            <div className="listCd">
              <Button type="submit" variant="contained">
                Atualizar
              </Button>
              {error && <p>{error.message}</p>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditCelula;
