import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: 'No big fat daemons.',
    imageUrl: '/img/daemonless.svg',
    description: (
      <>
        No daemon, client, or server required. Podman integrates with your existing operating system, lightweight and baggage-free.
      </>
    ),
  },
  {
    title: 'No root needed.',
    imageUrl: '/img/rootless.svg',
    description: (
      <>
        You can run Podman as your own user, minimizing the risk of root privilege exploits on your host, and enabling more secure multi-user configurations.
      </>
    ),
  },
  {
    title: 'The UNIX Way.',
    imageUrl: '/img/unix.svg',
    description: (
      <>
       Podman uses the fork/exec model instead of the client/server model. This provides better ability to use core OS tools such as auditd, systemd, and cgroups.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imgUrl} alt={title}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
