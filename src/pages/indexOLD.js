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
  <div class="bg-yellow-400 border-t-4 border-white"><img src="http://jinbasil.com/website/imgon/toran-1.jpg" /></div>
  <div class="p-5 leading-none"><div class="font-extrabold text-transparent md:text-2xl text-2xl bg-clip-text bg-gradient-to-r from-indigo-800 to-yellow-100 md:pt-16 ps mb-index"><span class="text-sm text-gray-500 leading-none ibmps align-text-bottom font-light"><span class="font-bold">이</span>웃들과 함께 하는 <span class="font-bold">덤</span>바우</span></div>
  </div>
</div>
</div>


<div class="max-w-5xl mx-auto md:px-24 lg:px-8 lg:py-20 p-1 py-20">
  <div class="grid gap-0 row-gap-2 lg:grid-cols-2">
  
      <div class="p-6 border-2 border-green-800 h-76 gra-b-g border-opacity-50 bg-white">
      <img class="pl-2 pb-2 object-cover rounded shadow-lg sm:h-56 z-0" src="http://jinbasil.com/website/imgon/tomato.jpg" alt="" />
    </div>

  
    <div class="flex flex-col justify-center p-5 md:mt-8">
      <div class="max-w-xl mb-6 border-4 border-red-800 gra-b-r -mt-12 md:-mt-0 p-5 md:-ml-10 md:p-10  z-1">
        <div class="max-w-lg mb-6 font-bold text-2xl md:text-2xl tracking-tight text-gray-600 sm:text-4xl sm:leading-none ps">
          이덤장터 
        </div>
        <p class="text-base text-gray-700 md:text-lg ibmps" >
         덤바우와 이웃 농가들의 제철 농산물 시장입니다. 다양한 푸성귀와 과일을 보내드리겠습니다. <a href="/" class="py-0 px-4 bg-transparent border-2 border-yellow-600 text-gray-500 text-base rounded-full transition-colors duration-700 transform hover:bg-yellow-600 hover:text-gray-100 focus:border-4 focus:bg-yellow-600">바로가기</a>
        </p>
      </div>
    </div>
  </div>
</div>



<div class="max-w-5xl mx-auto lg: md:py-5 p-1 overflow-hidden justify-center">
  <div class="grid gap-0 row-gap-8 lg:grid-cols-2">
  
      <div class="p-2 border-4 rounded-full w-96 h-96 flex flex-col items-center justify-center border-yellow-600 border-opacity-100 bg-white md:ml-24">
        <div class="text-2xl md:text-2xl font-bold tracking-tight text-gray-600 sm:text-4xl sm:leading-none z-10 ps">
          생태농업의 과학, 농생태학
        </div>
        <p class="text-base text-gray-700 md:text-lg p-5 z-10 ibmps">
          덤바우 부부는 어설펐던 <code>소규모 친자연 적정재배</code> 농법을 농생태학으로 전환하는 중입니다.  <a href="blog/tags/hola" class="py-0 px-4 bg-transparent border-2 border-yellow-600 text-gray-500 text-base rounded-full transition-colors duration-700 transform hover:bg-yellow-600 hover:text-gray-100 focus:border-4 focus:border-indigo-300">바로가기</a>
        </p>
    </div>
    <div class="flex flex-col justify-center p-0 z-0">
      <div class="max-w-xl mb-6 -mt-4 md:mt-10 p-1 md:-ml-10  bg-white">
<img src="http://jinbasil.com/website/imgon/poster-agro.png" alt="poster" class="w-96 h-96 rounded-full object-cover z-0" />
</div>
    </div>
  </div>
</div>

<div class="container mx-auto px-6 p-6 bg-white dark:bg-gray-800  ibmps">

    <div class="flex flex-wrap my-0 dark:text-white mt-10">
	
        <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8 border-yellow-300  mb-10">
            <div class="flex items-center mb-6">
<img src="http://jinbasil.com/website/imgon/note.png" class="h-8" />
                <div class="ml-4 text-xl ps">
                    덤바우 이야기들
                </div>
            </div>
            <p class="leading-normal text-gray-500 dark:text-gray-200 text-md">
                Receive more sales by selling across multple sales channels instead of just having a single point of entry.
            </p>
        </div>
        <div class="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8 border-yellow-600">
            <div class="flex items-center mb-6">
<img src="http://jinbasil.com/website/imgon/sp-1.png" class="h-8" />
                <div class="ml-4 text-xl ps">
                    이덤, 함께 하는 직거래
                </div>
            </div>
            <p class="leading-normal text-gray-500 dark:text-gray-200 text-md">
                Apply beautiful overlays to every product image distributed through our platform. A visual touch.
            </p>
        </div>
        <div class="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8  border-yellow-900 mb-10 pb-10 pt-16 md:pt-8">
            <div class="flex items-center mb-6">
<img src="http://jinbasil.com/website/imgon/farm.png" class="h-8" />
                <div class="ml-4 text-xl ps">
                    텃밭, 낙원 만들기
                </div>
            </div>
            <p class="leading-normal text-gray-500 dark:text-gray-200 text-md">
                Apply filters an E.g. exclude products with low margins.
            </p>
        </div>
    </div>
</div>

<div class="md:mt-16"></div>

    </Layout>
  );
}
