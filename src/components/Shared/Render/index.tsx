import React from 'react';

type RenderProps = {
  children: React.ReactNode;
  when: boolean;
};

const Render: React.SFC<RenderProps> = ({
  children,
  when,
}) => (
  <React.Fragment>
    {when && children}
  </React.Fragment>
);

export default Render;
