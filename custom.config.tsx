import React from 'react';

export type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

export const FeatureList: FeatureItem[] = [
  {
    title: '使用简单',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        拥有人性化的操作页面以及使用提示，所见即所得。
      </>
    )
  },
  {
    title: '多平台',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        可实现多个平台的脚本运行，但互不影响。
      </>
    )
  },
  {
    title: '强大技术栈',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        使用 Typescript + WebComponent 构建项目，拥有强大的交互功能，更加优美的页面。
        更容易的更新迭代以及维护。
      </>
    )
  }
];
