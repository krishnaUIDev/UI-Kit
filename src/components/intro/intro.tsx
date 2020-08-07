import * as React from 'react';
import classnames from 'classnames';
import styles from './styles.module.css';

export interface Props {}

export default function Intro() {
  return (
    <div>
      <h6 className={styles.namaste}>
        <span style={{verticalAlign: 'middle'}}>Hello</span> 🙏🏼
      </h6>
      <p className={styles.intoMsg} style={{paddingTop: '1rem'}}>
        <a
          href="https://github.com/krishnaUIDev"
          target="_blank"
          className={styles.twitterNamespace}>
          @Krishna
        </a>{' '}
        here. As part of my learning activity, I have documented few topics on{' '}
        <span style={{color: '#e45405'}}>Frontend</span> and planning to add few
        more contents on <span style={{color: '#e87604'}}>Backend</span>,{' '}
        <span style={{color: '#ed9002'}}>DevOps</span> and,{' '}
        <span style={{color: '#f0ab00'}}>and other concepts</span> which may
        also help you guys to hone your skills
      </p>

      <p className={classnames(styles.intoMsg, styles.paddingTop)}>
        If you find these content useful and want to appreciate my work then
        please reach me out{' '}
        <a
          href="https://github.com/krishnaUIDev"
          target="_blank"
          className={styles.twitterNamespace}>
          @Krishna
        </a>
      </p>
      <p></p>
    </div>
  );
}
