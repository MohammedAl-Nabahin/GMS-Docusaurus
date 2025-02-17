import type {ReactNode} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';


import styles from './index.module.css';


export default function Home(): ReactNode {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="GMS" description="Comprehensive API documentation for the Gym Management System">
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <Heading as="h1" className="hero__title" style={{marginLeft: "20px"}}>
        <h1 className={styles.title}>Gym Management System  </h1>
      </Heading>
    </header>
      <main className={styles.container}>
      <div className={styles.grid} style={{margin: "50px"}}>
        <a href="/docs/auth" className={styles.card}>
          <h2>Authentication</h2>
          <p>Login, password reset, and authentication management.</p>
        </a>
        <a href="/docs/trainee" className={styles.card}>
          <h2>Trainees</h2>
          <p>Manage gym members, their programs, and attendance.</p>
        </a>
        <a href="/docs/payments" className={styles.card}>
          <h2>Payments</h2>
          <p>Handle membership fees and transactions.</p>
        </a>
        <a href="/docs/equipment" className={styles.card}>
          <h2>Equipment</h2>
          <p>Track and manage gym equipment.</p>
        </a>

        <div>More Soon......</div>
      </div>

      <div className={styles.buttonContainer}>
        <a href="/docs/intro" className={styles.button}>Get Started</a>
      </div>
    </main>
  </Layout>
  );
}
