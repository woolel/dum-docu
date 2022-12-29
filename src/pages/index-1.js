import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

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
	  
<nav class="bg-grey-light rounded w-full">
  <ol class="list-reset flex text-grey-dark mt-10">
    <li><a href="/website/docs/intro/" class="font-bold">농사[농법]</a></li>
    <li><span class="mx-2">></span></li>
    <li><a href="/website/blog/" class="font-bold">이야기</a></li>
    <li><span class="mx-2">></span></li>
    <li><a href="/website/market/" class="font-bold">이덤장터</a></li>
  </ol>
</nav>


<div class="max-w-screen-2xl mx-auto p-5 sm:p-10 relative">

  <div class="grid grid-cols-1 sm:grid-cols-12 gap-10">
    <div class="sm:col-span-6 lg:col-span-5">
       <a href="#"><div class="h-56 bg-cover text-center overflow-hidden mbg-1" title="토마토">
            </div></a>
       <div class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <div class="lg:pl-16">
              <a href="#" class="text-xs text-indigo-600 uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out">
                덤바우
              </a>
  <a href="#" class="text-gray-900 font-bold text-lg mb-2 transition duration-500 ease-in-out"><span class="strikethrough">덤바우 토마토모듬을 6월부터</span> 수확합니디</a>
			  <p class="text-gray-700 text-base mt-2">토종과 외래종을 아울러 모두 30여종의 다양한 토마토를 소개합니다.</p>
            </div>
       </div>
    </div>
    <div class="sm:col-span-6 lg:col-span-4">
      <div class="flex items-start mb-3 pb-3">
            <a href="#" class="inline-block mr-3"><div class="w-20 h-20 bg-cover bg-center mbg-2"></div></a>
            <div class="text-sm">
              <p class="text-gray-600 text-xs">Aug 18</p>
              <a href="#" class="text-gray-900 font-medium leading-none text-base">Cristiano Ronaldo of Juventus FC looks dejected during the...</a>
            </div>
          </div>
      <div class="flex items-start mb-3 pb-3">
              <a href="#" class="inline-block mr-3"><div class="w-20 h-20 bg-cover bg-center  mbg-3"></div></a>
              <div class="text-sm w-2/3">
                <p class="text-gray-600 text-xs">Jan 18</p>
                <a href="#" class="text-gray-900 font-medium leading-none text-base">Barcelona v Bayern Munich </a>
              </div>
            </div>
      <div class="flex items-start mb-3 pb-3">
            <a href="#" class="inline-block mr-3"><div class="w-20 h-20 bg-cover bg-center  mbg-4"></div></a>
            <div class="text-sm">
              <p class="text-gray-600 text-xs">Aug 18</p>
              <a href="#" class="text-gray-900 font-medium leading-none text-base">Cristiano Ronaldo of Juventus FC looks dejected during the...</a>
            </div>
          </div>
      <div class="flex items-start">
              <a href="#" class="inline-block mr-3"><div class="w-20 h-20 bg-cover bg-center  mbg-5"></div></a>
              <div class="text-sm w-2/3">
                <p class="text-gray-600 text-xs">July 23</p>
                <a href="#" class="text-gray-900 font-medium leading-none text-base">Barcelona v Bayern Munich - UEFA Champions League </a>
              </div>
            </div>
    </div>
   <div class="sm:col-span-12 lg:col-span-3">
       <a href="#"><div class="h-56 bg-cover text-center overflow-hidden  mbg-6" title="Woman holding a mug">
            </div></a>
       <div class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <div class="">
              <a href="#" class="text-xs text-indigo-600 uppercase font-medium flex items-center hover:text-gray-900 transition duration-500 ease-in-out">
                Fashion
              </a>
              <a href="#" class="text-gray-900 font-bold text-lg mb-2 transition duration-500 ease-in-out text-base"><span class="strikethrough1">덤바우 토마토모듬을</span> 6월부터</a>
              <p class="text-gray-700 text-xs mt-2 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
       </div>
    </div>
  </div>
</div>
<a href="https://componentity.com" target="_blank" class="block">
  <img src="http://jinbasil.com/m-bk.jpg" class="w-48 mx-auto my-5" /></a>
    </Layout>
  );
}
