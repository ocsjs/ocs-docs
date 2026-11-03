import React from 'react';
import Alert from '@mui/material/Alert';

/** 终端命令代码块样式 */
const cmd_style: React.CSSProperties = {
    display: 'block',
    marginTop: '6px',
    padding: '8px 10px',
    borderRadius: '6px',
    backgroundColor: '#1e1e1e',
    color: '#d4d4d4',
    fontSize: '13px',
    fontFamily: 'monospace',
    overflowX: 'auto',
    whiteSpace: 'pre'
};

/** 命令解析说明样式 */
const explain_style: React.CSSProperties = {
    marginTop: '8px',
    padding: '8px 10px',
    borderRadius: '6px',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    fontSize: '13px',
    lineHeight: 1.8
};

interface AppDownloadAlertProps {
    /** 当前下载的平台：windows / mac / linux，为空则不显示平台专属提示 */
    os?: string | null;
}

/**
 * 软件下载须知（原 app.download_alert.mdx 的 React 版本）
 * - 通用提示始终显示
 * - 平台专属提示根据 os 属性按需显示
 */
const AppDownloadAlert: React.FC<AppDownloadAlertProps> = ({ os }) => {
    return (
        <div>
            <div style={{ marginBottom: '12px' }}>
                请花几秒时间，仔细阅读以下内容，避免下载过程中出现问题。
            </div>

            {/* Windows 专属提示 */}
            {os === 'windows' && (
                <>
                    <Alert severity="warning" style={{ marginBottom: '12px' }}>
                        <b>Windows 提示：</b>如果安装时显示 <b>Windows 已保护你的电脑</b>：
                        1. 点击 <code>更多信息</code> 2. 选择 <code>仍要运行</code> 即可
                        <div style={{ marginTop: '8px' }}>
                            <img src="/img/app/microsoft_defender.png" alt="Windows Defender SmartScreen" style={{ maxWidth: '100%', borderRadius: '8px' }} />
                        </div>
                    </Alert>
                    <Alert severity="warning" style={{ marginBottom: '12px' }}>
                        <b>Edge 浏览器提示：</b>如果下载后弹出阻止框：
                        1. 鼠标放到提示上会出现三个点 2. 点击 <code>选择保留</code> 即可
                        <div style={{ display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginTop: '8px' }}>
                            <img
                                src="https://user-images.githubusercontent.com/50533276/161433046-51cd59a8-9b8c-40de-83ee-936ddbde332d.png"
                                alt="edge 下载阻止"
                                style={{ maxWidth: '100%', borderRadius: '8px' }}
                            />
                            <img
                                src="https://user-images.githubusercontent.com/50533276/161433054-25eb3847-87c5-4908-a012-14c104f4d2fa.png"
                                alt="edge 下载阻止2"
                                style={{ width: '200px', borderRadius: '8px' }}
                            />
                        </div>
                    </Alert>
                </>
            )}

            {/* Mac 专属提示 */}
            {os === 'mac' && (
                <Alert severity="warning" style={{ marginBottom: '12px' }}>
                    <b>Mac 提示：</b>如果打开时提示 <b>文件已损坏</b> 或 <b>无法打开</b>，请打开 <b>终端</b> 执行以下命令后重试：
                    <code style={cmd_style}>sudo xattr -rd com.apple.quarantine /Applications/OCS.app</code>
                    <div style={explain_style}>
                        <b>这条命令做了什么？（请放心执行）</b>
                        <br />• <code>sudo</code>：以管理员身份运行，执行时输入开机密码即可（输入时屏幕不会显示字符，属于正常现象）。
                        <br />• <code>xattr -rd com.apple.quarantine</code>：移除 macOS 给"从网上下载的 App"自动添加的<b>隔离标记</b>。软件本身并没有损坏，只是系统默认拦截了未上架商店的应用，移除标记后即可正常打开。
                        <br />• <code>/Applications/OCS.app</code>：软件安装位置，如果路径不同，把 App 图标<b>拖入终端窗口</b>即可自动填入正确路径。
                        <br />该命令不会修改软件任何文件，仅解除系统限制。
                    </div>
                    <div style={{ marginTop: '6px', fontSize: '13px' }}>
                        （也可以在 系统设置 → 隐私与安全性 中选择 "仍要打开"）
                    </div>
                    <div style={{ marginTop: '6px', fontSize: '13px' }}>
                        更多方案可参考：
                        <a href="https://www.zhihu.com/search?type=content&q=Mac%E6%96%87%E4%BB%B6%E6%8D%9F%E5%9D%8F%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88" target="_blank" rel="noreferrer">
                            知乎 - MacOS 文件损坏解决方案
                        </a>
                    </div>
                </Alert>
            )}

            {/* Ubuntu/Linux 专属提示 */}
            {os === 'linux' && (
                <Alert severity="info" style={{ marginBottom: '12px' }}>
                    <b>Ubuntu 提示：</b>通用安装流程：

                    <div style={{ marginTop: '6px' }}>• <b>deb 包</b> 下载到本地后、使用 apt 安装：</div>
                    <code style={cmd_style}>sudo apt install 下载路径/ocs-*.deb</code>
                    <div style={explain_style}>
                        <b>命令解析：</b>
                        <br />• <code>sudo</code>：以管理员身份运行，输入开机密码即可（输入时屏幕不会显示字符，属于正常现象）。
                        <br />• <code>apt install ./ocs-*.deb</code>：使用系统自带的软件包管理器安装，会<b>自动处理依赖</b>，安装完成后可在应用列表中找到并启动。
                    </div>

                </Alert>
            )}
        </div>
    );
};

export default AppDownloadAlert;
