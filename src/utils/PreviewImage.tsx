import { useState } from 'react';

interface PreviewImageProps {
  image: string;
}

const PreviewImage = ({ image }: PreviewImageProps) => {
  const [previewImage, setPreviewImage] = useState<any>('');

  const reader = new FileReader();
  const imageBlob = new Blob([image]);
  reader.readAsDataURL(imageBlob);
  reader.onload = () => {
    setPreviewImage(reader.result);
  };

  return (
    <div className="custom-file-container__image-preview relative">
      <img src={previewImage} alt="img" />
    </div>
  );
};

export default PreviewImage;
