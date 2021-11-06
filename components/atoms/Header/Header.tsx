import React from 'react';
import clsx from 'clsx';

export interface HeaderProps {
  label: string;
  level: number;
  as?: any;
}

export default function Header({
  label,
  level,
  as: Component = `h${level}`,
  ...props
}: HeaderProps) {
  return (
    <Component {...props}>
      <span className={clsx(`header${level}`)}>{label}</span>
    </Component>
  );
}
