import ReactQuill from 'react-quill';

interface QuillTooltipProps {
  value: string;
  onChange: (value: string) => void;
}

const QuillTooltip: React.FC<QuillTooltipProps> = ({ value, onChange }) => {
  return (
    <>
      <ReactQuill theme="snow" value={value} onChange={onChange} />
    </>
  );
};

export default QuillTooltip;
