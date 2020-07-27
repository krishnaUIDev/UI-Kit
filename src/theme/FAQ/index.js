import React from 'react';
import Link from '@docusaurus/Link';

import styles from './styles.module.scss';

const data = [
  {
    title: <>What is UI-Kit?</>,
    description: (
      <>
        UI-Kit a cloud-based job manager that offers device synchronization and
        reliable message delivery in a network of connected devices even after
        connectivity issues.
      </>
    ),
  },
  {
    title: <>What is UI-Kit?</>,
    description: (
      <>
        UI-Kit a cloud-based job manager that offers device synchronization and
        reliable message delivery in a network of connected devices even after
        connectivity issues.
      </>
    ),
  },
  {
    title: <>What is UI-Kit?</>,
    description: (
      <>
        UI-Kit a cloud-based job manager that offers device synchronization and
        reliable message delivery in a network of connected devices even after
        connectivity issues.
      </>
    ),
  },
  {
    title: <>What is UI-Kit?</>,
    description: (
      <>
        UI-Kit a cloud-based job manager that offers device synchronization and
        reliable message delivery in a network of connected devices even after
        connectivity issues.
      </>
    ),
  },
];

const tech = [
  {
    imgurl:
      'https://b7.pngbarn.com/png/78/799/react-redux-javascript-library-node-js-facebook-react-png-clip-art.png',
    title: '',
  },
  {
    imgurl:
      'https://assets.website-files.com/5a8fbae21dcd8f00012c1c4d/5e2ff7705251e1fd862537eb_aven.png',
    title: '',
  },
  {
    imgurl:
      'https://assets.website-files.com/5a8fbae21dcd8f00012c1c4d/5e2ff7705251e1fd862537eb_aven.png',
    title: '',
  },
  {
    imgurl:
      'https://assets.website-files.com/5a8fbae21dcd8f00012c1c4d/5e2ff7705251e1fd862537eb_aven.png',
    title: '',
  },
  {
    imgurl:
      'https://assets.website-files.com/5a8fbae21dcd8f00012c1c4d/5e2ff7705251e1fd862537eb_aven.png',
    title: '',
  },
];

function Question({title, description}) {
  return (
    <div className={styles.question}>
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FAQ() {
  return (
    <>
      <section id="faq" className={styles.faq}>
        <div className="container">
          <div className="row">
            <div className="col col--6">
              {data[0] && <Question {...data[0]} />}
              {data[1] && <Question {...data[1]} />}
            </div>

            <div className="col col--6">
              {data[2] && <Question {...data[2]} />}
              {data[3] && <Question {...data[3]} />}
            </div>
          </div>
        </div>
        <div className={styles.logotypes}>
          <div className={styles.logotypesHeading}>
            <h6 className={styles.logoHeader}>Our Technologies</h6>
          </div>
          {tech &&
            tech.map((a) => (
              <a className={styles.anchor}>
                <img src={a.imgurl} alt={a.title} className={styles.images} />
              </a>
            ))}
        </div>
      </section>
    </>
  );
}

export default FAQ;
