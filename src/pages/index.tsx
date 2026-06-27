import React, { useState } from 'react';
import styles from './index.module.css';

const floatButtons = [
    { label: '❓ 如何关闭脚本', href: '/docs/script#update-and-manage', top: '5%', left: '2%', rotate: -7, fontSize: 0.92, opacity: 0.85, delay: 0, duration: 5.2 },
    { label: '📥 如何下载脚本', href: '/docs/script', top: '3%', left: '66%', rotate: 5, fontSize: 0.78, opacity: 0.7, delay: 1.3, duration: 4.8 },
    { label: '💻 怎么下载软件', href: '/docs/app', top: '72%', left: '0%', rotate: 3, fontSize: 0.84, opacity: 0.75, delay: 0.7, duration: 5.5 },
    { label: '🔄 如何更新', href: '/docs/update', top: '68%', left: '70%', rotate: -4, fontSize: 0.72, opacity: 0.82, delay: 2.1, duration: 4.5 },
];

const showCases = [
    {
        label: '脚本首页',
        src: '/img/script/showcase/homepage.png'
    },
    {
        label: '网课学习设置界面',
        src: '/img/script/showcase/cx.png'
    },
    {
        label: '自动答题界面',
        src: '/img/script/showcase/dt.png'
    }
]

const HomePage: React.FC = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const menus = [
        {
            href: '/',
            label: '首页'
        },
        {
            href: '/docs/quickly-start',
            label: '使用教程'
        },
        {
            href: '/docs/about#%E4%BA%A4%E6%B5%81%E6%96%B9%E5%BC%8F',
            label: '联系方式'
        },
        // {
        //     href: '/blog',
        //     label: '博客'
        // },
        {
            href: 'https://github.com/ocsjs',
            label: 'Github'
        }
    ]

    return (
        <div className={styles.container}>


            {/* 导航栏 */}
            <header className={styles.header}>
                <div className={styles.logo}>
                    <span className={styles.logoIcon}>
                        <img width={'32px'} src="/logos/ocs.png" ></img>
                    </span>
                    <span className={styles.logoText}>OCS网课助手</span>
                </div>

                {/* 手机端菜单按钮 */}
                <button
                    className={styles.mobileMenuButton}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    ☰
                </button>

                {/* 手机端下拉菜单 */}
                <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ''}`}>
                    {
                        (menus.map((m, index) => (<a className={`${styles.mobileNavLink} ${index === 0 ? styles.active : ''}`} href={m.href}>{m.label}</a>)))
                    }
                </div>

                <nav className={styles.nav}>
                    {
                        (menus.map((m, index) => (<a className={`${styles.navLink} ${index === 0 ? styles.active : ''}`} href={m.href}>{m.label}</a>)))
                    }
                </nav>
            </header>


            <section id="home" className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        OCS 网课助手
                    </h1>
                    <p className={styles.heroSubtitle}>
                        专注于帮助大学生从网课中释放出来。让自己的时间把握在自己的手中。
                    </p>
                    <div className={styles.heroActions}>
                        <a href="/docs/quickly-start" className={styles.primaryButton}> 📖 使用教程</a>
                        <a href="/docs/script" className={styles.secondaryButton}> 📥 刷课脚本 </a>
                        <a href="/docs/app" className={styles.secondaryButton}> 🖥️ 桌面软件 </a>
                    </div>
                    <div className={styles.heroActions}>
                        <a href="/docs/issues/2025" className={styles.secondaryButton}> ⚠️ 关于2025年多个刷课问题公示</a>

                    </div>
                    <div className={styles.trustedBadge}>
                        <span>拥有千万下载量，百万用户推荐使用。</span>
                    </div>
                </div>
                <div className={styles.heroVisual}>
                    <div className={styles.logoWrapper}>
                        <img className={styles.heroVisualLogo} width={'50%'} src="/logos/ocs.png" alt="OCS" />
                        {floatButtons.map((btn, i) => (
                            <a
                                key={i}
                                href={btn.href}
                                className={styles.floatBtn}
                                style={{
                                    top: btn.top,
                                    left: btn.left,
                                    fontSize: `${btn.fontSize}rem`,
                                    opacity: btn.opacity,
                                    rotate: `${btn.rotate}deg`,
                                    animationDelay: `${btn.delay}s`,
                                    animationDuration: `${btn.duration}s`,
                                }}
                            >
                                {btn.label}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* 特性区域 */}
            <section id="features" className={styles.features}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>功能特性</h2>
                    <p className={styles.sectionSubtitle}>
                        {/* Everything you need to build modern, high-performance applications */}
                    </p>
                </div>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard}>
                        <div className={`${styles.featureIcon} ${styles.icon1}`}>🚀</div>
                        <h3 className={styles.featureTitle}>强大的平台兼容</h3>
                        <p className={styles.featureDesc}>
                            支持超星学习通、知到智慧树、智慧职教、职教云等多网课平台，可同时运行多平台脚本且互不干扰
                        </p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={`${styles.featureIcon} ${styles.icon2}`}>👋</div>
                        <h3 className={styles.featureTitle}>简单易上手</h3>
                        <p className={styles.featureDesc}>
                            人性化的操作页面以及使用提示，所见即所得，有新手视频帮助你快速上手，支持电脑、手机平板多平台使用
                        </p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={`${styles.featureIcon} ${styles.icon3}`}> 🖥️</div>
                        <h3 className={styles.featureTitle}>自动学习</h3>
                        <p className={styles.featureDesc}>
                            全自动完成视频播放、章节测验、课件阅读、弹窗答题等全类型学习任务。
                        </p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={`${styles.featureIcon} ${styles.icon5}`}>📝</div>
                        <h3 className={styles.featureTitle}>自动答题</h3>
                        <p className={styles.featureDesc}>
                            自动答题与在线搜题，高效完成作业考试，提升答题效率，同时有题库缓存，重复搜题无需访问云端。
                        </p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={`${styles.featureIcon} ${styles.icon6}`}>🤖</div>
                        <h3 className={styles.featureTitle}>人工智能答题</h3>
                        <p className={styles.featureDesc}>
                            配置官方题库可使用人工智能搜题、答题功能，高效答题、超强推理、实时网络热门事件捕获。
                        </p>
                    </div>
                </div>
            </section>

            {/* 图片展示区域 */}
            <section id="showcase" className={styles.showcase}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>示例截图</h2>
                    <p className={styles.sectionSubtitle}>
                        {/* Explore how our tools power the world's most innovative applications */}
                    </p>
                </div>
                <div className={styles.showcaseGrid}>

                    {
                        (showCases.map(s => (<>
                            <div className={styles.showcaseItem}>
                                <div className={styles.showcaseImage}>
                                    <img className={styles.showCaseImg} src={s.src}></img>
                                </div>
                                <div className={styles.showcaseOverlay}>
                                    <h3>{s.label}</h3>
                                    {/* <p>desc</p> */}
                                </div>
                            </div>

                        </>)))
                    }

                </div>
            </section>

            {/* 页脚 */}
            <footer id="contact" className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerLogo}>
                        <span className={styles.logoIcon}>
                            <img width={'32px'} src="/logos/ocs.png" ></img>
                        </span>
                        <span className={styles.footerLogoText}>OCS网课助手</span>
                    </div>
                    <div className={styles.footerLinks}>
                        <div className={styles.linkColumn}>
                            <h4>快捷访问</h4>
                            <a href="/docs/quickly-start">使用教程</a>
                            <a href="https://docs.ocsjs.com/docs/script">脚本教程</a>
                            <a href="https://docs.ocsjs.com/docs/app">软件教程</a>
                            <a href="https://docs.ocsjs.com/docs/work">自动答题教程</a>
                            <a href="/docs/about#%E4%BA%A4%E6%B5%81%E6%96%B9%E5%BC%8F">联系方式</a>


                        </div>
                        <div className={styles.linkColumn}>
                            <h4>社区/资源</h4>
                            <a href="https://bbs.tampermonkey.net.cn/">油猴中文网</a>
                            <a href="https://tampermonkey.net/"> Tampermonkey 篡改猴官网</a>
                            <a href="https://scriptcat.org/">脚本猫官网</a>
                        </div>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>© Copyright © 2020 - 2026 OCS All rights reserved.</p>
                    <div className={styles.socialLinks}>
                        <a target="_blank" href="https://github.com/ocsjs">GitHub</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;