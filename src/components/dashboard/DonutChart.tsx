
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Data strictly matching the visual segments in the reference image
const data = [
    // Employee Group (78% total)
    { name: 'Traditional contributions', value: 74.5, color: '#3b82f6', category: 'Employee' }, // Blue
    { name: 'Roth contributions', value: 3.7, color: '#14b8a6', category: 'Employee' }, // Teal

    // Employer Group (22% total)
    { name: 'Employer match', value: 21.8, color: '#f97316', category: 'Employer' }, // Orange
    { name: 'QNEC', value: 1.0, color: '#f59e0b', category: 'Employer' }  // Amber/Yellow
];

interface DonutChartProps {
    onHover?: (source: string | null) => void;
}

const DonutChart = ({ onHover }: DonutChartProps) => {
    return (
        <div className="h-64 w-64 relative">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={85} // Enlarged for better text fit
                        outerRadius={105} // Enlarged
                        startAngle={90}
                        endAngle={-270}
                        paddingAngle={0}
                        dataKey="value"
                        onMouseEnter={(data) => onHover?.(data.name)}
                        onMouseLeave={() => onHover?.(null)}
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={entry.color}
                                className="outline-none transition-opacity duration-300 hover:opacity-80 cursor-pointer"
                            />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            {/* Custom Central Label Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex gap-4 text-center items-center">
                    <div>
                        <div className="text-xl font-bold text-gray-700">22%</div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wide font-semibold">Employer</div>
                    </div>
                    <div className="w-px bg-gray-300 h-8"></div>
                    <div>
                        <div className="text-xl font-bold text-gray-700">78%</div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wide font-semibold">Employee</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonutChart;
