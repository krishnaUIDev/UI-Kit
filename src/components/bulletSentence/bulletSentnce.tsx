import * as React from 'react';

export interface Props {
  children: node;
  keyword: string;
}

function BulletSentence(props: Props) {
  return (
    <p style={{fontSize: '22px', margin: '0'}}>
      <span
        style={{
          backgroundColor: '#0090d9',
          borderRadius: '6px',
          margin: '0',
          paddingLeft: '6px',
          paddingRight: '6px',
          color: 'white',
          paddingBottom: '2px',
        }}>
        {props.keyword}:
      </span>{' '}
      {props.children}
    </p>
  );
}

export default BulletSentence;
