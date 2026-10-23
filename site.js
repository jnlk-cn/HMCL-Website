/* English HTML is the fallback; translations replace text nodes, never HTML. */
(() => {
  'use strict';

  const chinese = {
    'Skip to content': '跳转到正文',
    'HMCL home': 'HMCL 首页',
    'Main navigation': '主导航',
    'Page language': '页面语言',
    'Accounts': '账户',
    'Downloads': '下载',
    'Privacy': '隐私',
    'About': '项目',
    'DESKTOP LAUNCHER / XDRi.Club': '桌面启动器 / XDRi.Club',
    'Desktop launcher.': '桌面启动器。',
    'An independently maintained distribution of the open-source HMCL launcher, with Microsoft account sign-in and Minecraft: Java Edition ownership verification.': '基于开源 HMCL 项目独立维护的发行版，支持微软账户登录和 Minecraft Java 版游戏资格验证。',
    'Download for Windows': '下载 Windows 版',
    'All downloads': '全部下载',
    'HMCL Desktop 3.17.0.362 · Microsoft accounts · Open source': 'HMCL Desktop 3.17.0.362 · 微软账户登录 · 开源发布',
    'NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.': '本产品并非 Minecraft 官方产品，未获得 Mojang 或 Microsoft 的批准，也与其不存在关联。',
    'LAUNCHER / OVERVIEW': '启动器 / 总览',
    'THE LAUNCHER': '启动器界面',
    'The standard HMCL interface, captured from this distribution with an empty local profile.': '此发行版在空白本地配置下的实际截图，保留 HMCL 原有界面样式。',
    'Open the full-size launcher overview': '查看启动器主页原图',
    'HMCL 3.17.0.362 home screen with an empty profile and the standard launcher interface.': 'HMCL 3.17.0.362 主页：使用空白配置，显示启动器原有界面。',
    '01 / ACCOUNTS': '01 / 账户',
    'Microsoft sign-in.': '微软账户登录。',
    'Verified game ownership.': '验证正版游戏资格。',
    'AUTHENTICATION': '身份认证',
    'Your Microsoft account': '你的微软账户',
    'Complete sign-in directly on Microsoft’s pages. Account authentication uses official Microsoft, Xbox and Minecraft services.': '直接在微软页面完成登录。账户认证使用 Microsoft、Xbox 和 Minecraft 的官方服务。',
    'OWNERSHIP': '游戏资格',
    'Minecraft: Java Edition': 'Minecraft：Java 版',
    'Every launch requires a current game entitlement and a matching Minecraft profile. Missing access, refused verification or a network failure stops the launch.': '每次启动均需验证当前有效的游戏资格和匹配的 Minecraft 角色。缺少资格、验证被拒绝或网络故障时，都会停止启动。',
    'MICROSOFT / ACCOUNTS': '微软 / 账户',
    'ACCOUNT MANAGEMENT': '账户管理',
    'The Microsoft account page, shown with an empty local profile.': '微软账户管理页面，截图使用空白本地配置。',
    'Open the full-size Microsoft account page': '查看微软账户页面原图',
    'The HMCL account page showing Microsoft as the only sign-in method.': 'HMCL 账户页面，仅提供微软账户登录。',
    'MICROSOFT / SIGN IN': '微软 / 登录',
    'SIGN IN': '登录入口',
    'Microsoft sign-in starts from the launcher. Enter credentials only on Microsoft’s pages.': '从启动器发起微软登录，账号凭据仅在微软页面填写。',
    'Open the full-size Microsoft sign-in dialog': '查看微软登录窗口原图',
    'The HMCL Microsoft sign-in dialog, before account sign-in is started.': 'HMCL 微软登录对话框，尚未开始账户登录。',
    'Add your Microsoft account': '添加微软账户',
    "Complete sign-in and consent directly on Microsoft's pages.": '直接在微软页面完成登录和授权。',
    'Verify your game access': '验证游戏资格',
    'HMCL checks your current Java Edition entitlement and matching Minecraft profile.': 'HMCL 检查当前有效的 Java 版游戏资格和匹配的 Minecraft 角色资料。',
    'Start Minecraft': '启动 Minecraft',
    'The game process starts only after the required checks pass.': '所需验证全部通过后，才会启动游戏进程。',
    'MICROSOFT / VERIFICATION': '微软 / 资格验证',
    'HOW ACCESS WORKS': '认证流程',
    'Fresh authentication and ownership checks are required before every game launch.': '每次启动游戏前，都需要重新进行在线认证和游戏资格检查。',
    'Microsoft sign-in, Java Edition entitlement and matching profile verification, then Minecraft launch. A failed required check stops the launch.': '微软账户登录、验证 Java 版游戏资格及匹配角色，然后启动 Minecraft。任何必要验证失败时都会停止启动。',
    'Service availability': '服务可用性',
    "Microsoft and Mojang control API access for each application. A Microsoft consent page or device code does not establish Minecraft Services access. If the application's access is unavailable or denied, the game cannot launch through this distribution.": '各应用的 API 访问权限由 Microsoft 和 Mojang 决定。显示微软授权页面或设备代码，不代表已取得 Minecraft Services 访问权限。此应用的访问不可用或被拒绝时，无法通过本发行版启动游戏。',
    '02 / DOWNLOADS': '02 / 下载',
    'Download HMCL.': '下载 HMCL。',
    'Choose your package.': '选择适合的文件。',
    '· Published October 23, 2026': '· 发布于 2026 年 10 月 23 日',
    'Release notes and all 9 assets ↗': '发行说明及全部 9 个附件 ↗',
    'Downloads are public and do not require a GitHub account. Matching source, license notices and checksums are provided with each release.': '下载公开提供，无需 GitHub 账号。每份发行文件均附对应源码、许可证声明和校验值。',
    'Release downloads': '发行文件下载',
    'Windows portable': 'Windows 便携包',
    'The launcher and JavaFX dependencies. Requires an installed Java runtime.': '包含启动器与 JavaFX 依赖，需要电脑已安装兼容的 Java 运行环境。',
    'Download ZIP': '下载 ZIP',
    'Windows executable': 'Windows 可执行文件',
    'The standalone Windows launcher executable.': '单独的 Windows 启动器可执行文件。',
    'Download EXE': '下载 EXE',
    'Java archive': 'Java 程序包',
    'Run with a compatible Java runtime on your system.': '使用系统中兼容的 Java 运行环境启动。',
    'Download JAR': '下载 JAR',
    'Shell launcher': 'Shell 启动文件',
    'A shell entry point for systems with a compatible Java runtime.': '适用于已安装兼容 Java 运行环境的系统。',
    'Download SH': '下载 SH',
    'Corresponding source': '对应源码',
    'The source archive matching this launcher release.': '与当前启动器发行文件对应的源码归档。',
    'Download source': '下载源码',
    'SHA-256 checksums': 'SHA-256 校验值',
    "Compare a downloaded file's hash before running it.": '运行前，核对下载文件的哈希值。',
    'Download checksums': '下载校验文件',
    '711 bytes · Text': '711 字节 · 文本',
    'Official game sources': '官方游戏来源',
    "Minecraft manifests, game binaries, asset indexes and assets use Mojang's official HTTPS sources. There is no community mirror fallback for this content.": 'Minecraft 版本清单、游戏文件、资源索引及资源使用 Mojang 官方 HTTPS 来源，不回退到社区游戏镜像。',
    'Third-party components': '第三方组件',
    'Loader and addon metadata can use BMCLAPI or MCIM alongside the original providers. Download mirrors are separate from account authentication.': '加载器及附加内容的元数据可使用 BMCLAPI、MCIM 或原始提供方。下载镜像与账户认证相互独立。',
    'Launcher-only packages': '仅包含启动器',
    'Releases include the launcher, its dependencies, corresponding source and SHA-256 checksums. No Minecraft game installation or personal account data is bundled.': '发行文件提供启动器、依赖、对应源码和 SHA-256 校验值，不附带 Minecraft 游戏安装内容或个人账号数据。',
    'Manual launcher updates': '手动更新启动器',
    'Launcher self-updates are disabled. Obtain a new launcher release manually. Game installation and game updates remain available when you request them.': '启动器自动更新已禁用，请手动获取新版发行文件。仍可按需安装和更新游戏。',
    'Source and release artifacts are publicly available under GPLv3 or later, with the upstream additional terms.': '源码和发行文件公开提供，采用 GPLv3 或后续版本，并保留上游附加条款。',
    '03 / PRIVACY': '03 / 隐私',
    'Local account storage.': '账户数据留在本地。',
    'No usage telemetry.': '不收集使用遥测。',
    'Launcher usage telemetry, public-IP geolocation and launcher self-updates are disabled. Account sessions remain in local HMCL files; protect those files as private credentials.': '启动器使用遥测、公网 IP 地理位置查询和启动器自动更新已禁用。账户会话保存在本地 HMCL 文件中，请妥善保护这些包含私密凭据的文件。',
    'Microsoft, Xbox and Minecraft account requests go to their official endpoints. Authentication credentials are not sent to download mirrors.': 'Microsoft、Xbox 和 Minecraft 账户请求发送至各自的官方端点，认证凭据不会发送到下载镜像。',
    'Launch authorization is short-lived, single-use and kept in memory. Reusable game launch scripts containing account credentials are not exported.': '启动授权仅在内存中短期保存且只能使用一次，不导出包含账户凭据、可重复使用的游戏启动脚本。',
    'This website uses no analytics, cookies or local storage. Your language choice is kept in the page URL. GitHub Pages handles hosting requests under': '本网站不使用分析追踪、Cookie 或本地存储。语言选择保存在当前页面网址中。GitHub Pages 按照以下政策处理托管请求：',
    "GitHub's privacy statement": 'GitHub 隐私声明',
    '04 / PROJECT': '04 / 项目',
    'Maintained independently.': '独立维护。',
    'Built on HMCL.': '基于开源 HMCL。',
    'This distribution is maintained by': '本发行版由',
    ', through the': '独立维护，项目通过',
    'jnlk-cn GitHub account': 'jnlk-cn GitHub 账号',
    '. It is derived from': '发布。基于',
    'the upstream HMCL project': '上游 HMCL 项目',
    'and retains its copyright notices and GPLv3-or-later license with upstream additional terms.': '构建，保留原版权声明、GPLv3 或后续版本的许可证及上游附加条款。',
    'HMCL Desktop is maintained independently of the upstream HMCL team, Mojang Studios and Microsoft. Its software name distinguishes this modified distribution; the interface layout and recorded numeric version are retained.': 'HMCL Desktop 独立于上游 HMCL 团队、Mojang Studios 和 Microsoft 维护。软件名称用于区分修改发行版，保留原界面布局和记录的数字版本号。',
    'Project contact:': '项目联系邮箱：',
    'Source repository ↗': '源码仓库 ↗',
    'Release artifacts ↗': '发行文件 ↗',
    'Website source ↗': '网站源码 ↗',
    'License and additional terms ↗': '许可证及附加条款 ↗',
    'HMCL / Maintained by XDRi.Club': 'HMCL / 由 XDRi.Club 独立维护',
    'Not an official Minecraft product.': '非 Minecraft 官方产品。',
    'An independently maintained HMCL desktop launcher distribution by XDRi.Club. Microsoft account sign-in, Java Edition ownership verification, official game downloads and local account storage.': '由 XDRi.Club 独立维护的 HMCL 桌面启动器发行版，支持微软账户登录、Java 版游戏资格验证、官方游戏下载和本地账户存储。'
  };

  const root = document.documentElement;
  const languageButtons = [...document.querySelectorAll('[data-language]')];
  const textEntries = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.parentElement.closest('script, style, noscript, [data-language]')) continue;
    const key = node.nodeValue.trim();
    if (Object.hasOwn(chinese, key)) textEntries.push({ node, english: node.nodeValue, key });
  }
  const attributeEntries = [];
  for (const element of document.querySelectorAll('[alt], [aria-label], meta[name="description"]')) {
    for (const attribute of ['alt', 'aria-label', 'content']) {
      const english = element.getAttribute(attribute);
      if (english && Object.hasOwn(chinese, english)) attributeEntries.push({ element, attribute, english });
    }
  }
  let currentLanguage = 'en';
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const localeFromURL = () => {
    const requested = new URL(location.href).searchParams.get('lang');
    if (requested === 'en') return 'en';
    if (requested === 'zh-CN' || requested === 'zh') return 'zh-CN';
    return (navigator.languages || [navigator.language]).some(language => language.toLowerCase().startsWith('zh')) ? 'zh-CN' : 'en';
  };

  function setLanguage(language, updateURL = false, animate = false) {
    const headerHeight = document.querySelector('.site-header').offsetHeight;
    const reference = [...document.querySelectorAll('main section')].find(section => section.getBoundingClientRect().bottom > headerHeight + 64);
    const previousTop = reference?.getBoundingClientRect().top;
    for (const { node, english, key } of textEntries) {
      node.nodeValue = language === 'en' ? english : english.replace(key, chinese[key]);
    }
    for (const { element, attribute, english } of attributeEntries) {
      element.setAttribute(attribute, language === 'en' ? english : chinese[english]);
    }
    root.lang = language;
    currentLanguage = language;
    const home = new URL('.', location.href);
    home.searchParams.set('lang', language);
    document.querySelector('.wordmark').href = home;
    for (const button of languageButtons) button.setAttribute('aria-pressed', String(button.dataset.language === language));
    const flow = document.querySelector('[data-image-slot="account-flow"]');
    const suffix = language === 'zh-CN' ? '-zh-CN' : '';
    flow.querySelector('source').srcset = `assets/account-flow-mobile${suffix}.svg`;
    flow.querySelector('img').src = `assets/account-flow${suffix}.svg`;
    if (updateURL) {
      const url = new URL(location.href);
      url.searchParams.set('lang', language);
      history.replaceState(null, '', url);
      if (reference && previousTop !== undefined && window.scrollY > 0) {
        window.scrollBy({ top: reference.getBoundingClientRect().top - previousTop, behavior: 'instant' });
      }
    }
    if (animate && !reducedMotion.matches && document.querySelector('main').animate) {
      document.querySelector('main').animate([{ opacity: .72 }, { opacity: 1 }], { duration: 180, easing: 'ease-out' });
    }
  }

  for (const button of languageButtons) {
    button.addEventListener('click', () => {
      if (button.dataset.language !== currentLanguage) setLanguage(button.dataset.language, true, true);
    });
  }
  setLanguage(localeFromURL());
  document.querySelector('.language-switch').hidden = false;
  window.addEventListener('popstate', () => setLanguage(localeFromURL()));

  let revealObserver;
  function setMotionPreference() {
    revealObserver?.disconnect();
    const elements = [...document.querySelectorAll('[data-reveal]')];
    for (const element of elements) element.classList.remove('reveal-pending');
    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      root.dataset.motion = 'none';
      for (const animation of document.getAnimations()) animation.cancel();
      return;
    }
    root.dataset.motion = 'full';
    revealObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          entry.target.dataset.revealed = 'true';
          revealObserver.unobserve(entry.target);
        }
      }
    }, { rootMargin: '0px 0px -32px 0px', threshold: 0 });
    for (const element of elements) {
      if (element.dataset.revealed === 'true') continue;
      element.classList.add('reveal-pending');
      revealObserver.observe(element);
    }
  }
  setMotionPreference();
  reducedMotion.addEventListener('change', setMotionPreference);

  if ('IntersectionObserver' in window) {
    const header = document.querySelector('.site-header');
    new IntersectionObserver(entries => header.classList.toggle('is-scrolled', !entries[0].isIntersecting))
      .observe(document.querySelector('.header-sentinel'));
    const links = [...document.querySelectorAll('.main-nav a')];
    const navigationObserver = new IntersectionObserver(entries => {
      const current = entries.find(entry => entry.isIntersecting);
      if (!current) return;
      for (const link of links) {
        if (link.hash === `#${current.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }, { rootMargin: '-18% 0px -60% 0px', threshold: 0 });
    for (const section of document.querySelectorAll('.section[id]')) navigationObserver.observe(section);
  }
})();
