import { useContext } from "react";
import { LoginContext } from "../context/login";

export const useLogin = () => useContext(LoginContext);