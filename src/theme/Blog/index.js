import React, {useEffect, useState} from 'react';
import Headline from '@theme/Headline';
import clsx from 'clsx';

import styles from './styles.module.scss';

const Card = ({thumbnail, title, description, categories, pubDate, link}) => {
  return (
    <div className={clsx('col col--4', styles.blogCard)}>
      <a className={styles.postCard} href={link} blank="_target">
        <img src={thumbnail} alt="" className={styles.fullWidth} />
        <div className={styles.postCardInfo}>
          <h4>{title}</h4>
          <p
            className={styles.postCardSummary}
            dangerouslySetInnerHTML={{__html: `${description}`}}
          />
          <div className={styles.postCardButton}>
            <div className={styles.category}>{categories}</div>
            <p className={styles.postCardDate}>{pubDate}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@KrishnaUIDev',
    )
      .then((res) => res.json())
      .then((data) => {
        const res = data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter((item) => item.categories.length > 0); // That's the main trick* !
        setPosts(posts);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(posts, '--');
  return (
    <section id="blog">
      <div className="container">
        <Headline
          category="Blog"
          title="Latest New From Our Blog!"
          offset={1}
        />
        <div className="row">
          {posts &&
            posts.length > 0 &&
            posts.length <= 3 &&
            posts.map((props, idx) => <Card key={idx} {...props} />)}
        </div>
      </div>
    </section>
  );
};

export default Blog;
