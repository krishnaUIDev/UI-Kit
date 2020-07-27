import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Versions = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {tagline} = siteConfig;
  return (
    <Layout description={tagline}>
      <div>Release notes goes here</div>
    </Layout>
  );
};

export default Versions;
