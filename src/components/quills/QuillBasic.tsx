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

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'indent', 'color', 'image'],
      [{ 'code-block': true }],
      ['clean'],
    ],
  };
  const formats = ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'link', 'image', 'indent', 'code-block', 'color'];

  return (
    <div className="mb-5">
      <label htmlFor={id}>{label}</label>
      <ReactQuill theme="snow" id={id} value={value} onChange={onChange} className="mb-1" placeholder={placeholder} modules={modules} formats={formats} />

      {error && <span className="text-danger">{error}</span>}
      {isFilled && !error && <span className="text-success">{isInputFilled}</span>}
    </div>
  );
};

export default QuillBasic;
