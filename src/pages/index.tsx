import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { TutorialCard } from '../components/TutorialCards';
import DocsVideo from '../components/DocsVideo';
import GitHubInfo from '../components/GitHubInfo';
import LazySection from '../components/LazySection';

const floatButtons = [
    { label: '❓ 如何关闭/删除脚本？', href: '/docs/script#update-and-manage', top: '5%', left: '2%', rotate: -7, fontSize: 0.92, opacity: 0.85, delay: 0, duration: 5.2 },
    { label: '📥 如何下载脚本？', href: '/docs/script', top: '3%', left: '66%', rotate: 5, fontSize: 0.78, opacity: 0.7, delay: 1.3, duration: 4.8 },
    { label: '❓ 为什么脚本不显示？', href: '/docs/issues/2025', top: '72%', left: '0%', rotate: 3, fontSize: 0.84, opacity: 0.75, delay: 0.7, duration: 5.5 },
    { label: '🔄 如何更新？', href: '/docs/update', top: '68%', left: '70%', rotate: -4, fontSize: 0.72, opacity: 0.82, delay: 2.1, duration: 4.5 },
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

    // 截图放大预览
    const [previewImage, setPreviewImage] = useState<{ src: string; label: string } | null>(null);

    // ESC 关闭预览
    useEffect(() => {
        if (!previewImage) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setPreviewImage(null);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [previewImage]);

    // 直接通过 url + #锚点 访问时，水合完成后自动滚动到目标区域（hash需解码匹配中文id）
    useEffect(() => {
        const hash = window.location.hash;
        if (!hash) return;
        const id = decodeURIComponent(hash.slice(1));
        const timer = setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    const menus = [
        {
            href: '/',
            label: '首页'
        },
        {
            href: '/#tutorial',
            label: '使用教程'
        },
        {
            href: '/docs/about#%E8%81%94%E7%B3%BB%E6%96%B9%E5%BC%8F',
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

    // 视频教程：与各教程文档（app/script/mobile）中的视频一致
    const videos = [
        { key: 'app', label: '🖥️ 桌面版', src: '/videos/app_guide_video.mp4' },
        { key: 'script', label: '🌐 网页版', src: '/videos/script_install_total_guide.mp4' },
        { key: 'mobile', label: '📱 手机&平板', src: 'https://cdn.ocsjs.com/public/mobile_guide.mp4', poster: 'https://cdn.ocsjs.com/public/video_guide_mobile_poster.png' }
    ];
    // 根据分辨率自动选择默认教程：小于 1k 宽度默认显示手机&平板教程
    const [activeVideo, setActiveVideo] = useState(() =>
        typeof window !== 'undefined' && window.innerWidth < 1000 ? 'mobile' : 'app'
    );
    // 已开始播放的视频 key（用于“视频教程”角标渐隐）
    const [playingVideos, setPlayingVideos] = useState<ReadonlySet<string>>(new Set());
    const videoAreaRef = useRef<HTMLDivElement>(null);

    // 切换视频时暂停其他视频，避免后台继续播放消耗流量
    const switchVideo = (key: string) => {
        videoAreaRef.current?.querySelectorAll('video').forEach((v) => v.pause());
        setActiveVideo(key);
    };

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
                    type="button"
                    className={styles.mobileMenuButton}
                    aria-label="打开菜单"
                    onClick={() => setMobileMenuOpen((v) => !v)}
                >
                    ☰
                </button>

                {/* 手机端下拉菜单 */}
                {mobileMenuOpen && (
                    <div className={styles.mobileNav}>
                        {menus.map((m, index) => (
                            <a
                                key={m.href}
                                className={`${styles.mobileNavLink} ${index === 0 ? styles.active : ''}`}
                                href={m.href}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {m.label}
                            </a>
                        ))}
                    </div>
                )}

                <nav className={styles.nav}>
                    {
                        (menus.map((m, index) => (<a className={`${styles.navLink} ${index === 0 ? styles.active : ''}`} href={m.href}>{m.label}</a>)))
                    }
                </nav>
            </header>


            <section id="home" className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        <span> OCS 网课助手 </span>
                    </h1>
                    <div className={styles.heroSubtitle}>
                        专注于帮助大学生从网课中释放出来。让自己的时间把握在自己的手中。
                    </div>
                    <div className={styles.trustedBadge}>
                        <span>拥有千万下载量，百万用户推荐使用。</span>
                    </div>
                    <div className={styles.heroActions}>
                        <a href="/#tutorial" className={styles.primaryButton}> 📖 使用教程</a>
                        <a href="/docs/about" className={styles.secondaryButton}> 💬 简介&联系 </a>
                    </div>
                    <div className={styles.heroActions}>
                        <a href="/docs/script#quick-install" className={`${styles.secondaryButton} ${styles.smallButton}`}> 📥 快捷安装 刷课脚本 </a>
                        <a href="/docs/app#download-list" className={`${styles.secondaryButton} ${styles.smallButton}`}> 🖥️ 快捷下载 桌面软件 </a>
                    </div>
                    <div className={styles.heroActions}>
                        <a href="/docs/issues/2025" className={`${styles.secondaryButton} ${styles.smallButton}`}> ⚠️ 关于2025年多个刷课问题公示</a>

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

            {/* 使用教程：整体切换 tab + 教程卡片 + 视频（功能特性上方） */}
            <section id="tutorial" className={styles.tutorialSection} ref={videoAreaRef}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>使用教程</h2>
                </div>
                {/* 整体切换 tab：同时切换教程卡片与视频 */}
                <div className={styles.videoTabs}>
                    {videos.map((v) => (
                        <button
                            key={v.key}
                            className={`${styles.videoTabBtn} ${activeVideo === v.key ? styles.videoTabBtnActive : ''}`}
                            onClick={() => switchVideo(v.key)}
                        >
                            {v.label}
                        </button>
                    ))}
                </div>
                <div className={styles.heroPanel}>
                    <div className={styles.heroCards}>
                        <TutorialCard type={activeVideo as 'app' | 'script' | 'mobile'} />
                    </div>
                    <div className={styles.videoTutorial}>
                        {videos.map((v) => (
                            <div
                                key={v.key}
                                className={`${styles.videoWrapper} ${activeVideo === v.key ? '' : styles.videoPlayerHidden}`}
                                onPlayCapture={() =>
                                    setPlayingVideos((prev) => (prev.has(v.key) ? prev : new Set(prev).add(v.key)))
                                }
                            >
                                <span className={`${styles.videoBadge} ${playingVideos.has(v.key) ? styles.videoBadgeFading : ''}`}>视频教程</span>
                                <DocsVideo
                                    className={styles.videoPlayer}
                                    src={v.src}
                                    poster={v.poster}
                                />
                            </div>
                        ))}
                        {/* 切换到下一个教程 */}
                        <button
                            className={styles.nextVideoBtn}
                            onClick={() => {
                                const idx = videos.findIndex((v) => v.key === activeVideo);
                                switchVideo(videos[(idx + 1) % videos.length].key);
                            }}
                        >
                            下一个教程
                        </button>
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
                        <h3 className={styles.featureTitle}>自动学习 & 自动答题</h3>
                        <p className={styles.featureDesc}>
                            全自动完成视频播放、章节测验、课件阅读、弹窗答题等全类型学习任务。支持自动答题与在线搜题，高效完成作业考试，同时配备题库缓存，重复搜题无需访问云端。
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
                {/* 懒加载：滚动到区域附近时才渲染截图 */}
                <LazySection minHeight={420}>
                    <div className={styles.showcaseGrid}>

                        {
                            (showCases.map(s => (
                                <div className={styles.showcaseItem} key={s.label}>
                                    <div className={styles.browserBar}>
                                        <span className={`${styles.browserDot} ${styles.dotRed}`}></span>
                                        <span className={`${styles.browserDot} ${styles.dotYellow}`}></span>
                                        <span className={`${styles.browserDot} ${styles.dotGreen}`}></span>
                                        <span className={styles.browserTitle}>{s.label}</span>
                                    </div>
                                    <div className={styles.showcaseImage} onClick={() => setPreviewImage(s)}>
                                        <img className={styles.showCaseImg} src={s.src} alt={s.label} loading="lazy"></img>
                                        <div className={styles.zoomMask}>
                                            <span>🔍 点击放大</span>
                                        </div>
                                    </div>
                                </div>
                            )))
                        }

                    </div>
                </LazySection>
            </section>

            {/* GitHub 开源项目信息 */}
            <section id="github" className={styles.githubSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>GitHub 项目开源</h2>
                    <p className={styles.sectionSubtitle}>
                        OCS 网课助手完全开源，欢迎 Star、Fork 与贡献代码
                    </p>
                </div>
                {/* 懒加载：滚动到区域附近时才请求 GitHub 接口 */}
                <LazySection minHeight={560}>
                    <GitHubInfo />
                </LazySection>
            </section>

            {/* 截图放大预览灯箱 */}
            {previewImage && (
                <div className={styles.lightbox} onClick={() => setPreviewImage(null)}>
                    <button className={styles.lightboxClose} aria-label="关闭">✕</button>
                    <img
                        className={styles.lightboxImg}
                        src={previewImage.src}
                        alt={previewImage.label}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <div className={styles.lightboxCaption}>{previewImage.label}</div>
                </div>
            )}

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
                            <a href="/#tutorial">使用教程</a>
                            <a href="https://docs.ocsjs.com/docs/script">脚本教程</a>
                            <a href="https://docs.ocsjs.com/docs/app">软件教程</a>
                            <a href="https://docs.ocsjs.com/docs/work">自动答题教程</a>
                            <a href="/docs/about#%E8%81%94%E7%B3%BB%E6%96%B9%E5%BC%8F">联系方式</a>


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