import Image from "next/image";

const DeleteImageButton = ({ image, deleteImage }) => {
  return (
    <>
      {!image && <></>}
      {image && (
        <button
          className="delete-image-button"
          onClick={deleteImage}
          aria-label="Botón para borrar imagen"
        >
          <Image
            src="/images/tab-admin/trash.svg"
            alt="Icono de borrar"
            width={20}
            height={20}
          />
        </button>
      )}
    </>
  );
};

export default DeleteImageButton;
