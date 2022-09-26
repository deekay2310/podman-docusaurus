import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Manage pods, containers, and container images.</h1>
        {/* <p className="hero__subtitle">Welcome to the website for the Pod Manager tool <a href="https://github.com/containers/podman">podman</a>. This site features announcements and news around Podman, and occasionally other <a href="https://github.com/containers/">container tooling</a> news.</p> */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg me-1"
            to="/docs/getting-started/installation">
            Install Now!
          </Link>
          <Link
            className="button button--secondary button--lg me-1"
            to="https://podman-desktop.io">
            Podman Desktop
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Podman`}
      description="Manage pods, containers, and container images.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
