import SimpleMdeReact from 'react-simplemde-editor';

interface MarkdownBasicProps {
  value: string;
  onChange: (value: string) => void;
}

const MarkdownBasic: React.FC<MarkdownBasicProps> = ({ value, onChange }) => {
  return (
    <>
      <SimpleMdeReact value={value} onChange={onChange} />
    </>
  );
};

export default MarkdownBasic;
