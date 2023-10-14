import { useEffect, useRef, useState } from "react";
import { IUserLogin, IUserRegistration, useLogInMutation, useSignUpMutation } from "../../store/api/authorizationApi";
import { ChangeEvent, ClickEvent } from "../../app.typing";

export const useAuthorization = () => {

  interface UserRegistration {
    firstName: string;
    secondName: string;
    email: string;
    password: string;
    rPassword: string;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogInPage, setIsLoginPage] = useState(false);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [formData, setFormData] = useState<UserRegistration>({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    rPassword: "",
  });
  const defaulErrors = {
    firstName: "",
    secondName: "",
    email: "",
    password: "",
    rPassword: "",
    middleName: "",
    message: "",
  };
  const [formDataErrors, setFormDataErrors] = useState({ ...defaulErrors });

  const [
    signUp,
    {
      /* data: signUpData, */
      error: signUpError,
      /* isSuccess: isSignupSuccess, */
      /* isLoading: isSignUpLoading */
    }
  ] = useSignUpMutation();
  /* const [
    logIn,
    {
      data: signUpData,
      error: signUpError,
      isSuccess: isSignupSuccess,
      isLoading: isSignUpLoading
    }
  ] = useLogInMutation(); */

  useEffect(() => {
    if (signUpError) {
      console.error(signUpError);
    }
  }, [signUpError]);

  const handleCodeChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const currentInput = e.target;
    const nextInput = inputRefs.current[index + 1];
    if (currentInput.value.length === 1 && nextInput) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }
  };
  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setFormDataErrors((prev) => ({ ...prev, [name]: "", "message": "" }))
    setFormData((prev) => ({ ...prev, [name]: value.trim() }))
  }
  const handleChangeLoginType = (e: ClickEvent) => {
    const { name } = e.currentTarget;
    if (name === "login") {
      setIsLoginPage(true)
    } else {
      setIsLoginPage(false);
    };
    return;
  }

  function isEmailValid(email: string) {
    const EMAIL_REGEX = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return email.toLowerCase().match(EMAIL_REGEX);
  }
  function isFormDataValid(): boolean {
    let isValid = true;
    const formDataKeys = Object.keys(formData) as (keyof typeof formData)[];
    for (const key of formDataKeys) {
      if (!formData[key]) {
        isValid = false
        setFormDataErrors((prev) => ({...prev, [key]: "Заполните все поля", "message": "Заполните все поля"}));
      };
    }
    if (!isEmailValid(formData.email)) {
      isValid = false;
      setFormDataErrors((prev) => ({ ...prev, email: "Некорректный адрес почты" }));
    }
    if (isValid) setFormDataErrors({ ...defaulErrors })
    return isValid;
  };


  const handleOpenNote = () => {
    setIsModalOpen(true)
  };
  const handleCloseNote = () => {
    setIsModalOpen(false)
  };
  const handleRegClick = () => {
    if (isFormDataValid()) {
      signUp({
        FirstName: formData.firstName,
        SecondName: formData.secondName,
        Email: formData.email,
        Password: formData.password,
        rPassword: formData.rPassword
      });
    }
  }
  const handleLogClick = () => {

  }

  return {
    handleLogClick,
    handleRegClick,
    formData,
    formDataErrors,
    inputRefs,
    isModalOpen,
    handleOpenNote,
    handleCloseNote,
    isLogInPage,
    handleInputChange,
    handleCodeChange,
    setIsModalOpen,
    handleChangeLoginType,
  };
}