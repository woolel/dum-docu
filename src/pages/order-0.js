import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

  
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
	
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="이웃들과 함께 하는 덤바우">
	  






<div class="md:mt-16"></div>

    </Layout>
  );
}
