"use client";
import { useState, useEffect } from "react";
import PasswordInput from "./inputs/PasswordInput";
import SubmitButton from "../common/SubmitButton";

const inputNames = [
  "currentPassword",
  "newPassword",
  "newPasswordConfirmation",
];

const ChangePasswordForm = () => {
  const [form, setForm] = useState({
    currentPassword: "password1234",
    newPassword: "",
    newPasswordConfirmation: "",
  });
  const [errors, setErrors] = useState([]);
  const isEmpty = !(form.newPassword || form.newPasswordConfirmation);

  useEffect(() => {
    if (form.newPassword === form.currentPassword) {
      updateError(
        1,
        "La nueva contraseña debe ser distinta de la actual",
        setErrors
      );
    } else {
      setErrors((errors) => errors.filter((error) => error.id !== 1));
    }

    if (form.newPassword !== form.newPasswordConfirmation) {
      updateError(
        2,
        "La nueva contraseña y la confirmación de la nueva contraseña deben coincidir",
        setErrors
      );
    } else {
      setErrors((errors) => errors.filter((error) => error.id !== 2));
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

  return (
    <form
      className="container"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        //TODO: send the object to the server
        const object = {};
        formData.forEach((value, key) => (object[key] = value));
        alert(`Send to the server: ${JSON.stringify(object, null, 2)}`);
      }}
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
          label="En uso"
          name="currentPassword"
          autoComplete="current-password"
          placeholder="La contraseña que usas"
          className="col"
          initialValue="password1234"
          updateValue={updateValue}
          disabled={true}
        />
        <div className="w-100 m-0 p-0"></div>
        <PasswordInput
          label="Nueva"
          name="newPassword"
          autoComplete="new-password"
          placeholder="Nueva contraseña"
          className="col"
          updateValue={updateValue}
        />
        <PasswordInput
          label="Confirmar"
          name="newPasswordConfirmation"
          autoComplete="new-password"
          placeholder="Repite la nueva contraseña"
          className="col"
          updateValue={updateValue}
        />
        <div className="w-100 m-0 p-0"></div>
        <SubmitButton
          text="Guardar"
          className="col-auto ms-auto margin-r-12px"
          disabled={errors.length > 0 || isEmpty}
        />
      </div>
    </form>
  );
};

export default ChangePasswordForm;
