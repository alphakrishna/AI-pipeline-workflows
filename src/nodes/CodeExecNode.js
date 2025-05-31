// CodeExecNode.js

import { BaseNode } from './BaseNode';

export const CodeExecNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="CodeExec"
      data={data}
      inputs={[
        { id: 'code' },
      ]}
      description="This can execute code"
      onChange={() => {}}
    />
  );
};
