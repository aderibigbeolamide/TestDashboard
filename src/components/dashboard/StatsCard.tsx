

interface StatsCardProps {
    title: string;
    value: string;
    subtitle?: string;
}

const StatsCard = ({ title, value, subtitle = "Last updated today" }: StatsCardProps) => {
    return (
        <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-100">
            <h3 className="text-gray-900 font-medium mb-4">{title}</h3>
            <div className="text-3xl font-medium text-gray-900 mb-4">{value}</div>
            <div className="text-xs text-gray-400">{subtitle}</div>
        </div>
    );
};

export default StatsCard;
