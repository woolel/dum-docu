import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';



export default function Market() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="이덤장터"
      description="이웃들과 함께 하는 덤바우">
	  
	  <nav class="bg-grey-light rounded font-sans w-full">
  <ol class="list-reset flex text-grey-dark mt-10">
    <li><a href="/website/docs/intro/" class="font-bold">농사[농법]</a></li>
    <li><span class="mx-2">></span></li>
    <li><a href="/website/blog/" class="font-bold">이야기</a></li>
    <li><span class="mx-2">></span></li>
    <li>이덤장터</li>
  </ol>
</nav>


  <div class="relative   juice3">
    <div class="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-12">
      <div class="bg-cover bg-center w-full col-span-5 juice2"></div>
      
      <div class="col-span-7 p-10">
        <a href="#" class="text-red-600 hover:text-gray-700 transition duration-500 ease-in-out text-sm ibmps">양파</a>
        <h1 href="#" class="text-gray-500 font-bold text-2xl ps">우리 마을 차돌멩이 양파</h1>
        <p class="text-sm text-gray-700 my-4">우리 마을은 <span class="highlight1">해발400m</span> 산골입니다. 양파농민은 준고량지인데다가 풍토 덕에 양파가 좋다지만, <span class="highlight1">재배방식</span>이 훌륭해서 <span class="highlight1">차돌멩이 양파</span>를 보내드릴 수 있다고 덤바우 부부는 믿습니다.</p>
        <div class="flex items-center">
      
      <div class="text-sm">
        <a href="/website/" class="mt-20 bg-orange-200 font-semibold px-8 py-2 rounded text-black hover:bg-gray-300">주문하기</a>
      </div>
    </div>
      </div>
    </div>
  </div>

<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
    <h2 class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-500 sm:text-4xl sm:leading-none md:mb-6 group">
      <span class="inline-block mb-1 sm:mb-4 ps text-2xl">
        이웃 농산물을 소개합니다
      </span>
      <div class="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100"></div>
    </h2>
    <p class="text-gray-700 lg:text-sm lg:max-w-md">
      <span class="highlight1">이덤</span> 직거래 장터는 <span class="highlight1">비용없이</span> 이웃들의 농산물 거래를 중개, 관리하는 <span class="highlight1">플랫폼</span>입니다. 덤바우 부부가 중간에서 거들고 있어요.
    </p>
  </div>
  <div class="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
    <a href="/" aria-label="View Item">
      <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="http://jinbasil.com/img/bok-01.jpg" alt="복숭아" />
        <div class="absolute inset-x-0 bottom-0 px-6 py-2 bg-black bg-opacity-75">
          <p class="text-sm font-medium tracking-wide text-white">
            홍자매 복숭아 <span class="inline-flex items-center justify-center text-xs leading-none text-white bg-red-800 rounded align-text-top">판매중</span>
          </p>
        </div>
      </div>
    </a>
    <a href="/" aria-label="View Item">
      <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="http://jinbasil.com/img/ja-01.jpg" alt="자두" />
        <div class="absolute inset-x-0 bottom-0 px-6 py-2 bg-black bg-opacity-75">
          <p class="text-sm font-medium tracking-wide text-white">
            자두
          </p>
        </div>
      </div>
    </a>
    <a href="/" aria-label="View Item">
      <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="http://jinbasil.com/img/po-01.jpg" alt="샤인 머스켓" />
        <div class="absolute inset-x-0 bottom-0 px-6 py-2 bg-black bg-opacity-75">
          <p class="text-sm font-medium tracking-wide text-white">
            와농 샤인머스켓 
          </p>
        </div>
      </div>
    </a>
    <a href="/" aria-label="View Item">
      <div class="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img class="object-cover w-full h-56 md:h-64 xl:h-80" src="http://jinbasil.com/img/go-01.jpg" alt="고구마" />
        <div class="absolute inset-x-0 bottom-0 px-6 py-2 bg-black bg-opacity-75">
          <p class="text-sm font-medium tracking-wide text-white">
            우직한 황소 고구마
          </p>
        </div>
      </div>
    </a>
  </div>
  <div class="text-center">
    <a href="/" aria-label="" class="inline-flex items-center transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
      수확일정 보기
      <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
      </svg>
    </a>
  </div>
</div>

    </Layout>
  );
}
