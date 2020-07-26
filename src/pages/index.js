import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

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
    </Layout>
  );
}

export default Home;
