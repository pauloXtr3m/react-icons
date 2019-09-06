import React from 'react';

export const withClasses = (BaseComponent: React.FC, classNames: string) => (props: any) => (
  <BaseComponent {...props} classNames={classNames} />
);
