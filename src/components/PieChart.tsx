
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface PieChartProps {
  data: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  size?: number;
}

const PieChart = ({ data, size = 200 }: PieChartProps) => {
  return (
    <div style={{ width: size, height: size }} className="mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={size * 0.3}
            outerRadius={size * 0.45}
            paddingAngle={2}
            dataKey="value"
            strokeWidth={3}
            stroke="#ffffff"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) => [`${value}%`, '']}
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '8px',
              border: 'none',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
      <div className="mt-4 grid grid-cols-1 gap-2">
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <span
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: entry.color }}
              ></span>
              <span className="text-tdp-dark-gray">{entry.name}</span>
            </div>
            <span className="font-medium">{entry.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
