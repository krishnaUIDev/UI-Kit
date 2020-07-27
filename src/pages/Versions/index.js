import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const Versions = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {tagline} = siteConfig;
  const imageStyles = {
    maxWidth: '60%',
    maxHeight: '385px',
    display: 'flex',
    margin: 'auto',
  };
  return (
    <Layout description={tagline}>
      <img src="../../../static/img/404.svg" style={imageStyles} />
    </Layout>
  );
};

export default Versions;
