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
	  
<div class="max-w-3xl mx-auto md:p-10 flex md:mt-10 mt-10">

<div class="grid md:grid-cols-3 gap-0">
  <div class="leading-none p-5 md:p-0"><div class="font-extrabold text-transparent md:text-3xl text-3xl bg-clip-text bg-gradient-to-r from-red-800 to-gray-400 md:pt-16 ps mb-index"><span class="text-sm text-gray-500 leading-none ibmps align-text-bottom font-light">여러분의 텃밭</span>덤바우</div><span class="text-base text-gray-500 leading-00 ibmps font-bold">나무와 풀과 <span class="text-green-800">[</span>아내와 나<span class="text-green-800">]</span></span>
  
  </div>
  <div class="col-span-2 "><img src="http://jinbasil.com/website/imgon/memil-ane2.jpeg" /></div>
  <div class="border-r-4 border-t-4 border-white"><img src="http://jinbasil.com/website/imgon/chil-1.jpg" /></div>
  <div class="bg-yellow-400 border-t-4 border-white"><img src="http://jinbasil.com/website/imgon/ch-001.jpg" /></div>
  <div class="p-5 leading-none"><div class="text-transparent md:text-sm text-base bg-clip-text bg-gradient-to-r from-indigo-800 to-yellow-100 md:pt-16 mb-index"><span class="text-sm text-gray-500 leading-none ibmps align-text-bottom font-light"><span class="font-bold">이</span>웃들과 함께 하는 <span class="font-bold">덤</span>바우</span></div>
  </div>
</div>
</div>


<div class="flex items-center justify-center mb-3 p-2">
  <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
    <a href="/" class="rounded-l inline-block px-6 py-2.5 bg-amber-600 text-white font-medium text-xs leading-tight uppercase hover:bg-amber-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">덤바우 각양각색 토마토모둠</a>
    <a href="/" class="inline-block px-6 py-2.5 bg-amber-600 text-white font-medium text-xs leading-tight uppercase hover:bg-amber-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Middle</a>
    <a href="/" class="rounded-r inline-block px-6 py-2.5 bg-amber-600 text-white font-medium text-xs leading-tight uppercase hover:bg-amber-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Right</a>
  </div>
</div>



    </Layout>
  );
}
