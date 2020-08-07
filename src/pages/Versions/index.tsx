import * as React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

export interface Props {}

const Versions = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {tagline} = siteConfig;
  const imageStyles = {
    maxWidth: '38%',
    maxHeight: '385px',
    display: 'flex',
    margin: 'auto',
  };
  return (
    <Layout description={tagline}>
      <img src={useBaseUrl('img/404.svg')} style={imageStyles} />
    </Layout>
  );
};

export default Versions;
