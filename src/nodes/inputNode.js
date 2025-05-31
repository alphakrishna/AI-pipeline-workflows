// InputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [state, setState] = useState({
    inputName: data?.inputName || id.replace('customInput-', 'input_'),
    inputType: data?.inputType || 'Text',
  });

  return (
    <BaseNode
      id={id}
      title="Input"
      data={state}
      inputs={[]}
      outputs={[{ id: 'value' }]}
      fields={[
        { label: 'Name', key: 'inputName' },
        { label: 'Type', key: 'inputType', type: 'select', options: ['Text', 'File'] },
      ]}
      onChange={(key, value) => setState((prev) => ({ ...prev, [key]: value }))}
    />
  );
};
