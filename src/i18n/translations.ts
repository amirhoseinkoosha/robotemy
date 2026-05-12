export type Language = 'fa' | 'en';

export const translations = {
  fa: {
    nav: {
      services: 'سرویس‌ها',
      faq: 'سوالات متداول',
      contact: 'تماس با ما',
      consultation: 'مشاوره رایگان',
    },
    hero: {
      title1: 'آینده معاملات شما',
      title2: 'با',
      title3: 'هوش مصنوعی',
      subtitle: 'تلاقی تکنولوژی و بازارهای مالی. ما استراتژی‌های شما را با دقت میلی‌ثانیه خودکار می‌کنیم.',
      btnPrimary: 'مشاهده عملکرد ربات‌ها',
      btnSecondary: 'ارتباط با کارشناس',
    },
    services: {
      title: 'سرویس‌های فوق حرفه‌ای',
      subtitle: 'پلتفرم Robotemy تمام چرخه‌ی حیات یک سیستم معاملاتی خودکار را برای شما مدیریت می‌کند.',
      items: [
        {
          id: 'rent',
          title: 'اجاره ربات‌های معاملاتی',
          description:
            'دسترسی سریع به الگوریتم‌های سودآور ما که در بازارهای مختلف تست شده‌اند. بدون نیاز به دانش برنامه‌نویسی، از تخصص ما بهره‌مند شوید.',
          features: ['فعال‌سازی آنی', 'مدیریت ریسک هوشمند', 'پشتیبانی فنی رایگان'],
        },
        {
          id: 'order',
          title: 'سفارش ربات و اندیکاتور',
          description:
            'استراتژی خاص خود را دارید؟ ما آن را به یک ربات یا اندیکاتور دقیق و حرفه‌ای تبدیل می‌کنیم. پیاده‌سازی سریع با متاتریدر و سایر پلتفرم‌ها.',
          features: ['کدنویسی بهینه', 'رعایت محرمانگی استراتژی', 'تست بک‌تست دقیق'],
        },
        {
          id: 'optimize',
          title: 'بهینه‌سازی و ارتقا',
          description:
            'ربات یا استراتژی فعلی شما نیاز به بهبود دارد؟ ما با استفاده از آنالیزهای پیشرفته، دراودان شما را کاهش و بازدهی را افزایش می‌دهیم.',
          features: ['کاهش Drawdown', 'افزایش Profit Factor', 'ارتقا به نسخه‌های جدید'],
        },
      ],
      moreInfo: 'جزییات فنی',
    },
    stats: [
      {label: 'مشتری فعال', val: '۵۰۰+'},
      {label: 'ربات توسعه یافته', val: '۸۰+'},
      {label: 'رضایت کاربران', val: '۴.۸'},
      {label: 'پشتیبانی آنلاین', val: '۲۴/۷'},
    ],
    faq: {
      title: 'سوالات متداول',
      subtitle: 'هر آنچه باید قبل از شروع بدانید.',
      items: [
        {
          question: 'چگونه می‌توانم از ربات‌ها استفاده کنم؟',
          answer:
            'پس از انتخاب پلن اجاره یا دریافت ربات سفارشی، فایل‌های لازم به همراه راهنمای نصب گام‌به‌گام برای شما ارسال می‌شود. همچنین تیم فنی ما آماده نصب رایگان روی سرور شماست.',
        },
        {
          question: 'آیا ربات‌ها تضمین سود دارند؟',
          answer:
            'در بازارهای مالی هیچ تضمین قطعی وجود ندارد. با این حال، ربات‌های Robotemy بر اساس مدیریت ریسک سخت‌گیرانه و تست‌های آماری طولانی‌مدت طراحی شده‌اند تا احتمال موفقیت را بیشینه کنند.',
        },
        {
          question: 'مدت زمان ساخت یک ربات سفارشی چقدر است؟',
          answer:
            'بسته به پیچیدگی استراتژی شما، معمولاً بین ۳ تا ۱۰ روز کاری زمان می‌برد تا ربات طراحی، کدنویسی و دیباگ شود.',
        },
        {
          question: 'چه پلتفرم‌هایی پشتیبانی می‌شوند؟',
          answer:
            'ما به طور تخصصی برای متاتریدر ۴ و ۵ (MT4/MT5)، تریدینگ‌ویو (Pine Script) و پایتون برای صرافی‌های ارز دیجیتال ربات تولید می‌کنیم.',
        },
      ],
    },
    contact: {
      title1: 'یک قدم تا',
      title2: 'ترید هوشمند',
      subtitle:
        'فرم را پر کنید تا یکی از متخصصان الگوریتم ما با شما تماس بگیرد. این مشاوره کاملاً رایگان است و نقشه مسیر شما را روشن می‌کند.',
      phoneLabel: 'تلفن ثابت',
      emailLabel: 'ایمیل رسمی',
      telegramLabel: 'تلگرام',
      formTitle: 'مشاوره سریع و حرفه‌ای',
      formSuccessTitle: 'تبریک! پیام ارسال شد',
      formSuccessSub: 'تیم ما حداکثر تا ۲ ساعت آینده با شما تماس می‌گیرد.',
      formBackBtn: 'بازگشت به فرم',
      fieldName: 'نام کامل',
      fieldNamePlaceholder: 'نام و نام خانوادگی',
      fieldPhone: 'شماره تماس',
      fieldPhonePlaceholder: '۰۹۱۲ ۳۴۵ ۶۷۸۹',
      fieldEmail: 'ایمیل (جهت ارسال دمو)',
      fieldEmailPlaceholder: 'youremail@provider.com',
      fieldDesc: 'چگونه می‌توانیم کمک کنیم؟',
      fieldDescPlaceholder: 'در مورد استراتژی یا ربات مدنظر خود کمی بنویسید...',
      submitBtn: 'تایید و دریافت مشاوره فوری',
      submitting: 'در حال رزرو زمان...',
    },
    technicalDetails: {
      pageTitle: 'جزییات فنی و ساختاری خدمات',
      pageSubtitle: 'مروری بر معماری، زیرساخت و امکانات تخصصی سیستم‌های معاملاتی Robotemy',
      sections: [
        {
          title: 'معماری ربات‌های معاملاتی (اجاره)',
          description:
            'سیستم‌های اجاره‌ای ما بر پایه سرورهای ابری قدرتمند با تاخیر نزدیک به صفر (Ultra-low Latency) میزبانی می‌شوند. هر کاربر یک فضای ایزوله پردازشی دارد که پایداری اکسپرت ادوایزرها (EA) را در زمان نوسانات شدید بازار تضمین می‌کند. این الگوریتم‌ها با فیلترهای پیشرفته اخبار و ماژول‌های پوشش ریسک (Hedging) ترکیب شده‌اند.',
          imageUrl:
            'https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=1200',
        },
        {
          title: 'فرایند مهندسی استراتژی‌های سفارشی',
          description:
            'وقتی استراتژی خود را به ما می‌سپارید، ابتدا کدنویسی اولیه در محیط‌های ایزوله انجام شده و سپس توسط الگوریتم‌های ژنتیک در متاتریدر بهینه‌سازی می‌شود. خروجی نهایی، کدی تمیز، بدون باگ حافظه و کاملاً سازگار با آخرین آپدیت‌های MQL4/5 یا Pine Script است.',
          imageUrl:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        },
        {
          title: 'متدولوژی بهینه‌سازی و کاهش ریسک',
          description:
            'ما از تکنیک‌های یادگیری ماشین برای پیدا کردن پارامترهای طلایی استفاده می‌کنیم. دراودان (Drawdown) استراتژی با اعمال توابع توزیع آماری و تست‌های مونت‌کارلو در سخت‌ترین شرایط بازار سنجیده می‌شود تا پایداری درازمدت استراتژی تایید گردد.',
          imageUrl:
            'https://images.unsplash.com/photo-1642543492481-44e81e391452?auto=format&fit=crop&q=80&w=1200',
        },
      ],
      contactBtn: 'درخواست مشاوره تخصصی',
      backBtn: 'بازگشت به صفحه اصلی',
    },
    footer: {
      desc: 'پیشرو در ارائه الگوریتم‌های معاملاتی هوشمند و خودکارسازی بازارهای مالی با استفاده از متدهای روز دنیا.',
      copyright: '© ۲۰۲۶ Robotemy. تمامی حقوق الگوریتم‌ها محفوظ است.',
      terms: 'قوانین و مقررات',
      privacy: 'حریم خصوصی',
    },
  },
  en: {
    nav: {
      services: 'Services',
      faq: 'FAQ',
      contact: 'Contact Us',
      consultation: 'Free Consultation',
    },
    hero: {
      title1: 'The Future of Trading',
      title2: 'Powered by',
      title3: 'Artificial Intelligence',
      subtitle: 'The intersection of technology and financial markets. We automate your strategies with millisecond precision.',
      btnPrimary: 'View Bot Performance',
      btnSecondary: 'Talk to an Expert',
    },
    services: {
      title: 'Premium Services',
      subtitle: 'The Robotemy platform manages the entire lifecycle of your automated trading system.',
      items: [
        {
          id: 'rent',
          title: 'Trading Bot Rentals',
          description:
            'Instant access to our profitable, market-tested algorithms. Benefit from our expertise with zero coding knowledge required.',
          features: ['Instant Activation', 'Smart Risk Management', 'Free Technical Support'],
        },
        {
          id: 'order',
          title: 'Custom Bots & Indicators',
          description:
            'Have your own strategy? We translate it into a precise, professional bot or indicator. Fast delivery for MT4/5 and other platforms.',
          features: ['Optimized Code', 'Strict Confidentiality', 'Rigorous Backtesting'],
        },
        {
          id: 'optimize',
          title: 'Optimization & Upgrades',
          description:
            'Need to improve your current bot or strategy? We use advanced analytics to reduce drawdown and increase profitability.',
          features: ['Drawdown Reduction', 'Profit Factor Increase', 'Version Upgrades'],
        },
      ],
      moreInfo: 'Technical Details',
    },
    stats: [
      {label: 'Active Clients', val: '500+'},
      {label: 'Bots Developed', val: '80+'},
      {label: 'User Satisfaction', val: '4.8'},
      {label: 'Online Support', val: '24/7'},
    ],
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know before getting started.',
      items: [
        {
          question: 'How do I start using the bots?',
          answer:
            'After selecting a rental plan or receiving your custom bot, you will receive all necessary files and a step-by-step installation guide. Our technical team also provides free installation assistance on your VPS.',
        },
        {
          question: 'Do the bots guarantee a profit?',
          answer:
            'There are no absolute guarantees in financial markets. However, Robotemy bots are designed with strict risk management and extensive statistical backtesting to maximize the probability of success.',
        },
        {
          question: 'How long does it take to build a custom bot?',
          answer:
            'Depending on the complexity of your strategy, it typically takes between 3 to 10 business days for the bot to be designed, coded, and debugged.',
        },
        {
          question: 'Which trading platforms do you support?',
          answer:
            'We specialize in bot development for MetaTrader 4 and 5 (MT4/MT5), TradingView (Pine Script), and Python for cryptocurrency exchanges.',
        },
      ],
    },
    contact: {
      title1: 'One Step Closer to',
      title2: 'Smart Trading',
      subtitle:
        'Fill out the form and one of our algorithmic experts will contact you. This consultation is completely free and will illuminate your path forward.',
      phoneLabel: 'Landline',
      emailLabel: 'Official Email',
      telegramLabel: 'Telegram',
      formTitle: 'Fast & Professional Consultation',
      formSuccessTitle: 'Congratulations! Message Sent',
      formSuccessSub: 'Our team will contact you within the next 2 hours.',
      formBackBtn: 'Back to Form',
      fieldName: 'Full Name',
      fieldNamePlaceholder: 'John Doe',
      fieldPhone: 'Phone Number',
      fieldPhonePlaceholder: '+1 234 567 8900',
      fieldEmail: 'Email (For Demo Delivery)',
      fieldEmailPlaceholder: 'youremail@provider.com',
      fieldDesc: 'How can we help?',
      fieldDescPlaceholder: 'Tell us a bit about your desired strategy or bot...',
      submitBtn: 'Confirm & Get Consultation',
      submitting: 'Booking your slot...',
    },
    technicalDetails: {
      pageTitle: 'Technical & Structural Details',
      pageSubtitle:
        'An overview of the architecture, infrastructure, and specialized features of Robotemy trading systems.',
      sections: [
        {
          title: 'Trading Bot Architecture (Rentals)',
          description:
            'Our rental systems are hosted on powerful cloud servers with ultra-low latency. Each user gets an isolated processing environment, ensuring stability of Expert Advisors (EAs) during periods of high market volatility. These algorithms are combined with advanced news filters and hedging modules.',
          imageUrl:
            'https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=1200',
        },
        {
          title: 'Custom Strategy Engineering Process',
          description:
            'When you entrust us with your strategy, initial coding is done in isolated environments and then optimized using Genetic Algorithms in MetaTrader. The final output is clean code, free from memory leaks, and fully compatible with the latest MQL4/5 or Pine Script updates.',
          imageUrl:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
        },
        {
          title: 'Optimization & Risk Reduction Methodology',
          description:
            "We use machine learning techniques to find the golden parameters. The strategy's drawdown is assessed by applying statistical distribution functions and Monte Carlo Simulations under the most severe market conditions to ensure long-term stability.",
          imageUrl:
            'https://images.unsplash.com/photo-1642543492481-44e81e391452?auto=format&fit=crop&q=80&w=1200',
        },
      ],
      contactBtn: 'Request Expert Consultation',
      backBtn: 'Back to Home',
    },
    footer: {
      desc: 'Pioneering intelligent trading algorithms and financial market automation using state-of-the-art methodologies.',
      copyright: '© 2026 Robotemy. All algorithmic rights reserved.',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
    },
  },
};

