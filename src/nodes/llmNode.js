// LLMNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      data={data}
      inputs={[
        { id: 'system' },
        { id: 'prompt' },
      ]}
      outputs={[{ id: 'response' }]}
      description="This is a LLM"
      onChange={() => {}}
    />
  );
};
