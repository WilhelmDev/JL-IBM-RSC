"use client";
import { useState, useEffect } from "react";
import PasswordInput from "./inputs/PasswordInput";
import SubmitButton from "../common/SubmitButton";
import { alertAndLogFormSubmit } from "@/utilis/alert-and-log-form-submit";
import { changeAgentPassword } from "@/core/infrastructure/services/tab-agent.service";
import { toast } from "react-toastify";

const inputNames = [
  "current_password",
  "password",
  "password_confirmation",
];

const ChangePasswordForm = ({ agentId }) => {
  const [form, setForm] = useState({
    current_password: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const isEmpty = !(form.password || form.password_confirmation);

  useEffect(() => {
    if ((form.password === form.current_password) && form.password !== "" && form.current_password !== "") {
      updateError(
        1,
        "La nueva contraseña debe ser distinta de la actual",
        setErrors
      );
    } else {
      setErrors((errors) => errors.filter((error) => error.id !== 1));
    }

    if (form.password !== form.password_confirmation) {
      updateError(
        2,
        "La nueva contraseña y la confirmación de la nueva contraseña deben coincidir",
        setErrors
      );
    } else {
      setErrors((errors) => errors.filter((error) => error.id !== 2));
    }

    if ((form.password.length < 8 || form.current_password.length < 8) && (form.password.length !== 0 || form.current_password.length !== 0)) {
      updateError(
        3,
        "Las contraseñas deben tener al menos 8 caracteres",
        setErrors
      );
    } else {
      setErrors((errors) => errors.filter((error) => error.id !== 3));
    }
  }, [form]);

  const updateValue = (e, setValue) => {
    if (inputNames.includes(e.currentTarget.name)) {
      setValue(e.currentTarget.value);
      setForm({
        ...form,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    }
  };

  const updateError = (errorId, errorMessage, setErrors) => {
    setErrors((errors) => {
      if (!errors.some((error) => error.id === errorId)) {
        return [
          ...errors,
          {
            id: errorId,
            message: errorMessage,
          },
        ];
      }
      return [...errors];
    });
  };

  const changePassword = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await changeAgentPassword(agentId, form)
      setResetKey(prevKey => prevKey + 3);
      setForm({
        current_password: "",
        password: "",
        password_confirmation: "",
      })
      toast.success("Contraseña cambiada correctamente")
    } catch (error) {
      if(error.response.data.status === 400)
        toast.error("Contraseña en uso incorrecta")
      else
        toast.error("Ha ocurrido un error")
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      className="container"
      onSubmit={changePassword}
      noValidate
    >
      <div className="row row-cols-3 gx-4 gy-3">
        <h4 className="col-12">Cambiar Contraseña</h4>
        {errors.map((error, index) => (
          <p key={index} className="col-12 error-message">
            {error.message}
          </p>
        ))}
        <PasswordInput
          key={resetKey}
          label="En uso"
          name="current_password"
          autoComplete="current-password"
          placeholder="La contraseña que usas"
          className="col"
          updateValue={updateValue}
        />
        <div className="w-100 m-0 p-0"></div>
        <PasswordInput
          key={resetKey + 1}
          label="Nueva"
          name="password"
          autoComplete="new-password"
          placeholder="Nueva contraseña"
          className="col"
          updateValue={updateValue}
        />
        <PasswordInput
          key={resetKey + 2}
          label="Confirmar"
          name="password_confirmation"
          autoComplete="new-password"
          placeholder="Repite la nueva contraseña"
          className="col"
          updateValue={updateValue}
        />
        <div className="w-100 m-0 p-0"></div>
        <SubmitButton
          text="Guardar"
          className="col-auto ms-auto margin-r-12px"
          disabled={errors.length > 0 || isEmpty || isLoading}
        />
      </div>
    </form>
  );
};

export default ChangePasswordForm;
