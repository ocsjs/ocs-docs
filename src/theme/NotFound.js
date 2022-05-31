import React from 'react';
import Layout from '@theme/Layout';

export default function NotFoundWrapper(props) {
  return (
    <Layout >
      <main>
        <div className="container">
          <div style={{ margin: '0 auto', width: '500px', marginTop: '50px' }}>
            <h1>找不到页面 😭</h1>
            <p>404 NOT FOUND</p>
            <p>页面不存在，或者页面链接损坏</p>
            <p>可以查看右上角的其他页面，寻找你想要的答案。</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
