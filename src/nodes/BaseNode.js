import { useRef } from 'react';
import { Handle, Position } from 'reactflow';
import { Card, Typography, TextField } from '@mui/material';

export const BaseNode = ({
  id,
  title,
  description,
  inputs = [],
  outputs = [],
  fields = [],
  data,
  onChange,
}) => {

  const handleFieldChange = (fieldKey, value) => {
    onChange?.(fieldKey, value);
  };

  return (
    <Card className="w-[220px] min-h-[100px] p-3 relative border border-gray-300 shadow-sm" sx={{ overflow: 'visible' }}>
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{
            top: `${(index + 1) * 30}px`,
            left: '-7px', // push half of width outward (e.g., -7px if width is 14px)
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: 'white',
            border: '2px solid #6366f1',
            zIndex: 50,
          }}
        />
      ))}
      <div  className='flex flex-col m-1 rounded-md border border-indigo-6'>
      <Typography variant="subtitle1" sx={{backgroundColor: '#eef2ff', padding: '4px 8px'}}>
        {title}
      </Typography>
      </div>
      <div  className='flex flex-col m-1'>
      <Typography variant="body2" className="m-10 text-gray-700">
        {description}
      </Typography>
      </div>

      {fields.map(({ label, key, type = 'text', options }) => (
        <div key={key} className="mb-2">
          {type === 'select' ? (
            <label className="text-sm">
              {label}:{' '}
              <select
                className="w-full border rounded p-1"
                value={data[key]}
                onChange={(e) => handleFieldChange(key, e.target.value)}
              >
                {options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>
          ) : (
            <TextField
              label={label}
              multiline
              minRows={1}
              fullWidth
              value={data[key]}
              onChange={(e) => handleFieldChange(key, e.target.value)}
              size="small"
            />
          )}
        </div>
      ))}

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{
            top: `${(index + 1) * 30}px`,
            right: '-7px',
            width: 12,
            height: 12,
            borderRadius: '50%',
            background: 'white',
            border: '2px solid #6366f1',
            zIndex: 50,
          }}
        />
      ))}
    </Card>
  );
};
