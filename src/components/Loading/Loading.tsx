import classNames from 'classnames';
import React from 'react';

interface ILoading {
  className?: string;
}
export default function Loading({ className }: ILoading) {
  const classNameLoader = classNames({
    loader: true,
    [`${className}`]: true,
  });
  return <div className={classNameLoader}></div>;
}
