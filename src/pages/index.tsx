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

        <h1 style={{ marginTop: '24px' }} className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div style={{ marginBottom: '1rem' }}>
          <Link
            className={clsx('button button--secondary button--lg ', styles.actions, styles['guide-btn'])}
            href='/docs/quickly-start'
          >
            <span > 📖 使用方法 </span>
          </Link>
        </div>

        <div className={styles.buttons} style={{ marginBottom: '1rem' }}>
          <Link
            style={{ fontSize: '18px' }}
            className={clsx('button button--secondary  button--sm ', styles.actions, styles['guide-btn'])}
            href='/docs/issues/2025'
            target='_blank' rel="noreferrer"
          >
            ⚠️关于2025年多个刷课问题公示
          </Link>
        </div>

        <div className={styles.buttons} style={{ marginBottom: '1rem' }}>
          <Link
            style={{ fontSize: '18px' }}
            className={clsx('button button--secondary  button--sm ', styles.actions, styles['guide-btn'])}
            href='/docs/script#第二步-安装脚本'
            target='_blank' rel="noreferrer"
          >
            📥 快捷安装 刷课脚本
          </Link>
        </div>
        <div className={styles.buttons} >
          <Link
            style={{ fontSize: '18px' }}
            className={clsx('button button--secondary  button--sm ', styles.actions, styles['guide-btn'])}
            href='/docs/app#软件下载列表'
            target='_blank' rel="noreferrer"
          >
            🖥️ 快捷安装 桌面软件
          </Link>
        </div>
      </div>

    </header >
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
