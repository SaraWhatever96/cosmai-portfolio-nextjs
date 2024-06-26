import * as React from 'react';

interface DynamicElementProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ElementType;
  ref?: React.Ref<HTMLElement>;
  children?: React.ReactNode;
}

export const DynamicElement: React.FC<DynamicElementProps> = ({
  tag: Tag = 'div',
  children,
  ...props
}) => {
  return <Tag {...props}>{children}</Tag>;
};
