// BaseNode.js

import { useRef } from 'react';
import { Handle, Position } from 'reactflow';

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
  const textareaRef = useRef(null);
  const handleFieldChange = (fieldKey, value) => {
    onChange?.(fieldKey, value);
    if (fieldKey === 'text') {
      const el = textareaRef.current;
      if (el) {
        el.style.height = 'auto'; // Reset height
        el.style.height = el.scrollHeight + 'px'; // Set to scroll height
      }
    }
  };

  return (
    <div style={{ width: 220, minHeight: 100, border: '1px solid black', padding: 8 }}>
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: `${(index + 1) * 30}px` }}
        />
      ))}

      <div style={{ marginBottom: 8 }}>
        <strong>{title}</strong>
      </div>
      <div style={{ marginBottom: 2 }}>
        {description}
      </div>
      {fields.map(({ label, key, type = 'text', options }) => (
        <div key={key} style={{ marginBottom: 4 }}>
          <label>
            {label}:{' '}
            {type === 'select' ? (
              <select
                value={data[key]}
                onChange={(e) => handleFieldChange(key, e.target.value)}
              >
                {options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <textarea
                ref={textareaRef}
                type={type}
                value={data[key]}
                style={{
                  maxWidth: '200px',
                  width: '100%',
                  overflow: 'hidden',
                  resize: 'none',
                  overflowWrap: 'break-word'
                }}
                onChange={(e) => handleFieldChange(key, e.target.value)}
              />
            )}
          </label>
        </div>
      ))}

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: `${(index + 1) * 30}px` }}
        />
      ))}
    </div>
  );
};
