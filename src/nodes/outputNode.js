// OutputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [state, setState] = useState({
    outputName: data?.outputName || id.replace('customOutput-', 'output_'),
    outputType: data?.outputType || 'Text',
  });

  return (
    <BaseNode
      id={id}
      title="Output"
      data={state}
      inputs={[{ id: 'value' }]}
      outputs={[]}
      fields={[
        { label: 'Name', key: 'outputName' },
        { label: 'Type', key: 'outputType', type: 'select', options: ['Text', 'Image'] },
      ]}
      onChange={(key, value) => setState((prev) => ({ ...prev, [key]: value }))}
    />
  );
};
