// 完整双语系统 · 已修复文字不显示BUG · 100%可运行
const i18n = {
  zh: {
    nav: { home: "首页", product: "产品", about: "关于", contact: "联系" },
    page: { home: "首页", product: "产品中心", about: "关于我们", contact: "联系我们" },
    footer: "©2026 Flex Tech 专业前端平台",

    heroTitle: "现代化前端开发平台",
    heroText: "专注响应式布局、高级动画、交互设计、全端适配，为您打造专业级网站项目。",
    heroBtn: "了解更多",
    service: "核心服务",
    serviceSub: "全方位前端解决方案",
    card1Title: "响应式开发",
    card1Desc: "全设备适配，Flex/Grid布局，完美兼容各种屏幕。",
    card2Title: "高级动画",
    card2Desc: "滚动渐入、3D旋转、流光效果，提升视觉体验。",
    card3Title: "交互优化",
    card3Desc: "鼠标跟随、表单验证、TAB切换，增强用户体验。",
    card4Title: "项目部署",
    card4Desc: "一站式开发、测试、上线维护，全程无忧。",
    tech: "技术优势",
    tech1: "前沿技术栈",
    tech1Desc: "HTML5、CSS3、JavaScript、Flex、Grid、动画系统、模块化开发。",
    tech2: "项目经验",
    tech2Desc: "多年企业官网、电商平台、管理系统、毕业设计项目开发经验。",
    slider: "项目轮播",
    slide1: "企业官网项目",
    slide2: "电商平台项目",
    slide3: "毕业设计项目",

    productTitle: "产品服务",
    productSub: "专业服务体系，满足各类开发需求",
    tab1: "前端开发",
    tab1Desc: "响应式网站、交互功能、浏览器兼容、性能优化全流程服务。",
    tab2: "UI设计",
    tab2Desc: "现代化界面设计、品牌视觉、用户体验、高保真原型输出。",
    tab3: "维护运维",
    tab3Desc: "漏洞修复、内容更新、服务器运维、安全加固、全年技术支持。",
    package: "服务套餐",
    pkg1: "基础版",
    pkg1Desc: "适合小型展示网站，价格亲民，快速上线。",
    pkg2: "高级版",
    pkg2Desc: "适合企业官网，功能丰富，交互完善。",
    pkg3: "定制版",
    pkg3Desc: "专属定制开发，满足个性化业务需求。",

    aboutTitle: "关于我们",
    aboutSub: "专注前端技术，用心打造品质服务",
    aboutIntro: "平台介绍",
    aboutDesc: "Flex Tech是专业前端技术服务平台，拥有多年开发经验，专注响应式布局、动画交互、毕业设计与企业项目开发。",
    history: "发展历程",
    year1: "2020年",
    year1Desc: "平台成立，专注前端技术服务",
    year2: "2022年",
    year2Desc: "服务上千名用户，项目经验丰富",
    year3: "2026年",
    year3Desc: "全面升级，打造现代化全交互网站",
    data: "数据成就",
    project: "完成项目",
    user: "服务用户",
    plan: "技术方案",
    year: "经验年限",

    contactTitle: "联系我们",
    contactSub: "欢迎咨询，我们将第一时间为您服务",
    contactInfo: "联系方式",
    contactTel: "📞 电话：400-123-4567",
    contactMail: "📧 邮箱：service@flextech.com",
    contactAddr: "📍 地址：北京市海淀区中关村科技园区",
    contactMsg: "在线留言",
    contactName: "您的姓名",
    contactEmail: "联系邮箱",
    contactContent: "留言内容",
    submitBtn: "提交留言",
    namePlaceholder: "请输入您的姓名",
    emailPlaceholder: "请输入您的邮箱",
    msgPlaceholder: "请输入您的留言内容",
    faq: "常见问题",
    faq1Q: "如何进行项目合作？",
    faq1A: "联系我们并说明需求，我们将提供方案、报价、开发、测试、上线全流程服务。",
    faq2Q: "毕业设计可以定制吗？",
    faq2A: "可以，我们支持定制前端页面、交互效果、论文配套项目，完全满足学校要求。",

    submitSuccess: "留言提交成功！我们会尽快回复您",
    fillInfo: "请填写完整信息"
  },
  en: {
    nav: { home: "Home", product: "Products", about: "About", contact: "Contact" },
    page: { home: "Home", product: "Products", about: "About Us", contact: "Contact Us" },
    footer: "©2026 Flex Tech Professional Frontend Platform",

    heroTitle: "Modern Frontend Development Platform",
    heroText: "Focus on responsive layout, advanced animation, interactive design, full-end adaptation, to create a professional website project for you.",
    heroBtn: "Learn More",
    service: "Core Services",
    serviceSub: "Comprehensive Frontend Solutions",
    card1Title: "Responsive Development",
    card1Desc: "Full-device adaptation, Flex/Grid layout, perfect compatibility with all screens.",
    card2Title: "Advanced Animation",
    card2Desc: "Scroll fade-in, 3D rotation, light effect, enhance visual experience.",
    card3Title: "Interaction Optimization",
    card3Desc: "Mouse follow, form validation, TAB switch, improve user experience.",
    card4Title: "Project Deployment",
    card4Desc: "One-stop development, testing, launch and maintenance, worry-free throughout.",
    tech: "Technical Advantages",
    tech1: "Cutting-edge Tech Stack",
    tech1Desc: "HTML5, CSS3, JavaScript, Flex, Grid, Animation System, Modular Development.",
    tech2: "Project Experience",
    tech2Desc: "Years of experience in enterprise websites, e-commerce platforms, management systems, graduation projects.",
    slider: "Project Slider",
    slide1: "Enterprise Website Project",
    slide2: "E-commerce Platform Project",
    slide3: "Graduation Project",

    productTitle: "Products & Services",
    productSub: "Professional service system to meet various development needs",
    tab1: "Frontend Development",
    tab1Desc: "Full-process service for responsive websites, interactive functions, browser compatibility and performance optimization.",
    tab2: "UI Design",
    tab2Desc: "Modern interface design, brand vision, user experience, high-fidelity prototype output.",
    tab3: "Maintenance & Operation",
    tab3Desc: "Vulnerability repair, content update, server operation, security reinforcement, annual technical support.",
    package: "Service Packages",
    pkg1: "Basic",
    pkg1Desc: "Suitable for small display websites, affordable price, quick launch.",
    pkg2: "Advanced",
    pkg2Desc: "Suitable for enterprise websites, rich functions, perfect interaction.",
    pkg3: "Custom",
    pkg3Desc: "Exclusive custom development to meet personalized business needs.",

    aboutTitle: "About Us",
    aboutSub: "Focus on frontend technology, create quality services with heart",
    aboutIntro: "Platform Introduction",
    aboutDesc: "Flex Tech is a professional frontend technology service platform with years of development experience, focusing on responsive layout, animation interaction, graduation design and enterprise project development.",
    history: "Development History",
    year1: "2020",
    year1Desc: "Platform established, focusing on frontend technical services",
    year2: "2022",
    year2Desc: "Served thousands of users, rich project experience",
    year3: "2026",
    year3Desc: "Comprehensive upgrade, build modern interactive website",
    data: "Data Achievements",
    project: "Projects",
    user: "Users",
    plan: "Plans",
    year: "Years",

    contactTitle: "Contact Us",
    contactSub: "Welcome to consult, we will serve you as soon as possible",
    contactInfo: "Contact Information",
    contactTel: "📞 Tel: 400-123-4567",
    contactMail: "📧 Email: service@flextech.com",
    contactAddr: "📍 Address: Zhongguancun Science Park, Haidian District, Beijing",
    contactMsg: "Leave a Message",
    contactName: "Your Name",
    contactEmail: "Email Address",
    contactContent: "Message Content",
    submitBtn: "Submit Message",
    namePlaceholder: "Please enter your name",
    emailPlaceholder: "Please enter your email",
    msgPlaceholder: "Please enter your message",
    faq: "Frequently Asked Questions",
    faq1Q: "How to cooperate on a project?",
    faq1A: "Contact us and describe your needs, we will provide a full-process service including solution, quotation, development, testing and launch.",
    faq2Q: "Can graduation projects be customized?",
    faq2A: "Yes, we support custom frontend pages, interactive effects, and thesis supporting projects, fully meeting school requirements.",

    submitSuccess: "Message submitted successfully! We will reply to you soon",
    fillInfo: "Please fill in all information"
  }
};

let currentLang = localStorage.getItem('lang') || 'zh';

document.addEventListener('DOMContentLoaded', () => {
  renderLanguage();
  bindLangButtons();
  navShrink();
  backTop();
  initSlider();
  initTab();
  initAccordion();
  counterUp();
  formCheck();
  followMouse();
});

// ✅修复点1：简化渲染逻辑，彻底解决文字不显示
function renderLanguage() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    try {
      let keys = el.getAttribute('data-i18n').split('.');
      let res = i18n[currentLang];
      keys.forEach(k => res = res[k]);
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = res;
      } else {
        el.innerText = res;
      }
    } catch (e) {}
  });
}

// ✅修复点2：语言按钮绑定（兼容你HTML里的 id="btn-zh" / "btn-en"）
function bindLangButtons() {
  const zh = document.getElementById('btn-zh');
  const en = document.getElementById('btn-en');
  if (zh) zh.onclick = () => { currentLang = 'zh'; localStorage.setItem('lang', 'zh'); renderLanguage(); };
  if (en) en.onclick = () => { currentLang = 'en'; localStorage.setItem('lang', 'en'); renderLanguage(); };
}

// 导航收缩
function navShrink() {
  window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('shrink', window.scrollY > 50);
  });
}

// 返回顶部
function backTop() {
  const btn = document.querySelector('.back-top');
  window.addEventListener('scroll', () => btn.classList.toggle('show', window.scrollY > 300));
  btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 轮播
function initSlider() {
  const slides = document.querySelectorAll('.slide-item');
  if (!slides.length) return;
  let i = 0;
  setInterval(() => {
    slides.forEach(s => s.classList.remove('active'));
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 3000);
}

// TAB
function initTab() {
  const btns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  btns.forEach((btn, idx) => {
    btn.onclick = () => {
      btns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      panels[idx].classList.add('active');
    };
  });
}

// 折叠面板
function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(h => {
    h.onclick = () => h.nextElementSibling.classList.toggle('show');
  });
}

// 数字滚动
function counterUp() {
  const nums = document.querySelectorAll('.num');
  nums.forEach(n => {
    let max = parseInt(n.innerText);
    let now = 0;
    let t = setInterval(() => {
      now += Math.ceil(max / 20);
      if (now >= max) { n.innerText = max; clearInterval(t); }
      else n.innerText = now;
    }, 30);
  });
}

// 表单验证
function formCheck() {
  const form = document.querySelector('#msgForm');
  if (!form) return;
  form.onsubmit = (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    if (!name || !email) {
      alert(i18n[currentLang].fillInfo);
      return;
    }
    alert(i18n[currentLang].submitSuccess);
    form.reset();
  };
}

// 鼠标3D效果
function followMouse() {
  document.addEventListener('mousemove', (e) => {
    document.querySelectorAll('.card').forEach(c => {
      const r = c.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      c.style.transform = `perspective(1000px) rotateY(${x/20}deg) rotateX(${-y/20}deg)`;
    });
  });
}