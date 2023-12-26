import ReactQuill from 'react-quill';

interface QuillBasicProps {
  value: string;
  onChange: (value: string) => void;
}

const QuillBasic: React.FC<QuillBasicProps> = ({ value, onChange }) => {
  return (
    <>
      <ReactQuill theme="snow" value={value} onChange={onChange} />
    </>
  );
};

export default QuillBasic;
