import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Brush,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const generatePerformanceData = () => {
  let balance = 10000;
  const data: Array<{trade: string; balance: number; drawdown: number}> = [];

  for (let i = 1; i <= 100; i++) {
    const change = (Math.random() - 0.45) * 500;
    balance += change;
    data.push({
      trade: `Trade ${i}`,
      balance: parseFloat(balance.toFixed(2)),
      drawdown: parseFloat(Math.min(0, change).toFixed(2)),
    });
  }

  return data;
};

const performanceData = generatePerformanceData();

const optimizationData = [
  {parameter: 'Stop Loss', before: -20, after: -10},
  {parameter: 'Take Profit', before: 30, after: 45},
  {parameter: 'Trailing', before: 5, after: 15},
  {parameter: 'Risk/Reward', before: 1.5, after: 2.8},
  {parameter: 'Win Rate (%)', before: 45, after: 68},
];

const riskData = Array.from({length: 50}).map((_, i) => ({
  day: `Day ${i + 1}`,
  risk: Math.max(0, 10 - Math.log(i + 1) * 2 + (Math.random() * 2 - 1)),
  volatility: Math.random() * 5 + 2,
}));

export const ArchitectureChart = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-xs text-slate-500 mb-2 px-6 flex justify-between">
        <span>Interactive Chart: Hover for details</span>
        <span>Drag bottom handles to Zoom/Pan</span>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performanceData} margin={{top: 10, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="trade" stroke="#64748b" tick={{fill: '#64748b'}} fontSize={12} />
            <YAxis stroke="#64748b" tick={{fill: '#64748b'}} domain={['dataMin - 1000', 'dataMax + 1000']} fontSize={12} />
            <Tooltip
              contentStyle={{backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff'}}
              itemStyle={{color: '#10b981'}}
            />
            <Legend wrapperStyle={{color: '#94a3b8', fontSize: '12px'}} verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="balance"
              name="Account Balance"
              stroke="#10b981"
              strokeWidth={3}
              dot={false}
              activeDot={{r: 8, fill: '#10b981', stroke: '#fff'}}
            />
            <Brush dataKey="trade" height={30} stroke="#10b981" fill="#0f172a" tickFormatter={() => ''} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const StrategyChart = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-xs text-slate-500 mb-2 px-6 flex justify-between">
        <span>Interactive Chart: Hover for metrics</span>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={optimizationData} margin={{top: 10, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="parameter" stroke="#64748b" tick={{fill: '#64748b'}} fontSize={12} />
            <YAxis stroke="#64748b" tick={{fill: '#64748b'}} fontSize={12} />
            <Tooltip
              contentStyle={{backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff'}}
              cursor={{fill: 'rgba(255, 255, 255, 0.05)'}}
            />
            <Legend wrapperStyle={{color: '#94a3b8', fontSize: '12px'}} verticalAlign="top" height={36} />
            <Bar dataKey="before" name="Before Optimization" fill="#64748b" radius={[4, 4, 0, 0]} />
            <Bar dataKey="after" name="After GA Optimization" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const RiskChart = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-xs text-slate-500 mb-2 px-6 flex justify-between">
        <span>Interactive Chart: Hover for details</span>
        <span>Drag bottom handles to Zoom/Pan</span>
      </div>
      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={riskData} margin={{top: 10, right: 30, left: 20, bottom: 5}}>
            <defs>
              <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorVol" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="day" stroke="#64748b" tick={{fill: '#64748b'}} fontSize={12} />
            <YAxis stroke="#64748b" tick={{fill: '#64748b'}} fontSize={12} />
            <Tooltip contentStyle={{backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff'}} />
            <Legend wrapperStyle={{color: '#94a3b8', fontSize: '12px'}} verticalAlign="top" height={36} />
            <Area type="monotone" dataKey="risk" name="Drawdown Risk" stroke="#ef4444" fillOpacity={1} fill="url(#colorRisk)" />
            <Area
              type="monotone"
              dataKey="volatility"
              name="Market Volatility"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorVol)"
            />
            <Brush dataKey="day" height={30} stroke="#ef4444" fill="#0f172a" tickFormatter={() => ''} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

