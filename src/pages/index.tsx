import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import { ScriptShowCase } from '@site/src/components/ScriptShowCase';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.homeHeader)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {
            (siteConfig.customFields.actions as any).map((action, index) => (
              <Link
                key={index}
                className={clsx('button button--secondary button--lg', styles.actions)}
                href={action.href}
                to={action.to}
              >
                <span>{action.label}</span>
              </Link>
            ))
          }

        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <ScriptShowCase />
      </main>
    </Layout>
  );
}
