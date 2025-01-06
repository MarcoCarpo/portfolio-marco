import React, { PropsWithChildren } from 'react';

type Props = {
  title?: string;
};

const PageWrapper: React.FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <div className="flex flex-1 pt-10 px-4 gap-5 text-center flex-col max-w-3xl mx-auto text-gray-800">
      {title ? <h2 className="text-4xl font-extrabold">{title}</h2> : null}
      {children}
    </div>
  );
};

export default PageWrapper;
