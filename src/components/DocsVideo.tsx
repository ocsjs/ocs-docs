import React, { useEffect, useRef, useState } from 'react';

interface DocsVideoProps {
    src: string;
    poster?: string;
    /** 视频宽度，默认 100% */
    width?: string;
    /** 限制视频最大高度（竖屏视频适用） */
    maxHeight?: string;
    /** 附加到外层容器的类名 */
    className?: string;
    /** 视频上方描述文本，不传则不显示 */
    desc?: string;
}

/**
 * 文档视频组件
 * - 右上角放大按钮，点击后视频放大到整个浏览器视口（灯箱，非 F11 全屏）
 * - 放大/关闭时同步播放进度与播放状态
 * - 背景点击 / ✕ / ESC 关闭
 */
const DocsVideo: React.FC<DocsVideoProps> = ({ src, poster, width, maxHeight, className, desc }) => {
    const [expanded, setExpanded] = useState(false);
    const smallRef = useRef<HTMLVideoElement>(null);
    const bigRef = useRef<HTMLVideoElement>(null);
    const resumeRef = useRef<{ time: number; playing: boolean }>({ time: 0, playing: false });

    // 放大时同步进度
    useEffect(() => {
        if (expanded && bigRef.current && smallRef.current) {
            resumeRef.current = {
                time: smallRef.current.currentTime,
                playing: !smallRef.current.paused
            };
            smallRef.current.pause();
            bigRef.current.currentTime = resumeRef.current.time;
            if (resumeRef.current.playing) {
                bigRef.current.play().catch(() => undefined);
            }
        }
    }, [expanded]);

    // ESC 关闭
    useEffect(() => {
        if (!expanded) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setExpanded(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [expanded]);

    // 无 poster 时定位到首帧作为封面
    const showFirstFrame = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        if (poster) return;
        const video = e.currentTarget;
        if (video.currentTime === 0) {
            video.currentTime = 0.1;
        }
    };

    // 关闭时把进度同步回原视频
    const close = () => {
        if (bigRef.current && smallRef.current) {
            smallRef.current.currentTime = bigRef.current.currentTime;
            if (!bigRef.current.paused) {
                smallRef.current.play().catch(() => undefined);
            }
            bigRef.current.pause();
        }
        setExpanded(false);
    };

    return (
        <>
            <div className={`docs-video-container${className ? ` ${className}` : ''}`} style={width ? { width } : undefined}>
                {desc && <div className="docs-video-desc">{desc}</div>}
                <div className="docs-video-wrapper">
                    <video
                        ref={smallRef}
                        src={src}
                        poster={poster || undefined}
                        controls
                        preload={poster ? 'none' : 'metadata'}
                        onLoadedData={showFirstFrame}
                        style={maxHeight ? { height: maxHeight, width: '100%', objectFit: 'contain', background: '#000' } : undefined}
                    />
                    <button className="docs-video-expand" title="放大查看" aria-label="放大查看" onClick={() => setExpanded(true)}>
                        ⛶
                    </button>
                </div>
            </div>

            {expanded && (
                <div className="docs-video-lightbox" onClick={close}>
                    <button className="docs-video-close" aria-label="关闭" onClick={close}>✕</button>
                    <video
                        ref={bigRef}
                        src={src}
                        poster={poster || undefined}
                        controls
                        onLoadedData={showFirstFrame}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
};

export default DocsVideo;
