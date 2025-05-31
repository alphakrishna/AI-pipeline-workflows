// TextNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [state, setState] = useState({
    text: data?.text || '{{input}}',
  });

  return (
    <BaseNode
      id={id}
      title="Text"
      data={state}
      inputs={[]}
      outputs={[{ id: 'output' }]}
      fields={[{ label: 'Text', key: 'text' }]}
      onChange={(key, value) => setState((prev) => ({ ...prev, [key]: value }))}
    />
  );
};
