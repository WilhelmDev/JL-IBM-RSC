import React from "react";
import { useState, CSSProperties } from "react";
import BeatLoader  from "react-spinners/BeatLoader";

export default function Loader({size}) {

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
  };

  return (
    <BeatLoader 
      color={'#090B37'}
      loading={true}
      // cssOverride={override}
      size={size || 150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}
