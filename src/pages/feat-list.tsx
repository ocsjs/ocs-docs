
// @ts-nocheck

import React from 'react';
import Layout from '@theme/Layout';

export default function FeatList(): JSX.Element {
  window.location.href = '/docs/feat-list';
  return (
    <Layout
      description='功能列表'
    >
      <h1 style={{ textAlign: 'center', marginTop: '100px' }}>正在跳转至最新的功能列表... <a href='/docs/feat-list'>(点我跳转)</a></h1>

    </Layout>
  );
}
