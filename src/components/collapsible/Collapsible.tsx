//import React, { useState } from 'react';
import * as React from 'react';
import './Collapsible.scss';
import {CSSTransition} from 'react-transition-group';

interface Props {
  children: node;
  title: String;
}
const Collapsible = (props: Props) => {
  const {children, title} = props;
  const [collapse, setCollapse] = React.useState<boolean>(false);
  const [headerStyle, setHeaderStyle] = React.useState<string>(
    'header round-header',
  );

  return (
    <div className="disable-user-select">
      <div
        onClick={() => {
          setCollapse(!collapse),
            setHeaderStyle(collapse ? 'header round-header' : 'header');
        }}
        className={headerStyle}>
        {title != null ? title : 'Answer'}
      </div>
      <CSSTransition
        in={collapse}
        timeout={400}
        classNames="fade"
        unmountOnExit
        onEnter={() => setCollapse(true)}
        onExited={() => setCollapse(false)}>
        <div key={'answer'} className="toggle-base">
          {children}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Collapsible;
