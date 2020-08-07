import * as React from 'react';

export interface Props {
  children: node;
  styleClass: string;
}

const CustomText = ({children, styleClass}) => (
  <p className={styleClass}>{children}</p>
);

export default CustomText;
