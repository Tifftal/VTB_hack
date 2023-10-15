import { api } from "./api";

export interface IUserRegistration {
  FirstName: string;
  SecondName: string;
  MiddleName?: string;
  Email: string;
  Password: string;
  rPassword: string;
  LegalEntity: boolean;
}

export interface IUserLogin {
  Email: string;
  Password: string;
}

export interface IConfirmRegister {
  confirmationCode: string
}

export interface IResendCode {
  Email: string;
}

const signUp = async (userData: IUserRegistration) => {
  try {
    const response = await api.post("/user/register", userData);
    return response.data;
  } catch (error) {
    console.error("Error register user:", error);
    throw error;
  }
};
const logIn = async (userData: IUserLogin) => {
  try {
    const response = await api.post("/user/login", userData, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error login:", error);
    throw error;
  }
};
const confirmRegister = async (code: IConfirmRegister) => {
  try {
    const response = await api.post("/user/confirm-registration", code);
    return response.data;
  } catch (error) {
    console.error("Error confirmation register:", error);
    throw error;
  }
};
const resendCode = async (userData: IResendCode) => {
  try {
    const response = await api.put("/user/resend-code", userData);
    return response.data;
  } catch (error) {
    console.error("Error confirmation register:", error);
    throw error;
  }
};

export { logIn, signUp, confirmRegister, resendCode };