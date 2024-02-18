import React from 'react';
import ReactQuill from 'react-quill';

interface QuillBasicProps {
  id: string;
  label: string;
  value: string;
  onChange: (content: string) => void;
  error: string;
  isInputFilled: string;
  placeholder?: string;
}

const QuillBasic: React.FC<QuillBasicProps> = ({ id, label, value, onChange, error, isInputFilled, placeholder }) => {
  const isFilled = value !== '';

  return (
    <div className="mb-5">
      <label htmlFor={id}>{label}</label>
      <ReactQuill theme="snow" id={id} value={value} onChange={onChange} className="mb-1" placeholder={placeholder} />

      {error && <span className="text-danger">{error}</span>}
      {isFilled && !error && <div className="text-success" dangerouslySetInnerHTML={{ __html: isInputFilled }} />}
    </div>
  );
};

export default QuillBasic;
