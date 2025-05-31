// Note.js

import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="Note"
      data={data}
      fields={[{key: 'text' }]}
    />
  );
};
