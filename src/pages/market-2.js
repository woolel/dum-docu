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

<div class="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
  <div class="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
    <div class="grid grid-cols-2 gap-5">
      <img class="object-cover w-full h-56 col-span-2 rounded shadow-lg" src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
      <img class="object-cover w-full h-48 rounded shadow-lg" src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
      <img class="object-cover w-full h-48 rounded shadow-lg" src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
    </div>
    <div class="flex flex-col justify-center">
      <div class="pb-4 mb-4 border-b">
        <h6 class="mb-2 font-semibold leading-5">
          Sit error voluptatem accusantium
        </h6>
        <p class="text-sm text-gray-900">
          Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower, omar sharif old.
        </p>
      </div>
      <div class="pb-4 mb-4 border-b">
        <h6 class="mb-2 font-semibold leading-5">
          Cheese on toast airedale the big cheese
        </h6>
        <p class="text-sm text-gray-900">
          Chase ball of string eat plants, meow, and throw up because I ate plants going to catch the red dot today going to catch the red dot today. I could pee on this if I had the energy.
        </p>
      </div>
      <div>
        <h6 class="mb-2 font-semibold leading-5">
          A flower in my garden, a mystery
        </h6>
        <p class="text-sm text-gray-900">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae doloremque laudantium.
        </p>
      </div>
    </div>
  </div>
</div>	  
<div class="md:mt-16"></div>

    </Layout>
  );
}
