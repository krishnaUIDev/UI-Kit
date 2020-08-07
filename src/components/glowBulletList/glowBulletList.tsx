import * as React from 'react';
import styles from './styles.module.scss';

interface Props {
  item: string;
  link: string;
}

export default function GlowBulletList(props: Props) {
  const {item, link} = props;
  return (
    <div className={styles.masterDiv}>
      <span className={styles.blob} />
      <a href={link} target="_blank">
        {item}
      </a>
    </div>
  );
}
