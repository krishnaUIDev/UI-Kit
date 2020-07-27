import React from 'react';
import clsx from 'clsx';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Image from '@theme/IdealImage';

import styles from './styles.module.scss';
import screenshot from '../../../static/img/pages/light/homepage-screenshot.png';
import {BsLaptop} from 'react-icons/bs';

function Hero() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <header id="hero" className={clsx('hero', styles.banner)}>
      <div className="container">
        <BsLaptop size="48" className={styles.logo} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={clsx('hero__subtitle', styles.subtitle)}>
          {siteConfig.tagline}
        </p>

        <div className={styles.buttons}>
          <AnchorLink
            className={clsx('button button--primary button--lg', styles.button)}
            href="#faq">
            About
          </AnchorLink>
          <AnchorLink
            className={clsx('button button--primary button--lg', styles.button)}
            href={useBaseUrl('docs/')}>
            Get Started
          </AnchorLink>
        </div>
      </div>

      <Image
        img={screenshot}
        alt="Screenshot"
        className={clsx('shadow-md', styles.image)}
      />
    </header>
  );
}

export default Hero;
