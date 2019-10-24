import React from 'react';
import * as R from 'ramda';

export const map = (fn: ((node: React.ReactElement) => React.ReactElement), nodes: React.ReactNode[]) => (
  nodes.map(
    (node, i) => (
      React.isValidElement(node)
        ? React.cloneElement(fn(node), { key: i })
        : node
    )
  )
);

export const intersperse = (separator: React.ReactNode, nodes: React.ReactNode[]) => (
  map(i => i, R.intersperse(separator, nodes))
);
