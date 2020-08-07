import * as React from 'react';
import styles from './styles.module.css';

export interface Props {
  item: string;
  link: string;
}

export default function GlowBulletList({item, link}) {
  return (
    <div className={styles.masterDiv}>
      <span className={styles.blob} />
      <a href={link} target="_blank">
        {item}
      </a>
    </div>
  );
}
