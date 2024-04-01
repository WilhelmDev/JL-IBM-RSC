"use client";
import { useState, useEffect, useRef } from "react";
import { formatMimeTypes } from "@/utilis/format-mime-types";
import { validImageType } from "@/utilis/valid-image-type";

export const acceptedImageMimeTypes = ["image/jpeg", "image/png"];

const ImageInput = ({
  label = "Default label",
  name,
  updateValue,
  deteleValue = false,
  required = false,
  className = "",
  children,
}) => {
  //TODO: validate max resolution of image is 2048x2048
  const imageInputRef = useRef(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (deteleValue) {
      setValue("");
      imageInputRef.current.value = "";
    }
  }, [deteleValue]);

  return (
    <div className="image-input-flex">
      {children}
      <div className="image-input-container">
        <label className={` ${className}`}>
          {label}
          <input
            id="my-input-file"
            ref={imageInputRef}
            type="file"
            name={name}
            onChange={(e) => {
              updateValue(e, setValue);
              if (
                e.currentTarget.files.length === 0 ||
                !validImageType(
                  e.currentTarget.files[0],
                  acceptedImageMimeTypes
                )
              ) {
                if (!value) {
                  e.currentTarget.value = "";
                  return;
                }

                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(value);
                e.currentTarget.files = dataTransfer.files;
                return;
              }
            }}
            required={required}
            accept={acceptedImageMimeTypes.join(", ")}
          />
        </label>
        <p>
          Las imágenes deben ser{" "}
          {formatMimeTypes(acceptedImageMimeTypes, " o ", (s) =>
            s.replace("image/", "").toUpperCase()
          )}{" "}
          con un formato máximo 2048x2048
        </p>
      </div>
    </div>
  );
};

export default ImageInput;
