import ImageUploading from 'react-images-uploading';

interface SingleFileUploadProps {
  label: string;
  onClick: () => void;
  onChange: (imageList: any, addUpdateIndex: any) => void;
  images: any;
  maxNumber: number;
}

const SingleFileUpload: React.FC<SingleFileUploadProps> = ({ label, onClick, images, onChange, maxNumber }) => {
  return (
    <>
      <div className="custom-file-container" data-upload-id="myFirstImage">
        <div className="label-container">
          <label>{label}</label>
          <button type="button" className="custom-file-container__image-clear" title="Clear Image" onClick={onClick}>
            ×
          </button>
        </div>
        <label className="custom-file-container__custom-file"></label>
        <input type="file" className="custom-file-container__custom-file__custom-file-input" accept="image/*" />
        <input type="hidden" name={label} value={images} />
        <ImageUploading value={images} onChange={onChange} maxNumber={maxNumber}>
          {({ imageList, onImageUpload }) => (
            <div className="upload__image-wrapper">
              <button className="custom-file-container__custom-file__custom-file-control" onClick={onImageUpload}>
                Choose File...
              </button>
              &nbsp;
              {imageList.map((image, index) => (
                <div key={index} className="custom-file-container__image-preview relative">
                  <img src={image.dataURL} alt="img" className="m-auto" />
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        {images.length === 0 ? <img src="/assets/images/file-preview.svg" className="max-w-md w-full m-auto" alt="" /> : ''}
      </div>
    </>
  );
};

export default SingleFileUpload;
