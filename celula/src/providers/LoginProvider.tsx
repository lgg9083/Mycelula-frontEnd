import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { ILogin, LoginCount } from "../services/routes";
import { LoginContext } from "../context/login";
import { useAuth } from "../hooks/useAuth";
import { jwtDecode } from "jwt-decode";
import { MyTokenPayload } from "./AuthProvider";

interface ILoginProviderProps {
  children: React.ReactNode;
}

export const LoginProvider: React.FC<ILoginProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const { updateToken, celulaName, setCelulaName } = useAuth();
  const {
    mutate: sendAccessToken,
    isPending,
    data: responseData,
    isSuccess,
    isError,
  } = useMutation<AxiosResponse<{ token: string }>, AxiosError, ILogin>({
    mutationFn: async (data: ILogin) => {
      const response = await LoginCount(data);
      updateToken(response.data.token);
      const decodedToken = jwtDecode<MyTokenPayload>(response.data.token);

      console.log(decodedToken);

      return response;
    },
  });

  const token = responseData?.data.token;

  return (
    <LoginContext.Provider
      value={{
        sendAccessToken,
        setEmail,
        email,
        senha,
        setSenha,
        token,
        celulaName,
        isPending,
        isSuccess,
        isError,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
