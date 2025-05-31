// URLNode.js

import { BaseNode } from './BaseNode';

export const URLNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="URL Loader"
      data={data}
      outputs={[{ id: 'trigger' }]}
      fields={[
        { label: 'URL', key: 'text' }
      ]}
      onChange={() => {}}
    />
  );
};
