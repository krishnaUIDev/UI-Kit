import React from 'react';

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
      </section>
    </>
  );
}

export default FAQ;
