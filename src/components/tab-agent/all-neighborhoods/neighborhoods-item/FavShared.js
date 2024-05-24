import React from "react";
import Image from "next/image";

const FavShared = ({ favorites, shared }) => {
  return (
    <td className="fav-shared">
      <div className="fav-shared-container">
        <div>
          <Image
            src="/images/tab-agent/all-neighborhoods/favorite.svg"
            width={25}
            height={23}
            className="favorite-image"
          />
          <span>{favorites} Favoritos</span>
        </div>
        <div>
          <Image
            src="/images/tab-agent/all-neighborhoods/share.svg"
            width={25}
            height={25}
            className="share-image"
          />
          <span>Compartido {shared}</span>
        </div>
      </div>
    </td>
  );
};

export default FavShared;
