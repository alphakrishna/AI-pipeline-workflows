// Transform.js

import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Transform"
      data={data}
      inputs={[
        { id: 'code' },
      ]}
      outputs={[{ id: 'transformedcode' }]}
      description="This is a Transform Node"
      onChange={() => {}}
    />
  );
};
