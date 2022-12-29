/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
//  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
  'intro',
    {
      type: 'category',
      label: '"농생태학,지속가능한..."(책)',
	  link: {
        type: 'doc', id: 'agroecology/toc',
      },
      items: [
	  'agroecology/chapter-0',
	  'agroecology/chapter-1',
	  'agroecology/chapter-2',
	  'agroecology/chapter-2-1',
	  'agroecology/chapter-2-2',
	  'agroecology/chapter-3',
	  'agroecology/chapter-4',
	  'agroecology/chapter-4-1',
	  'agroecology/chapter-4-2',
	  'agroecology/chapter-5',
	  'agroecology/chapter-6',
	  ],
    },
    {
      type: 'category',
      label: '농생태의 이해',
	  link: {
        type: 'doc', id: 'agroguide/0-guide',
      },
      items: [
	  'agroguide/1-guide', 
	  'agroguide/2-guide',
	  'agroguide/3-guide',
	  'agroguide/4-guide',
	  'agroguide/5-guide',
	  'agroguide/6-guide',
	  'agroguide/7-guide',
	  'agroguide/8-guide',
	  'agroguide/9-guide',
	  ],
    },
  ],
 dumbau: [
    'dumto',
        {
      type: 'autogenerated',
      dirName: 'dumbau',
    },
  ], 
 edom: [
    'edomto',
        {
      type: 'autogenerated',
      dirName: 'edom',
    },
  ], 

};

module.exports = sidebars;