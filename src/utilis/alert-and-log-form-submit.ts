import { FormEvent } from "react";

export function alertAndLogFormSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const object = {};
  formData.forEach((value, key) => (object[key] = value));
  console.log(object);
  alert(`Send to the server: ${JSON.stringify(object, null, 2)}`);
}
