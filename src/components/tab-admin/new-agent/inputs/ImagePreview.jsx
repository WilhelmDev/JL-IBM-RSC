import Image from "next/image";

const ImagePreview = ({ image, children }) => {
  return (
    <div className="image-preview">
      {!image && <p>No ha seleccionado una imagen</p>}
      {image && (
        <Image src={image.src} alt={image.alt} width={240} height={240} />
      )}
      {children}
    </div>
  );
};

export default ImagePreview;
