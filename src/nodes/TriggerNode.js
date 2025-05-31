// TriggerNode.js

import { BaseNode } from './BaseNode';

export const TriggerNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Trigger"
      data={data}
      inputs={[
        { id: 'llm' },
      ]}
      outputs={[
        { id: 'system' }
       ]}
      description="This is a Trigger Node"
      onChange={() => {}}
    />
  );
};
