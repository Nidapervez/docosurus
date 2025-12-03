import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Physical AI and Humanoid Robotics</h1>
        <p className="hero__subtitle">Building the Future with Intelligent Machines</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Hello from Docusaurus`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}