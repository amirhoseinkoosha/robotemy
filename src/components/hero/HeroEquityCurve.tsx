import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {Area, ComposedChart, Line, ResponsiveContainer, XAxis, YAxis} from 'recharts';

type Feature = {
  title: string;
  desc: string;
};

type EquityPoint = {
  x: number;
  value: number;
  feature: Feature | null;
};

type ActiveFeature = Feature & {
  x: number;
  y: number;
};

type CustomDotProps = {
  cx?: number;
  cy?: number;
  payload?: EquityPoint;
};

export const HeroEquityCurve = () => {
  const [data, setData] = useState<EquityPoint[]>([]);
  const [activeFeature, setActiveFeature] = useState<ActiveFeature | null>(null);
  const [showDots, setShowDots] = useState(false);

  useEffect(() => {
    const numPoints = 250;
    let seed = 8500;

    const seededRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    let currentY = 100;
    const generatedData: EquityPoint[] = [];

    for (let i = 1; i <= numPoints; i++) {
      const progress = i / numPoints;
      const bias = 0.8 + progress * 0.5;
      const volatility = 10 * (1 - progress * 0.4);
      const change = (seededRandom() - 0.5) * volatility + bias;

      currentY = currentY + change;

      let feature: Feature | null = null;
      if (i === 60) feature = {title: 'الگویابی هوشمند', desc: 'شناسایی روند بازار براساس پردازش داده‌های لحظه‌ای'};
      if (i === 140) feature = {title: 'مدیریت ریسک پویا', desc: 'تنظیم خودکار حد ضرر برای جلوگیری از افت سرمایه'};
      if (i === 210) feature = {title: 'تولید آلفا', desc: 'بهینه‌سازی نقاط ورود و خروج خرد در معاملات'};

      generatedData.push({x: i, value: currentY, feature});
    }

    setData(generatedData);

    const timer = setTimeout(() => setShowDots(true), 8500);
    return () => clearTimeout(timer);
  }, []);

  const CustomDot = (props: CustomDotProps) => {
    const {cx, cy, payload} = props;
    if (!payload?.feature || !showDots || typeof cx !== 'number' || typeof cy !== 'number') return null;

    const isActive = activeFeature?.title === payload.feature.title;

    return (
      <circle
        role="button"
        cx={cx}
        cy={cy}
        r={isActive ? 10 : 6}
        fill={isActive ? '#10b981' : '#0f172a'}
        stroke="#10b981"
        strokeWidth={3}
        className="pointer-events-auto cursor-pointer outline-none transition-all animate-in fade-in zoom-in duration-1000"
        onMouseEnter={() => setActiveFeature({...payload.feature!, x: cx, y: cy})}
        onMouseLeave={() => setActiveFeature(null)}
        onClick={() => setActiveFeature(isActive ? null : {...payload.feature!, x: cx, y: cy})}
        style={{
          filter: isActive ? 'drop-shadow(0 0 12px rgba(16,185,129,0.9))' : 'drop-shadow(0 0 8px rgba(16,185,129,0.5))',
          transformOrigin: `${cx}px ${cy}px`,
        }}
      />
    );
  };

  return (
    <div className="absolute inset-x-0 bottom-22 z-20 opacity-[0.8] mix-blend-screen pointer-events-none flex items-end overflow-visible h-[55%] sm:h-[75%] lg:h-[85%]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{top: 80, right: 0, left: 0, bottom: 0}}>
          <defs>
            <linearGradient id="equityGradientRecharts" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="50%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis type="number" dataKey="x" domain={['dataMin', 'dataMax']} hide />
          <YAxis hide domain={['dataMin - 20', 'dataMax + 20']} />

          <Area
            type="linear"
            dataKey="value"
            stroke="none"
            fill="url(#equityGradientRecharts)"
            isAnimationActive={true}
            animationDuration={8000}
            animationEasing="ease-out"
          />
          <Line
            type="linear"
            dataKey="value"
            stroke="#10b981"
            strokeWidth={5}
            dot={<CustomDot />}
            activeDot={false}
            isAnimationActive={true}
            animationDuration={8000}
            animationEasing="ease-out"
            style={{filter: 'drop-shadow(0 0 15px rgba(16,185,129,1)) drop-shadow(0 0 30px rgba(16,185,129,0.5))'}}
          />
        </ComposedChart>
      </ResponsiveContainer>

      <AnimatePresence>
        {activeFeature && (
          <motion.div
            initial={{opacity: 0, y: 15, scale: 0.95}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: 10, scale: 0.95}}
            transition={{duration: 0.2}}
            className="absolute z-100 bg-slate-900 border border-emerald-500/50 p-4 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] pointer-events-none w-56 text-center transform -translate-x-1/2 -translate-y-full"
            style={{left: activeFeature.x, top: activeFeature.y - 20}}
          >
            <div className="text-emerald-400 font-bold text-sm mb-2">{activeFeature.title}</div>
            <div className="text-slate-300 text-xs leading-relaxed">{activeFeature.desc}</div>
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-8 border-l-transparent border-r-transparent border-t-emerald-500/50" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

