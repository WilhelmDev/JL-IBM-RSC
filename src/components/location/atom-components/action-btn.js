import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function ActtionBtn({variant, editUrl=""}) {

  const router = useRouter()

  const shareContent = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        // Add to a modal or toast in the future
      } catch (error) {
        console.log('Error al copiar al portapapeles', error);
      }
    } else {
      console.log('La API del portapapeles no está disponible en tu navegador');
    }
  };

  const editContent = () => {
    router.push(editUrl)
  }

  return (
    <button type="button" onClick={variant === 'share' ? shareContent : variant === 'edit' ? editContent : null}>
      <Image src={`/images/tab-agent/list-actions/${variant}.svg`} height={3} width={3} alt='image'/>
    </button>
  )
}

