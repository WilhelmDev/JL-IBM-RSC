import React, { useState } from 'react'
import Image from 'next/image'

export default function ShareFav({totalFav, totalShared}) {

  const [shared, setShared] = useState(0);
  const [favorites, setFavorites] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleSave = () => {
    if (isFavorite) {
      setFavorites(favorites - 1);  //Add to save the favorite number in the database
      setIsFavorite(false);
    } else {
      setFavorites(favorites + 1);  //Add to save the favorite number in the database
      setIsFavorite(true);
    }
  };

  const shareContent = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        setShared(shared + 1);  //Add to save the shared number in the database
        // Add to a modal or toast in the future
      } catch (error) {
        console.log('Error al copiar al portapapeles', error);
      }
    } else {
      console.log('La API del portapapeles no está disponible en tu navegador');
    }
  };

    return (
        <td className="fav-shared">
          <div className="fav-shared-container">
            <div>
              <Image
                src={isFavorite ? "/images/tab-agent/list-actions/heart-filled.svg" : "/images/tab-agent/list-actions/heart.svg"}
                width={25}
                height={23}
                className="favorite-image"
                onClick={handleSave}
              />
              <span>{favorites} Favoritos</span>
            </div>
            <div>
              <Image
                src="/images/tab-agent/list-actions/share.svg"
                width={25}
                height={25}
                className="share-image"
                onClick={shareContent}
              />
              <span>Compartido {shared}</span>
            </div>
          </div>
        </td>
      );
}
