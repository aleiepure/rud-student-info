import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="">Welcome to Students in Rud!</Heading>
        <p className=''>
          This is a website for international students in Rud, Karlstad. Here you 
          can find information about accommodation, transportation, and other useful 
          tips to make your stay here and in Sweden more comfortable.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/info/welcome">
            Start Reading
          </Link>
          <Link
            className="button button--secondary button--lg margin-left--md"
            to="/docs/news/window-change">
            Latest News
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <div className={styles.heroBanner}>
        <HomepageHeader />
      </div>
    </Layout>
  );
}
