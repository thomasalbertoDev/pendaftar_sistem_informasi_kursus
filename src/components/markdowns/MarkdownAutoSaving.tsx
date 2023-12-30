import { useMemo } from 'react';
import SimpleMdeReact from 'react-simplemde-editor';

interface MarkdownAutoSavingProps {
  value: string;
  onChange: (value: string) => void;
}

const MarkdownAutoSaving: React.FC<MarkdownAutoSavingProps> = ({ value, onChange }) => {
  const delay = 1000;

  const anOptions = useMemo(() => {
    return {
      autosave: {
        enabled: true,
        uniqueId: 'markdown-autosave',
        delay,
      },
    };
  }, [delay]);

  return (
    <>
      <SimpleMdeReact value={value} options={anOptions} onChange={onChange} />
    </>
  );
};

export default MarkdownAutoSaving;
