import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import FAQ from '@theme/FAQ';
import Features from '@theme/Features';
import Hero from '@theme/Hero';
import Resources from '@theme/Resources';
import Download from '@theme/Download';
import Blog from '@theme/Blog';
import OptinChat from '@theme/OptinChat';
import styles from './styles.module.scss';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {tagline} = siteConfig;

  return (
    <Layout description={tagline}>
      <Hero />
      <main className={styles.main}>
        <Features />
        {/* <Download /> */}
        <Blog />
        <Resources />
        <FAQ />
        {/* <OptinChat /> */}
      </main>
      <div style={{position: 'relative'}}>
        <AnchorLink className={styles.scrollup} href="#hero">
          <img
            src="https://assets.website-files.com/5a8fbae21dcd8f00012c1c4d/5a92c2098433cb00017f9f97_arrow-up-icon.svg"
            alt=""
          />
        </AnchorLink>
      </div>
    </Layout>
  );
}

export default Home;
