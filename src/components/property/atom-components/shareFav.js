import React, { useState } from "react";
import Image from "next/image";

export default function ShareFav({ totalFav, totalShared }) {
  const [shared, setShared] = useState(0);
  const [favorites, setFavorites] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleSave = () => {
    if (isFavorite) {
      setFavorites(favorites - 1);
      setIsFavorite(false);
    } else {
      setFavorites(favorites + 1);
      setIsFavorite(true);
    }
  };

  const shareContent = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        setShared(shared + 1);
      } catch (error) {
        console.log("Error al copiar al portapapeles", error);
      }
    } else {
      console.log("La API del portapapeles no está disponible en tu navegador");
    }
  };
  return (
    <div className="fav-shared">
      <div className="text-center">
        <div>
          <Image
            src={`/images/tab-agent/list-actions/${
              isFavorite ? "heart-filled" : "heart"
            }.svg`}
            width={25}
            height={23}
            className="share-fav-icons"
            alt="favorite"
            onClick={handleSave}
          />
          <p>{favorites} Favoritos</p>
        </div>
        <div>
          <Image
            src="/images/tab-agent/list-actions/share.svg"
            width={25}
            height={25}
            className="share-fav-icons"
            alt="share"
            onClick={shareContent}
          />
          <p>Compartido {shared}</p>
        </div>
      </div>
    </div>
  );
}
