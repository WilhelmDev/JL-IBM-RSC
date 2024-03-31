"use client";
import { useState, useEffect, useRef } from "react";
import { formatMimeTypes } from "./format-mime-types";
import { validImageType } from "./valid-image-type";

export const acceptedImageMimeTypes = ["image/jpeg", "image/png"];

const ImageInput = ({
  label = "Default label",
  name,
  initialValue = "",
  updateValue,
  deteleValue = false,
  required = false,
  className = "",
  children,
}) => {
  //TODO: validate max resolution of image is 2048x2048
  const imageInputRef = useRef(null);
  const [_value, setValue] = useState(initialValue);

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
            ref={imageInputRef}
            type="file"
            name={name}
            onChange={(e) => {
              updateValue(e, setValue);
              if (e.currentTarget.files.length === 0) {
                setValue("");
                imageInputRef.current.value = "";
                return;
              }
              if (
                !validImageType(
                  e.currentTarget.files[0],
                  acceptedImageMimeTypes
                )
              ) {
                setValue("");
                imageInputRef.current.value = "";
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
