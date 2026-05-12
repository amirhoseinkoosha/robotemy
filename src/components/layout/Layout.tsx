import type {MouseEvent, ReactNode} from 'react';
import {motion} from 'motion/react';
import {Cpu, Globe} from 'lucide-react';
import {Link, useLocation, useNavigate} from 'react-router-dom';

import {translations, type Language} from '@/i18n/translations';

type LayoutProps = {
  children: ReactNode;
  lang: Language;
  setLang: (lang: Language) => void;
};

export const Layout = ({children, lang, setLang}: LayoutProps) => {
  const t = translations[lang];
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/', {state: {scrollTo: hash}});
      return;
    }

    const element = document.querySelector(hash);
    element?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="min-h-screen font-sans selection:bg-emerald-500/30 flex flex-col" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 relative z-10 group">
            <motion.div
              initial={{opacity: 0, x: 20}}
              animate={{opacity: 1, x: 0}}
              className="flex items-center gap-2 group-hover:scale-105 transition-transform"
            >
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <Cpu className="text-slate-900 w-6 h-6" />
              </div>
              <span className="hidden sm:inline-block text-xl md:text-2xl font-black tracking-tighter text-white neon-text">
                ROBOTEMY
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {['services', 'faq', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => handleNavClick(e, `#${item}`)}
                className="hover:text-emerald-400 transition-all hover:scale-105"
              >
                {item === 'services' ? t.nav.services : item === 'faq' ? t.nav.faq : t.nav.contact}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 sm:gap-4 relative z-10">
            <button
              onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
              className="flex items-center gap-1 sm:gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-[10px] sm:text-xs font-bold font-mono tracking-widest uppercase">{lang === 'fa' ? 'EN' : 'FA'}</span>
            </button>
            <motion.a
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              href="#contact"
              onClick={(e: MouseEvent<HTMLAnchorElement>) => handleNavClick(e, '#contact')}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all"
            >
              {t.nav.consultation}
            </motion.a>
          </div>
        </div>
      </nav>

      <main className="flex-1">{children}</main>

      <footer className="py-20 border-t border-slate-800/50 bg-slate-950 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center shadow-lg">
                <Cpu className="text-emerald-500 w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">ROBOTEMY</span>
            </div>
            <p className="text-slate-500 max-w-xs text-sm leading-relaxed">{t.footer.desc}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 md:gap-24">
            {['Twitter', 'Telegram', 'Instagram', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className="text-slate-500 hover:text-emerald-400 text-sm font-mono tracking-widest transition-colors">
                {social.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-slate-900 text-center md:text-right flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
          <p dir="ltr">{t.footer.copyright}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-400">
              {t.footer.terms}
            </a>
            <a href="#" className="hover:text-slate-400">
              {t.footer.privacy}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

