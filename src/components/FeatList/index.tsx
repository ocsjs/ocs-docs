
import React from 'react';
import TOCItems from '@theme/TOCItems';

export default function FeatList(): JSX.Element {
  // @ts-ignore
  const OCS = window.OCS || {};
  const scripts = OCS.definedScripts || [];
  const VERSION = OCS.VERSION || '0.0.0';

  const toc = scripts.map((script, i) => ([
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
  ].flat())).flat();

  return (
    <>

      <div>
        当前稳定版本为: {VERSION}
      </div>

      <ul>
        <TOCItems toc={toc} />
      </ul>

      <hr/>
      <div>
        {
          scripts.map((script, i) => (
            <div key={i}>
              <h2 id={script.name}>{script.name}</h2>
              <blockquote>共有 {script.routes.length} 个脚本 , {script.panels.length} 个显示窗口 </blockquote>
              {script.routes.map((route, i) => (
                <div key={i}>
                  <div id={`${script.name + '-' + route.name}`} key={i}>{route.name}</div>
                  <ul>
                    <li>
                      <div>运行页面</div>
                      <ul>
                        {
                          (typeof route.url === 'object' ? route.url : [route.url]).map((item, i) => (
                            <li key={i}><code>{item}</code></li>
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

    </>
  );
}
