import InputIcon from '@mui/icons-material/Input';
import LLMIcon from '@mui/icons-material/SmartToy';
import OutputIcon from '@mui/icons-material/Output';
import TextIcon from '@mui/icons-material/TextFields';
import TransformIcon from '@mui/icons-material/Transform';
import NoteIcon from '@mui/icons-material/Note';
import TriggerIcon from '@mui/icons-material/FlashOn';
import CodeIcon from '@mui/icons-material/Code';
import URLIcon from '@mui/icons-material/Link';

import { Card, CardContent, Typography } from '@mui/material';

const icons = {
  customInput: <InputIcon/>,
  llm: <LLMIcon/>,
  customOutput: <OutputIcon/>,
  text: <TextIcon/>,
  transform: <TransformIcon/>,
  note: <NoteIcon/>,
  trigger: <TriggerIcon/>,
  codeexec: <CodeIcon/>,
  urlloader: <URLIcon/>,
};

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <Card
      variant="outlined"
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      sx={{
        cursor: 'grab',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      }}
      className="group my-2 w-[81px] h-[81px] transition-all duration-200 cursor-grab hover:shadow-md hover:-translate-y-0.5 hover:border hover:border-indigo-500 hover:bg-indigo-50/50 active:cursor-grabbing active:shadow-sm active:translate-y-0 active:bg-indigo-100/50 flex-row rounded-lg"
    >
      <CardContent className="flex flex-col items-center justify-center h-full p-3 gap-2 text-black-1 group-hover:text-indigo-700">
        {icons[type]}
        <Typography variant="body2" sx={{ textAlign: 'center', fontSize: '0.75rem' }}>
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};
