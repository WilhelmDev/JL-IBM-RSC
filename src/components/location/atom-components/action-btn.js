import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import { deleteEntrepreneurshipsList, deleteRealStateList, deletelocalitiesList } from '@/core/infrastructure/services/tab-agent.service'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function ActtionBtn({variant, itemId, action}) {
  const router = useRouter()
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const deleteEntrepreneurship = async(itemId, action) => {
    try {
      if (action === "entrepreneurship" ) {
        await deleteEntrepreneurshipsList(itemId)
      } else if (action === "propertys") {
        await deleteRealStateList(itemId)
      } else if (action === "localities") {
        await deletelocalitiesList(itemId)
      }
      window.location.reload()
    }
    catch(error) {
      console.log(error);
    }
  }

  function actionDelete() {
    deleteEntrepreneurship(itemId, action)
    setIsOpen(false)
  }

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

  const deleteContent = async () => {
    openModal();
  }

  return (
    <>
      <button type="button" onClick={variant === 'share' ? shareContent : variant === 'delete' ? deleteContent : null}>
        <Image src={`/images/tab-agent/list-actions/${variant}.svg`} height={15} width={15} alt='image'/>
      </button>
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Eliminar Modal"
        ariaHideApp={false}
      >
        <h2>¿Estás seguro de que quieres eliminar esto?</h2>
        <button onClick={closeModal}>Cerrar</button>
        <button onClick={actionDelete}>Eliminar</button>
      </Modal>
    </>
  );
}

