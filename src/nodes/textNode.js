// textNode.js

import { useEffect, useState } from 'react';
import { BaseNode } from './BaseNode';

const extractVariables = (text) => {
  const regex = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;
  const result = new Set();
  let match;
  while ((match = regex.exec(text)) !== null) {
    result.add(match[1]);
  }
  return Array.from(result);
};

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [inputVars, setInputVars] = useState(extractVariables(text));

  // Update input handles when text changes
  useEffect(() => {
    setInputVars(extractVariables(text));
  }, [text]);

  return (
    <BaseNode
      id={id}
      title="Text"
      data={{ text }}
      inputs={inputVars.map((v) => ({ id: v }))}
      outputs={[{ id: 'output' }]}
      fields={[
        {
          label: 'Text',
          key: 'text',
          type: 'text',
        },
      ]}
      onChange={(key, value) => {
        if (key === 'text') setText(value);
      }}
    />
  );
};
