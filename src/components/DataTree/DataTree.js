import React from 'react';
import JSONTree from 'react-json-tree';

import defaultData from './data.json';

export function DataTree({ data = defaultData }) {
  return <JSONTree data={data} />;
}
