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
import { validImageType } from "./inputs/valid-image-type";

const inputNames = [
  "username",
  "email",
  "tel",
  "givenName",
  "surname",
  "jobTitle",
  "language",
  "companyName",
  "uniqueIdKey",
  "address",
  "about",
];

const ProfileForm = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    tel: "",
    givenName: "",
    surname: "",
    jobTitle: "",
    language: "",
    companyName: "",
    uniqueIdKey: "",
    address: "",
    about: "",
  });
  const [profilePhoto, setProfilePhoto] = useState();

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

  const updateProfilePhoto = (e, setImage) => {
    const currentFiles = e.currentTarget.files;

    if (currentFiles.length === 0) {
      setImage("");
      setProfilePhoto();
      return;
    }

    const imageAsFile = currentFiles[0];

    //TODO: make this announce to the user that they introduced something that's not an image or an image that's not supported
    if (!validImageType(imageAsFile, acceptedImageMimeTypes)) {
      setImage("");
      setProfilePhoto();
      return;
    }

    const image = {
      src: URL.createObjectURL(imageAsFile),
      alt: imageAsFile.name,
    };

    setImage(imageAsFile);
    setProfilePhoto(image);
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
        console.log(object);
        alert(`Send to the server: ${JSON.stringify(object, null, 2)}`);
      }}
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
          placeholder="Nombre de usuario"
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <EmailInput
          label="Email"
          name="email"
          placeholder="Correo electrónico"
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TelInput
          label="Teléfono"
          name="tel"
          placeholder="Teléfono"
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Nombre"
          name="givenName"
          placeholder="Nombre completo"
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Apellido"
          name="surname"
          placeholder="Apellido completo"
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Trabajo"
          name="jobTitle"
          placeholder="Tu puesto"
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Lenguaje"
          name="language"
          placeholder="Tu lengua principal"
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Nombre de la companía"
          name="companyName"
          placeholder="Para quien trabajas"
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Número de CUIT / CUIL"
          name="uniqueIdKey"
          placeholder="Identificación fiscal"
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Dirección"
          name="address"
          placeholder="Tu dirección de vivienda o facturación"
          autoComplete="on"
          className="col-12"
          updateValue={updateValue}
        />
        <Textarea
          label="Descripción"
          name="about"
          className="col-12"
          rows="5"
          placeholder="Puedes contar un poco a qué te dedicas"
          updateValue={updateValue}
        />
        <SubmitButton
          text="Guardar"
          className="col-auto ms-auto margin-r-12px"
        />
      </div>
    </form>
  );
};

export default ProfileForm;
