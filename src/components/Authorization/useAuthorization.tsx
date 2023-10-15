import { useEffect, useRef, useState } from "react";
import { ChangeEvent, ClickEvent } from "../../app.typing";
import { logIn, signUp, confirmRegister, resendCode } from "../../store/axiosCore/auth";
import { useDispatch } from "../../store/store";
import { saveLogin } from "../../store/slices/pointsSlise";

export const useAuthorization = () => {

  interface UserRegistration {
    firstName: string;
    secondName: string;
    email: string;
    password: string;
    rPassword: string;
    legalEntity: boolean;
    middleName: string;
  };
  const defaultFormData = {
    firstName: "",
    secondName: "",
    middleName: "",
    email: "",
    password: "",
    rPassword: "",
    legalEntity: false,
  };
  const defaultErrors = {
    firstName: "",
    secondName: "",
    middleName: "",
    email: "",
    password: "",
    rPassword: "",
    legalEntity: "",
    message: "",
    confirmMessage: "",
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogInPage, setIsLoginPage] = useState(false);
  const [isResendButtonActive, setResetButtonActive] = useState(false);
  const [formData, setFormData] = useState<UserRegistration>({ ...defaultFormData });
  const [formDataErrors, setFormDataErrors] = useState({ ...defaultErrors });
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const emailConfirm = useRef("");

  const dispatch = useDispatch();

  useEffect(() => {
    const emailForConfirmation = localStorage.getItem('emailForConfirmation');
    if (emailForConfirmation) {
      setResetButtonActive(true);
      emailConfirm.current = emailForConfirmation;
    }
  }, []);

  const handleCodeChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const currentInput = e.target;
    const nextInput = inputRefs.current[index + 1];

    if (currentInput.value.length >= 1 && nextInput) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    } else if (currentInput.value.length === 0 && index > 0) {
      const prevInput = inputRefs.current[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormDataErrors((prev) => ({ ...prev, [name]: "" }))
    setFormData((prev) => ({
      ...prev, [name]: type === "checkbox"
        ? newValue
        : (newValue as string).trim()
    }))
  }
  const handleChangeLoginType = (e: ClickEvent) => {
    const { name } = e.currentTarget;
    if (name === "login") {
      setIsLoginPage(true)
    } else {
      setIsLoginPage(false);
    };
    setFormDataErrors({ ...defaultErrors })
    setFormData({ ...defaultFormData })
  }

  function isEmailValid(email: string) {
    const EMAIL_REGEX = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return email.toLowerCase().match(EMAIL_REGEX);
  }
  function isFormDataValid(): boolean {
    let isValid = true;
    const formDataKeys = Object.keys(formData) as (keyof typeof formData)[];
    for (const key of formDataKeys) {
      if (key === "middleName" || key === "legalEntity") {
        continue;
      }
      if (isLogInPage && (key === "firstName" || key === "secondName" || key === "rPassword")) {
        continue;
      }
      if (!formData[key]) {
        isValid = false
        setFormDataErrors((prev) => ({ ...prev, [key]: "Заполните поле", "message": "Заполните все поля" }));
      };
    }
    if (!isEmailValid(formData.email)) {
      isValid = false;
      setFormDataErrors((prev) => ({ ...prev, email: "Некорректный адрес почты" }));
    }
    if (!isLogInPage && (formData.password !== formData.rPassword)) {
      isValid = false;
      setFormDataErrors((prev) => ({ ...prev, "message": "Пароли не совпадают", "rPassword": "ыыы" }));
    }
    if (isValid) setFormDataErrors({ ...defaultErrors })
    return isValid;
  };

  const handleOpenNote = () => {
    setIsModalOpen(true)
  };
  const handleCloseNote = () => {
    setIsModalOpen(false)
  };

  const handleRegClick = async () => {
    if (isFormDataValid()) {
      signUp({
        FirstName: formData.firstName,
        SecondName: formData.secondName,
        Email: formData.email,
        Password: formData.password,
        rPassword: formData.rPassword,
        LegalEntity: formData.legalEntity,
        MiddleName: formData.middleName || "",
      })
        .then(() => {
          setResetButtonActive(true);
          setFormDataErrors({ ...defaultErrors });
          setIsModalOpen(true);
          localStorage.setItem('emailForConfirmation', formData.email);
        })
        .catch(() => {
          setFormDataErrors((prev) => ({ ...prev, message: "Не удалось зарегистрироваться" }))
        });
    }
  }
  const handleLogClick = async () => {
    if (isFormDataValid()) {
      logIn({
        Email: formData.email,
        Password: formData.password,
      })
        .then((response) => {
          console.log(response)
          if (response.message === "авторизован") {
            window.location.href = "http://localhost:3000";
          }
        })
        .catch((err) => {
          console.log(err)
          setFormDataErrors((prev) => ({ ...prev, message: "Не удалось войти" }))
        });
    }
  }
  const handleConfirmClick = async () => {
    const nums = inputRefs.current.map((input) => input?.value);
    confirmRegister({
      confirmationCode: nums.join("")
    })
      .then(() => {
        emailConfirm.current = "";
        localStorage.removeItem("emailForConfirmation");
        setIsModalOpen(false);
        setIsLoginPage(true);
        setFormData({ ...defaultFormData });
        setFormDataErrors({ ...defaultErrors });
        dispatch(saveLogin());
      })
      .catch(() => {
        setFormDataErrors((prev) => ({ ...prev, message: "Не удалось подтвердить регистрацию" }))
      })
  }
  const handleResendClick = async () => {
    if (emailConfirm.current) {
      resendCode({
        Email: emailConfirm.current,
      })
        .then(() => {
          setIsModalOpen(true);
        })
        .catch(() => {
          setFormDataErrors((prev) => ({ ...prev, message: "Не удалось отправить код повторно" }))
        })
    }
  }

  return {
    handleLogClick,
    handleRegClick,
    formData,
    formDataErrors,
    inputRefs,
    isModalOpen,
    handleOpenNote,
    handleResendClick,
    handleCloseNote,
    isLogInPage,
    handleInputChange,
    handleConfirmClick,
    handleCodeChange,
    isResendButtonActive,
    setIsModalOpen,
    handleChangeLoginType,
  };
}