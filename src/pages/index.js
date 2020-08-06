import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useHistory, useLocation} from '@docusaurus/router';

import FAQ from '@theme/FAQ';
import Features from '@theme/Features';
import Hero from '@theme/Hero';
import Resources from '@theme/Resources';
import Download from '@theme/Download';
import Blog from '@theme/Blog';
import OptinChat from '@theme/OptinChat';
import styles from './styles.module.scss';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const alanKey =
  '0dce19ac79b6af76620cc281f4d8ab092e956eca572e1d8b807a3e2338fdd0dc/stage';
function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {tagline} = siteConfig;
  const history = useHistory();

  if (ExecutionEnvironment.canUseDOM) {
    useEffect(() => {
      const alanBtn = require('@alan-ai/alan-sdk-web');
      alanBtn({
        key: alanKey,
        onCommand: ({command, items}) => {
          if (command === 'newTechNews') {
            console.log(items, 'items');
          }
          if (command === 'docs') {
            history.push('docs/');
            console.log(docs, 'docs');
          }
          if (command === 'top') {
            history.push('#hero');
          }
        },
      });
    }, []);
  }
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
