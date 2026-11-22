const translations = {
  ja: {
    navAbout:"私たちについて",navMembers:"メンバー",navWorks:"作品",navContact:"お問い合わせ",
    heroEyebrow:"独立系クリエイティブサークル",heroTitle:"Ideas become<br><span>something real.</span>",
    heroText:"音楽を中心に、それぞれのアイデアと表現を形にするクリエイティブサークル。",
    discover:"DreamStantについて",heroBottom:"アイデアと音楽、表現が出会う場所。",
    aboutTitle:"私たちについて",aboutLead:"好きなものを、好きな形で。<br>創作を通じて、アイデアをつなぐ。",
    aboutText:"DreamStantは、音楽や映像などの創作を楽しむクリエイティブサークルです。メンバーそれぞれの得意分野を持ち寄り、ひとつの作品を作り上げていきます。",
    aboutNote:"ここに正式な活動方針や設立の経緯を追加できます。",
    membersTitle:"メンバー",membersIntro:"それぞれの役割を持ち寄り、一緒に作品を作っています。",
    role01:"作詞 / 調声 / 運営",role02:"作詞 / 映像制作",role03:"作曲 / 編曲",role04:"編曲 / 調声 / ミックス",
    memberPlaceholder:"メンバー紹介をここに追加してください。",memberHint:"※ メンバー数や担当は、実際の体制に合わせて編集してください。",
    worksTitle:"作品",worksIntro:"DreamStantの作品を紹介します。",workSample:"作品タイトル",
    workType01:"オリジナル曲 / 2026",workType02:"カバー / 2026",workType03:"映像作品 / 2026",
    worksHint:"※ これは仮の表示です。作品画像・タイトル・リンクを実際の内容に差し替えてください。",
    contactTitle:"お問い合わせ",contactText:"コラボレーションやお問い合わせは、下記のリンクからご連絡ください。",
    contactHint:"※ メールアドレスやSNSリンクは公開前に必ず変更してください。",
    footerText:"アイデアを、かたちに。"
  },
  zh: {
    navAbout:"关于我们",navMembers:"成员",navWorks:"作品",navContact:"联系",
    heroEyebrow:"独立创作社团",heroTitle:"让想法<br><span>成为现实。</span>",
    heroText:"以音乐为中心，将每个人的想法与表达转化为作品的创作社团。",
    discover:"了解 DreamStant",heroBottom:"让灵感、音乐与表达在这里相遇。",
    aboutTitle:"关于我们",aboutLead:"以喜欢的方式，创作喜欢的东西。<br>让想法在创作中连接。",
    aboutText:"DreamStant 是一个享受音乐、影像等创作的社团。成员发挥各自所长，共同完成一件件作品。",
    aboutNote:"这里可以补充正式的活动方针与成立经过。",
    membersTitle:"成员",membersIntro:"成员各自负责不同领域，一起完成作品。",
    role01:"作词 / 调声 / 管理",role02:"作词 / PV",role03:"作曲 / 编曲",role04:"编曲 / 调声 / 混音",
    memberPlaceholder:"在这里添加成员介绍。",memberHint:"※ 请根据实际成员人数与分工修改。",
    worksTitle:"作品集",worksIntro:"这里展示 DreamStant 的创作。",
    workSample:"作品标题",workType01:"原创歌曲 / 2026",workType02:"翻唱 / 2026",workType03:"视频 / 2026",
    worksHint:"※ 当前为示例内容。公开前请替换为真实作品封面、标题和链接。",
    contactTitle:"联系",contactText:"如需合作或有其他问题，请通过下方联系方式联系。",
    contactHint:"※ 公开前请务必更换邮箱地址或社交账号链接。",
    footerText:"让想法成为现实。"
  },
  en: {
    navAbout:"About",navMembers:"Members",navWorks:"Works",navContact:"Contact",
    heroEyebrow:"INDEPENDENT CREATIVE CIRCLE",heroTitle:"Ideas become<br><span>something real.</span>",
    heroText:"A creative circle bringing individual ideas and expressions to life through music and more.",
    discover:"Discover DreamStant",heroBottom:"A PLACE FOR IDEAS, MUSIC & EXPRESSION.",
    aboutTitle:"About us",aboutLead:"Create what you love, in your own way.<br>Connect ideas through creativity.",
    aboutText:"DreamStant is a creative circle that enjoys making music, videos, and other creative works. Members bring their strengths together to make something as a team.",
    aboutNote:"Add the circle's official mission and founding story here.",
    membersTitle:"Members",membersIntro:"Different roles and skills come together to create as a team.",
    role01:"Lyrics / Tuning / Management",role02:"Lyrics / PV",role03:"Composition / Arrangement",role04:"Arrangement / Tuning / Mix",
    memberPlaceholder:"Add a short member introduction here.",memberHint:"※ Edit the member count and roles to match your actual team.",
    worksTitle:"Selected works",worksIntro:"A selection of works by DreamStant.",
    workSample:"Work title",workType01:"Original Song / 2026",workType02:"Cover / 2026",workType03:"Video / 2026",
    worksHint:"※ These are placeholders. Replace them with real artwork, titles, and links before publishing.",
    contactTitle:"Contact",contactText:"For collaborations and other inquiries, please use the contact link below.",
    contactHint:"※ Replace the email address or social links before making the site public.",
    footerText:"Ideas become something real."
  }
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.ja;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const value = dict[el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const value = dict[el.dataset.i18nHtml];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll(".lang-btn").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });
}
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
}));
setLanguage("ja");
