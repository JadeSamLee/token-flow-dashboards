
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface LineChartProps {
  data: Array<{
    name: string;
    value: number;
  }>;
  height?: number;
}

const LineChart = ({ data, height = 300 }: LineChartProps) => {
  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#4B5563' }}
            tickLine={{ stroke: '#E5E7EB' }}
          />
          <YAxis 
            tick={{ fill: '#4B5563' }}
            tickLine={{ stroke: '#E5E7EB' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '8px',
              border: 'none',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#EF4444" 
            strokeWidth={2}
            dot={{ stroke: '#EF4444', strokeWidth: 2, r: 4, fill: 'white' }}
            activeDot={{ stroke: '#EF4444', strokeWidth: 2, r: 6, fill: '#FFC107' }}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
