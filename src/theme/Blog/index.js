import React from 'react';
import Headline from '@theme/Headline';
import clsx from 'clsx';

import styles from './styles.modules.scss';

const Blog = () => {
  return (
    <section id="download">
      {' '}
      <div className="container">
        <Headline
          category="Download"
          title="ARM, Linux, macOS, Windows, you name it!"
          offset={1}
        />
        test
      </div>
    </section>
  );
};

export default Blog;
