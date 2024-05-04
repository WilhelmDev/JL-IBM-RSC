"use client";
import { useState } from "react";
import SubmitButton from "@/components/tab-admin/common/SubmitButton";
import Textarea from "./inputs/Textarea";
import TextInput from "./inputs/TextInput";
import EmailInput from "./inputs/EmailInput";
import TelInput from "./inputs/TelInput";
import ImageInput, { acceptedImageMimeTypes } from "./inputs/ImageInput";
import ImagePreview from "./inputs/ImagePreview";
import DeleteImageButton from "./inputs/DeleteImageButton";
import { validImageType } from "@/utilis/valid-image-type";
import { alertAndLogFormSubmit } from "@/utilis/alert-and-log-form-submit";
import { updateAgent } from "@/core/infrastructure/services/tab-agent.service";

const inputNames = [
  "username",
  "email",
  "phone",
  "first_name",
  "last_name",
  "job_title",
  "language",
  "company_name",
  "cuit_name",
  "address",
  "description",
];

const ProfileForm = ({ agent, setAgent }) => {
  const [form, setForm] = useState({
    username: agent.username ?? "",
    email: agent.email ?? "",
    phone: agent.phone ?? "",
    first_name: agent.first_name ?? "",
    last_name: agent.last_name ?? "",
    job_title: agent.job_title ?? "",
    language: agent.language ?? "",
    company_name: agent.company_name ?? "",
    cuit_name: agent.cuit_name ?? "",
    address: agent.address ?? "",
    description: agent.description ?? "",
  });
  const [profilePhoto, setProfilePhoto] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const deleteProfilePhoto = () => {
    setProfilePhoto();
  };

  const updateValue = (e, setValue) => {
    if (inputNames.includes(e.currentTarget.name)) {
      setValue(e.currentTarget.value);
      setForm({
        ...form,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    }
  };

  const updateAgentData = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true)
      const updatedAgent = await updateAgent(agent.id, form)
      setAgent(updatedAgent);
    } catch (error) {
      console.error(error);
    }finally{
      setIsLoading(false)
    }
  }

  const updateProfilePhoto = (e, setImage) => {
    const currentFiles = e.currentTarget.files;

    // This function is only here as reference of what happens, resetting to previous state in this case is equivalent to doing nothing at all
    const resetToPreviousProfilePhoto = () => {};

    if (currentFiles.length === 0) {
      resetToPreviousProfilePhoto();
      return;
    }

    const imageAsFile = currentFiles[0];

    //TODO: make this announce to the user that they introduced something that's not an image or an image that's not supported
    if (!validImageType(imageAsFile, acceptedImageMimeTypes)) {
      resetToPreviousProfilePhoto();
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      setImage(imageAsFile);
      setProfilePhoto({
        src: e.target.result,
        alt: imageAsFile.name,
      });
    };
    fileReader.readAsDataURL(imageAsFile);
  };

  return (
    <form
      className="container"
      onSubmit={updateAgentData}
      noValidate
    >
      <div className="row row-cols-3 gx-4 gy-3">
        <div className="col-12 col-12">
          <ImageInput
            label="Subir foto"
            name="profilePhoto"
            updateValue={updateProfilePhoto}
            deteleValue={!profilePhoto}
          >
            <ImagePreview image={profilePhoto}>
              <DeleteImageButton
                image={profilePhoto}
                deleteImage={deleteProfilePhoto}
              />
            </ImagePreview>
          </ImageInput>
        </div>
        <TextInput
          label="Nombre de usuario"
          name="username"
          initialValue={form.username}
          placeholder="Nombre de usuario"
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <EmailInput
          label="Email"
          name="email"
          initialValue={form.email}
          placeholder="Correo electrónico"
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TelInput
          label="Teléfono"
          name="phone"
          initialValue={form.phone}
          placeholder="Teléfono"
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Nombre"
          name="first_name"
          initialValue={form.first_name}
          placeholder="Nombre completo"
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Apellido"
          name="last_name"
          initialValue={form.last_name}
          placeholder="Apellido completo"
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Trabajo"
          name="job_title"
          initialValue={form.job_title}
          placeholder="Tu puesto"
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Lenguaje"
          name="language"
          initialValue={form.language}
          placeholder="Tu lengua principal"
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Nombre de la companía"
          name="company_name"
          initialValue={form.company_name}
          placeholder="Para quien trabajas"
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Número de CUIT / CUIL"
          name="cuit_name"
          initialValue={form.cuit_name}
          placeholder="Identificación fiscal"
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Dirección"
          name="address"
          initialValue={form.address}
          placeholder="Tu dirección de vivienda o facturación"
          autoComplete="on"
          className="col-12"
          updateValue={updateValue}
        />
        <Textarea
          label="Descripción"
          name="description"
          initialValue={form.description}
          className="col-12"
          rows="5"
          placeholder="Puedes contar un poco a qué te dedicas"
          updateValue={updateValue}
        />
        <SubmitButton
          text="Guardar"
          className="col-auto ms-auto margin-r-12px"
          disabled={isLoading}
        />
      </div>
    </form>
  );
};

export default ProfileForm;
