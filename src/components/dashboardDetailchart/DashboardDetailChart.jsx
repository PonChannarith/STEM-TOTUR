import React from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area
} from 'recharts';

const data = [
  {
    name: 'Total Postforum',
    uv: 1000,
    pv: 5000,
    amt: 900,
  },
  {
    name: 'Total Postarticle',
    uv: 6000,
    pv: 40,
    amt: 210,
  },
  {
    name: 'Total Postfollower',
    uv: 100,
    pv: 8000,
    amt: 2290,
  },
  {
    name: 'Total Postlike',
    uv: 3000,
    pv: 3000,
    amt: 1400,
  },
];

const DashboardDetailChart = () => {
  return (
    <div>
      <section className="max-w-screen-2xl mx-auto mt-5 grid grid-cols-1 md:grid-cols-1 justify-center items-center">
        <main className="mx-auto">
          <AreaChart
            width={830}
            height={350}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </main>
      </section>
    </div>
  );
}

export default DashboardDetailChart;
