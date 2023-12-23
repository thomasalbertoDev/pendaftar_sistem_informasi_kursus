import ImageUploading from 'react-images-uploading';
import { Icon } from '@iconify/react';

interface MultipleFileUploadProps {
  label: string;
  onClick: () => void;
  onChange: (imageList: any, addUpdateIndex: any) => void;
  images: any;
  maxNumber: number;
}

const MultipleFileUpload: React.FC<MultipleFileUploadProps> = ({ label, onClick, images, onChange, maxNumber }) => {
  return (
    <>
      <div className="custom-file-container" data-upload-id="mySecondImage">
        <div className="label-container">
          <label>Upload </label>
          <button type="button" className="custom-file-container__image-clear" title="Clear Image" onClick={onClick}>
            ×
          </button>
        </div>
        <label className="custom-file-container__custom-file"></label>
        <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
        <input type="hidden" name="MAX_FILE_SIZE" value="10485760" />
        <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber}>
          {({ imageList, onImageUpload, onImageRemove }) => (
            <div className="upload__image-wrapper">
              <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                Choose File...
              </button>
              &nbsp;
              <div className="grid gap-4 sm:grid-cols-3 grid-cols-1">
                {imageList.map((image, index) => (
                  <div key={index} className="custom-file-container__image-preview relative">
                    <button
                      type="button"
                      className="custom-file-container__image-clear text-primary bg-white rounded-full block w-fit p-0.5 absolute top-0 left-0 z-50"
                      title="Clear Image"
                      onClick={() => onImageRemove(index)}
                    >
                      <Icon icon="material-symbols:cancel" width={30} />
                    </button>
                    <img src={image.dataURL} alt="img" className="object-cover shadow rounded w-full !max-h-48" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </ImageUploading>
        {images.length === 0 ? <img src="/assets/images/file-preview.svg" className="max-w-md w-full m-auto" alt="" /> : ''}
      </div>
    </>
  );
};

export default MultipleFileUpload;
