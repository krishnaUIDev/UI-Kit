import React from 'react';
import Headline from '@theme/Headline';
import clsx from 'clsx';

import styles from './styles.module.scss';

const data = [
  {
    id: 1,
    imgUrl:
      'https://assets.website-files.com/5a8fbc409c94b0000159b7d7/5a8fcb19d851770001cdba39_post-thumb-01.jpg',
    title: 'The small change that creates massive results',
    category: 'JS',
    content:
      'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult.',
    Date: 'July',
  },
  {
    id: 1,
    imgUrl:
      'https://assets.website-files.com/5a8fbc409c94b0000159b7d7/5a8fcb19d851770001cdba39_post-thumb-01.jpg',
    title: 'The small change that creates massive results',
    category: 'JS',
    content:
      'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult.',
    Date: 'July',
  },
  {
    id: 1,
    imgUrl:
      'https://assets.website-files.com/5a8fbc409c94b0000159b7d7/5a8fcb19d851770001cdba39_post-thumb-01.jpg',
    title: 'The small change that creates massive results',
    category: 'JS',
    content:
      'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult.',
    Date: 'July',
  },
];

const Card = ({imgUrl, title, content, category, Date}) => {
  return (
    <div className={clsx('col col--4', styles.blogCard)}>
      <a className={styles.postCard} href="#">
        <img src={imgUrl} alt="" className={styles.fullWidth} />
        <div className={styles.postCardInfo}>
          <h4>{title}</h4>
          <p className={styles.postCardSummary}>{content}</p>
          <div className={styles.postCardButton}>
            <div className={styles.category}>{category}</div>
            <p className={styles.postCardDate}>{Date}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

const Blog = () => {
  return (
    <section id="blog">
      <div className="container">
        <Headline
          category="Blog"
          title="Latest New From Our Blog!"
          offset={1}
        />
        <div className="row">
          {data && data.map((props, idx) => <Card key={idx} {...props} />)}
        </div>
      </div>
    </section>
  );
};

export default Blog;
