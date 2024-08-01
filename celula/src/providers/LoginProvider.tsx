import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse, AxiosError } from "axios";
import { ILogin, LoginCount } from "../services/routes";
import { LoginContext } from "../context/login";
import { useAuth } from "../hooks/useAuth";

interface ILoginProviderProps {
  children: React.ReactNode;
}

export const LoginProvider: React.FC<ILoginProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string>("");
  const { updateToken } = useAuth();
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
      return response;
    },
  });

  console.log(responseData);
  const token = responseData?.data.token;

  return (
    <LoginContext.Provider
      value={{
        sendAccessToken,
        setEmail,
        email,
        token,
        isPending,
        isSuccess,
        isError,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
