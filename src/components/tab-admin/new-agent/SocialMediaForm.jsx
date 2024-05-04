"use client";
import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SubmitButton from "../common/SubmitButton";
import { alertAndLogFormSubmit } from "@/utilis/alert-and-log-form-submit";
import { addSocialMedia } from "@/core/infrastructure/services/tab-agent.service";

const inputNames = [
  "facebook_url",
  "pinterest_url",
  "instagram_url",
  "twitter_url",
  "linkedin_url",
  "website_url",
];

const SocialMediaForm = ({ agentId, socialMedia, setSocialMedia }) => {
  const [form, setForm] = useState({
    facebook_url: socialMedia.facebookurl ?? "",
    pinterest_url: socialMedia.pinterest_url ?? "",
    instagram_url: socialMedia.instagram_url ?? "",
    twitter_url: socialMedia.twitter_url ?? "",
    linkedin_url: socialMedia.linkedin_url ?? "",
    website_url: socialMedia.website_url ?? "",
  });
  const [isLoading, setIsLoading] = useState(false);
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

  const updateSocialMedia = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const updatedSocialMedia = await addSocialMedia(agentId, form);
      setSocialMedia(updatedSocialMedia);
    } catch (error) {
      console.error(error);
    }finally{
      setIsLoading(false);
    }
  }

  return (
    <form
      className="container"
      onSubmit={updateSocialMedia}
      noValidate
    >
      <div className="row row-cols-3 gx-4 gy-3">
        <h4 className="col-12">Redes Sociales</h4>
        <TextInput
          label="Facebook"
          name="facebook_url"
          initialValue={form.facebook_url}
          placeholder={placeholder}
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Pinterest"
          name="pinterest_url"
          initialValue={form.pinterest_url}
          placeholder={placeholder}
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Instagram"
          name="instagram_url"
          initialValue={form.instagram_url}
          placeholder={placeholder}
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Twitter"
          name="twitter_url"
          initialValue={form.twitter_url}
          placeholder={placeholder}
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Linkedin"
          name="linkedin_url"
          initialValue={form.linkedin_url}
          placeholder={placeholder}
          autoComplete="on"
          className="col"
          updateValue={updateValue}
        />
        <TextInput
          label="Website Url"
          name="website_url"
          initialValue={form.website_url}
          placeholder={placeholder}
          autoComplete="on"
          className="col"
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

export default SocialMediaForm;
