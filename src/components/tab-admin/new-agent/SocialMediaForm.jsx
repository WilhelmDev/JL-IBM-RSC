"use client";
import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SubmitButton from "../common/SubmitButton";
import { alertAndLogFormSubmit } from "@/utilis/alert-and-log-form-submit";

const inputNames = [
  "facebook",
  "pinterest",
  "instagram",
  "twitter",
  "linkedin",
  "websiteUrl",
];

const SocialMediaForm = () => {
  const [form, setForm] = useState({
    facebook: "",
    pinterest: "",
    instagram: "",
    twitter: "",
    linkedin: "",
    websiteUrl: "",
  });
  const placeholder = "Copia y pega la URL de tu usuario";

  const updateValue = (e, setValue) => {
    if (inputNames.includes(e.currentTarget.name)) {
      setValue(e.currentTarget.value);
      setForm({
        ...form,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    }
  };

  return (
    <form
      className="container"
      onSubmit={(e) => alertAndLogFormSubmit(e)}
      noValidate
    >
      <div className="row row-cols-3 gx-4 gy-3">
        <h4 className="col-12">Redes Sociales</h4>
        <TextInput
          label="Facebook"
          name="facebook"
          placeholder={placeholder}
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Pinterest"
          name="pinterest"
          placeholder={placeholder}
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Instagram"
          name="instagram"
          placeholder={placeholder}
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Twitter"
          name="twitter"
          placeholder={placeholder}
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Linkedin"
          name="linkedin"
          placeholder={placeholder}
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Website Url"
          name="websiteUrl"
          placeholder={placeholder}
          autoComplete="on"
          className="col"
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

export default SocialMediaForm;
