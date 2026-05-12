import {useEffect} from 'react';
import {motion} from 'motion/react';
import {ArrowLeft, ArrowRight, Zap} from 'lucide-react';
import {useNavigate} from 'react-router-dom';

import {translations, type Language} from '@/i18n/translations';
import {ArchitectureChart, RiskChart, StrategyChart} from '@/features/technical/components/TechnicalCharts';

export const TechnicalDetailsPage = ({lang}: {lang: Language}) => {
  const t = translations[lang].technicalDetails;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: {opacity: 0, y: 30},
    whileInView: {opacity: 1, y: 0},
    viewport: {once: true},
    transition: {duration: 0.6, ease: 'easeOut'},
  };

  return (
    <div className="pt-32 pb-24 px-6 relative">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-500 rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                opacity: Math.random(),
              }}
              animate={{
                y: [null, '-100%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 5,
              }}
              style={{left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`}}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 mb-12 transition-colors font-bold group">
          {lang === 'fa' ? (
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          ) : (
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          )}
          {t.backBtn}
        </button>

        <motion.div {...fadeInUp} className="mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">{t.pageTitle}</h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">{t.pageSubtitle}</p>
        </motion.div>

        <div className="space-y-32">
          {t.sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{opacity: 0, y: 50}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-100px'}}
              transition={{duration: 0.8}}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-6">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/20">
                  <Zap className="w-6 h-6 text-emerald-500" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{section.title}</h2>
                <div className="w-20 h-1 bg-linear-to-r from-emerald-500 to-transparent rounded-full" />
                <p className="text-slate-400 text-lg leading-loose">{section.description}</p>
              </div>

              <div className="flex-1 w-full">
                <div className="relative group rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/50 p-6 flex flex-col justify-center min-h-[400px]">
                  <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity z-0 duration-500 pointer-events-none" />
                  <div className="w-full h-[350px] relative z-10">
                    {idx === 0 && <ArchitectureChart />}
                    {idx === 1 && <StrategyChart />}
                    {idx === 2 && <RiskChart />}
                  </div>
                  <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] z-20 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeInUp} className="mt-32 text-center">
          <button
            onClick={() => navigate('/', {state: {scrollTo: '#contact'}})}
            className="bg-emerald-500 text-slate-950 px-10 py-5 rounded-2xl font-black text-xl hover:bg-emerald-400 transition-all shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)]"
          >
            {t.contactBtn}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

