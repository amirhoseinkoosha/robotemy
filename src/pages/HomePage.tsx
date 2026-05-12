import type { FormEvent, MouseEvent } from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  BarChart3,
  Bot,
  ChevronDown,
  Code2,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  TrendingUp,
  Video,
  Zap,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import { HeroEquityCurve } from "@/components/hero/HeroEquityCurve";
import { translations, type Language } from "@/i18n/translations";
import type { ScrollToLocationState } from "@/types/navigation";

export const HomePage = ({ lang }: { lang: Language }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [VideoShow, SetVideoShow] = useState<boolean>(false);
  const [isVideoMaximized, setIsVideoMaximized] = useState<boolean>(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success"
  >("idle");
  const t = translations[lang];
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!VideoShow) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") SetVideoShow(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [VideoShow]);

  useEffect(() => {
    const state = location.state as ScrollToLocationState | null;
    if (state?.scrollTo) {
      setTimeout(() => {
        const element = document.querySelector(state.scrollTo!);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      window.history.replaceState({}, document.title);
      return;
    }

    if (!window.location.hash) window.scrollTo(0, 0);
  }, [location]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-32 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-1 hero-grid" />
        <HeroEquityCurve />

        <div className="absolute inset-0 z-5 opacity-30 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-500 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: Math.random(),
              }}
              animate={{
                y: [null, "-100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            <h1
              className={`text-4xl sm:text-6xl md:text-8xl font-black mb-6 md:mb-8 leading-[1.1] text-white ${lang === "en" ? "tracking-tight" : ""}`}
            >
              {t.hero.title1} <br />
              {t.hero.title2}{" "}
              <span className="text-emerald-500 animate-pulse">
                {t.hero.title3}
              </span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg md:text-2xl max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(16,185,129,0.4)",
                }}
                onClick={() => SetVideoShow(true)}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-emerald-500 text-slate-900 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all flex items-center justify-center gap-3"
              >
                <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />
                {t.hero.btnPrimary}
              </motion.button>
              <motion.a
                whileHover={{
                  backgroundColor: "rgba(30, 41, 59, 1)",
                  borderColor: "#10b981",
                }}
                href="#contact"
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto border border-slate-700 bg-slate-900/50 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl transition-all text-center"
              >
                {t.hero.btnSecondary}
              </motion.a>
            </div>
          </motion.div>
        </div>
        {VideoShow && (
          <div
            className="fixed inset-0 z-999999"
            onClick={(e) => SetVideoShow(false)}
          >
            {/* Backdrop (click to close) */}
            <button
              type="button"
              aria-label="Close video backdrop"
              onClick={() => SetVideoShow(false)}
              className="absolute inset-0 w-full h-full bg-black/70 backdrop-blur-md"
            />

            {/* Modal */}
            <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-10">
              <div
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
                className={`relative w-full ${
                  isVideoMaximized
                    ? "max-w-[min(1200px,95vw)]"
                    : "max-w-[min(920px,92vw)]"
                }`}
              >
                <div
                  className={`relative bg-slate-950/70 border border-emerald-500/20 rounded-2xl shadow-[0_6px_40px_rgba(16,185,129,0.2)] overflow-hidden ${
                    isVideoMaximized ? "aspect-video" : "aspect-video"
                  }`}
                >
                  <video
                    src="https://gift.nodisk.ir/s/y7BCYEesnHLXPoz"
                    controls
                    autoPlay
                    className="w-full h-full object-contain bg-[#111827] outline-none   "
                  />

                  {/* Controls */}
                  <div className="absolute top-3 right-3 flex items-center gap-2 z-1000000">
                    <button
                      type="button"
                      onClick={() => setIsVideoMaximized((v) => !v)}
                      className="rounded-full bg-slate-800/80 hover:bg-slate-700/80 text-white w-11 h-11 flex items-center justify-center transition-colors border border-white/10"
                      aria-label={
                        isVideoMaximized ? "Minimize video" : "Maximize video"
                      }
                      title={isVideoMaximized ? "Minimize" : "Maximize"}
                    >
                      {isVideoMaximized ? "⤢" : "⤢"}
                    </button>
                    <button
                      type="button"
                      onClick={() => SetVideoShow(false)}
                      className="rounded-full bg-slate-800/80 hover:bg-slate-700/80 text-white w-11 h-11 flex items-center justify-center transition-colors border border-white/10 text-2xl leading-none"
                      aria-label="Close video"
                      title="close"
                    >
                      ×
                    </button>
                  </div>
                </div>

                <div className="mt-3 text-center text-xs text-slate-400">
                  Click outside or press <span className="font-mono">Esc</span>{" "}
                  to close
                </div>
              </div>
            </div>
          </div>
        )}

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 z-10 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          onClick={() =>
            document
              .getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div className="text-[10px] uppercase tracking-widest font-mono opacity-60">
            Scroll
          </div>
          <div className="w-5 h-8 border-2 border-slate-700/50 rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-1.5 bg-emerald-500 rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </section>

      <section id="services" className="py-40 px-6 bg-slate-950/50 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-linear-to-b from-transparent via-emerald-500/50 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-24">
            <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-white tracking-tight">
              {t.services.title}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              {t.services.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.services.items.map((service, idx) => {
              const Icon = idx === 0 ? Bot : idx === 1 ? Code2 : TrendingUp;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.15)",
                    borderColor: "rgba(16, 185, 129, 0.3)",
                  }}
                  className="glow-card p-10 bg-slate-900/30 border border-slate-800/50 rounded-[2.5rem] flex flex-col h-full group transition-colors"
                >
                  <div className="mb-8 p-5 bg-emerald-500/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-5 text-white group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6 md:mb-8 grow text-sm md:text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-base text-slate-300"
                      >
                        <Zap className="w-4 h-4 text-emerald-500/60" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => navigate("/technical-details")}
                    className="w-full py-4 border border-emerald-500/20 text-emerald-400 rounded-2xl font-bold hover:bg-emerald-500 hover:text-slate-900 transition-all shadow-lg hover:shadow-emerald-500/20"
                  >
                    {t.services.moreInfo}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-slate-800/50 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 text-center">
          {t.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div
                className="text-3xl md:text-5xl font-black text-emerald-500 mb-2 md:mb-3 tracking-tighter neon-text"
                dir="ltr"
              >
                {stat.val}
              </div>
              <div className="text-slate-500 text-xs md:text-sm font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="faq" className="py-40 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 text-white tracking-tight">
              {t.faq.title}
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              {t.faq.subtitle}
            </p>
          </motion.div>

          <div className="space-y-6">
            {t.faq.items.map((faq, idx) => (
              <motion.div
                {...fadeInUp}
                key={idx}
                className={`group border border-slate-800/50 rounded-3xl overflow-hidden transition-all duration-500 ${
                  activeFaq === idx
                    ? "bg-slate-900/80 shadow-[0_0_50px_-20px_rgba(16,185,129,0.3)]"
                    : "bg-slate-900/20"
                }`}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-8 flex items-center justify-between text-right"
                >
                  <span className="font-bold text-lg md:text-xl text-white group-hover:text-emerald-400 transition-colors text-right">
                    {faq.question}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      activeFaq === idx
                        ? "bg-emerald-500 text-slate-900 rotate-180"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 md:px-8 pb-6 md:pb-8 text-slate-400 leading-loose text-sm md:text-lg"
                    >
                      <div className="pt-2 border-t border-slate-800/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-24 md:py-40 px-6 relative bg-emerald-500/5"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: lang === "fa" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-8xl font-black mb-6 md:mb-10 leading-tight text-white tracking-tighter">
              {t.contact.title1} <br />{" "}
              <span className="text-emerald-500 italic">
                {t.contact.title2}
              </span>
            </h2>
            <p className="text-slate-400 text-base md:text-xl mb-10 md:mb-12 leading-relaxed">
              {t.contact.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  icon: <Phone />,
                  label: t.contact.phoneLabel,
                  val: "+98 21 8888 8888",
                },
                {
                  icon: <Mail />,
                  label: t.contact.emailLabel,
                  val: "info@robotemy.com",
                },
                {
                  icon: <MessageSquare />,
                  label: t.contact.telegramLabel,
                  val: "@Robotemy_Support",
                },
              ].map((contact, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 p-6 bg-slate-900/40 rounded-3xl border border-slate-800"
                >
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">
                      {contact.label}
                    </div>
                    <div className="text-white font-mono text-sm" dir="ltr">
                      {contact.val}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: lang === "fa" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="p-6 md:p-14 bg-slate-900/60 border border-slate-800 rounded-[2.5rem] md:rounded-[3.5rem] backdrop-blur-2xl shadow-2xl relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/10 blur-[80px] rounded-full" />

              <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center text-white">
                {t.contact.formTitle}
              </h3>

              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-20 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8"
                  >
                    <ShieldCheck className="text-emerald-500 w-12 h-12" />
                  </motion.div>
                  <h4 className="text-3xl font-bold mb-4 text-white">
                    {t.contact.formSuccessTitle}
                  </h4>
                  <p className="text-slate-400 text-lg">
                    {t.contact.formSuccessSub}
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-12 bg-slate-800 px-8 py-3 rounded-xl text-emerald-500 text-sm font-bold hover:bg-slate-700 transition-all"
                  >
                    {t.contact.formBackBtn}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mr-2">
                        {t.contact.fieldName}
                      </label>
                      <input
                        required
                        placeholder={t.contact.fieldNamePlaceholder}
                        className={`w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 focus:ring-4 ring-emerald-500/10 transition-all placeholder:text-slate-700 ${
                          lang === "en" ? "text-left" : ""
                        }`}
                        dir="auto"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mr-2">
                        {t.contact.fieldPhone}
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder={t.contact.fieldPhonePlaceholder}
                        className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-6 py-4 text-white text-left focus:outline-none focus:border-emerald-500 focus:ring-4 ring-emerald-500/10 transition-all placeholder:text-slate-700"
                        dir="ltr"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mr-2">
                      {t.contact.fieldEmail}
                    </label>
                    <input
                      type="email"
                      placeholder={t.contact.fieldEmailPlaceholder}
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-6 py-4 text-white text-left focus:outline-none focus:border-emerald-500 focus:ring-4 ring-emerald-500/10 transition-all placeholder:text-slate-700"
                      dir="ltr"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 mr-2">
                      {t.contact.fieldDesc}
                    </label>
                    <textarea
                      placeholder={t.contact.fieldDescPlaceholder}
                      rows={4}
                      className={`w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-emerald-500 focus:ring-4 ring-emerald-500/10 transition-all resize-none placeholder:text-slate-700 ${
                        lang === "en" ? "text-left" : ""
                      }`}
                      dir="auto"
                    />
                  </div>

                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px -10px rgba(16,185,129,0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    disabled={formStatus === "submitting"}
                    type="submit"
                    className="w-full bg-emerald-500 text-slate-950 py-6 rounded-[16px] font-black text-[18px] flex items-center justify-center gap-4 transition-all disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? (
                      <div className="w-6 h-6 border-4 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Zap className="w-6 h-6 fill-slate-950" />
                        {t.contact.submitBtn}
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
