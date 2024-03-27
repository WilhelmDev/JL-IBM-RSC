import React from 'react'
import Image from 'next/image'

export default function ShareFav({favorites, shared}) {
    return (
        <td className="fav-shared">
          <div className="fav-shared-container">
            <div>
              <Image
                src="/images/tab-agent/list-actions/heart.svg"
                width={25}
                height={23}
                className="favorite-image"
              />
              <span>{favorites} Favoritos</span>
            </div>
            <div>
              <Image
                src="/images/tab-agent/list-actions/share.svg"
                width={25}
                height={25}
                className="share-image"
              />
              <span>Compartido {shared}</span>
            </div>
          </div>
        </td>
      );
}
