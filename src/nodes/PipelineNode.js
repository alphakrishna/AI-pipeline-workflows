// PipelineNode.js

import { BaseNode } from './BaseNode';

export const PipelineNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Pipeline"
      data={data}
      inputs={[
        { id: 'llm' },
      ]}
      outputs={[
        { id: 'system' }
       ]}
      description="This is a Pipeline Node"
      onChange={() => {}}
    />
  );
};
