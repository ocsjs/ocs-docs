
// @ts-nocheck

import React from 'react';
import TOCItems from '@theme/TOCItems';
import Layout from '@theme/Layout';

export default function FeatList(): JSX.Element {
  return (
    <Layout
      description='功能列表'
    >
      {
        typeof OCS === 'undefined'
          ? (
            <span>页面加载中</span>
          )
          : (
            <>
              <main>
                <div className='container padding-top--lg padding-bottom--lg'>
                  <div className='row'>
                    <div className='col'>
                      <h1>功能列表</h1>
                      <blockquote> 此页面展示OCS所有脚本功能的列表，如果你需要的功能不存在，请联系我们。 </blockquote>
                      <div>
        当前稳定版本为: {OCS.VERSION}
                      </div>

                      <hr/>
                      <div>
                        {
                          OCS.definedScripts.map((script, i) => (
                            <div key={i}>
                              <h1 className='anchor anchorWithStickyNavbar_node_modules-@docusaurus-theme-classic-lib-next-theme-Heading-styles-module' id={script.name}>{script.name}</h1>
                              <hr/>
                              <blockquote>共有 {script.routes.length} 个脚本 , {script.panels.length} 个显示窗口 </blockquote>
                              {script.routes.map((route, i) => (
                                <div key={i}>
                                  <b
                                    className='anchor anchorWithStickyNavbar_node_modules-@docusaurus-theme-classic-lib-next-theme-Heading-styles-module'
                                    id={`${script.name + '-' + route.name}`}
                                    key={i}>
                                    {route.name}
                                  </b>
                                  <ul>
                                    <li>
                                      <div>运行页面</div>
                                      <ul>
                                        {
                                          (typeof route.url === 'object' ? route.url : [route.url]).map((item, i) => (
                                            <li key={i}><code>{item.replace(/\*/g, '*') === '*' ? '所有页面' : item}</code></li>
                                          ))
                                        }
                                      </ul>
                                    </li>
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ))
                        }
                      </div>

                    </div>
                    <div className='col--2'>
                      <div className='tableOfContents_node_modules-@docusaurus-theme-classic-lib-next-theme-TOC-styles-module thin-scrollbar theme-doc-toc-desktop'>
                        <TOCItems toc={OCS.definedScripts.map((script, i) => ([
                          {
                            value: script.name,
                            id: script.name,
                            level: 2
                          },
                          script.routes.map((route) => ({
                            value: route.name,
                            id: script.name + '-' + route.name,
                            level: 3
                          }))
                        ].flat())).flat()} />
                      </div>

                    </div>
                  </div>
                </div>
              </main>
            </>
          )
      }

    </Layout>
  );
}
