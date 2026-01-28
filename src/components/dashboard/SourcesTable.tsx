
import clsx from 'clsx';

const sources = [
    { name: 'Traditional contributions', weight: '74.5%', value: '$74,500.00', color: 'bg-blue-500', barColor: '#3b82f6', category: 'Employee' },
    { name: 'Roth contributions', weight: '3.7%', value: '$3,700.58', color: 'bg-teal-500', barColor: '#14b8a6', category: 'Employee' },
    { name: 'Traditional 401(k) rollover', weight: '0.0%', value: '$0.00', color: 'bg-gray-200', barColor: '#e5e7eb', category: 'Employee' },
    { name: 'Roth 401(k) rollover', weight: '0.0%', value: '$0.00', color: 'bg-gray-200', barColor: '#e5e7eb', category: 'Employee' },
    { name: 'Employer match', weight: '21.8%', value: '$21,800.00', color: 'bg-orange-500', barColor: '#f97316', category: 'Employer' },
    { name: 'QNEC', weight: '1.0%', value: '$0.00', color: 'bg-amber-500', barColor: '#f59e0b', category: 'Employer' },
    { name: 'QMAC', weight: '0.0%', value: '$0.00', color: 'bg-gray-200', barColor: '#e5e7eb', category: 'Employer' }
];

interface SourcesTableProps {
    highlightedSource?: string | null;
}

const SourcesTable = ({ highlightedSource }: SourcesTableProps) => {
    return (
        <div className="flex-1 overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
                <thead>
                    <tr className="border-gray-100">
                        {/* Headers are aligned to match the content */}
                        <th className="py-2 pb-4 font-bold text-gray-900 text-xs w-[40%]">Sources</th>
                        <th className="py-2 pb-4 font-bold text-gray-900 text-xs w-[35%]">Current weight</th>
                        <th className="py-2 pb-4 font-bold text-gray-900 text-xs text-right w-[25%]">YTD value</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-50/50">
                    {sources.map((source, index) => {
                        // Highlight if exact name match (hovering specific slice) OR category match (if we passed category, but here we pass specific name from chart)
                        // Wait, chart passes 'name' now (e.g. 'Traditional contributions').
                        // Let's ensure strict equality for precise highlighting as requested.
                        const isHighlighted = highlightedSource === source.name;
                        const isDimmed = highlightedSource && !isHighlighted;

                        return (
                            <tr
                                key={index}
                                className={clsx(
                                    "transition-all duration-200",
                                    // Subtle row hover if not interacting
                                    !highlightedSource && "hover:bg-gray-50/30",
                                    // Highlight logic
                                    isHighlighted ? "bg-blue-50/40 relative z-10" : "",
                                    isDimmed && "opacity-40"
                                )}
                            >
                                <td className="py-3 px-1 text-gray-700 font-medium text-sm">{source.name}</td>
                                <td className="py-3 px-1">
                                    <div className="flex items-center gap-4">
                                        <span className="w-10 text-gray-500 text-sm">{source.weight}</span>
                                        {/* Bar */}
                                        <div className="h-2.5 rounded-sm bg-gray-100 flex-1 max-w-[120px] overflow-hidden">
                                            <div
                                                className="h-full rounded-sm transition-all duration-300"
                                                style={{
                                                    width: source.weight === '0.0%' ? '0px' : '100%', // Visual fix: 100% of the bar container, but container width could vary? 
                                                    // Actually better: Bar width proportional to percentage? 
                                                    // The image shows distinct bar lengths. Let's use the actual percentage roughly scaled.
                                                    maxWidth: `${parseFloat(source.weight)}%`,
                                                    backgroundColor: source.barColor
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3 px-1 text-right text-gray-700 font-medium text-sm tracking-tight">{source.value}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default SourcesTable;
