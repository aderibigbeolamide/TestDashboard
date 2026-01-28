import { useState } from 'react';
import StatsCard from '../components/dashboard/StatsCard';
import DonutChart from '../components/dashboard/DonutChart';
import SourcesTable from '../components/dashboard/SourcesTable';

const Dashboard = () => {
    const [highlightedSource, setHighlightedSource] = useState<string | null>(null);

    return (
        <div className="space-y-8">
            {/* Header & Tabs */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-6">Plan</h1>
                <div className="flex border-b border-gray-200">
                    <Tab label="Overview" active />
                    <Tab label="Activity" />
                    <Tab label="Distributions" />
                    <Tab label="Loans" />
                    <Tab label="Compliance" />
                </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatsCard title="Total plan balance" value="$825,558.40" />
                <StatsCard title="Year-to-date contributions" value="$101,320.58" />
                <StatsCard title="Total earnings" value="$25,522.06" />
            </div>

            {/* Contributions Section */}
            <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-8">Year-to-date contributions by source</h2>

                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* Chart Area */}
                    <div className="flex-shrink-0 mx-auto lg:mx-0">
                        <DonutChart onHover={setHighlightedSource} />
                    </div>

                    {/* Table Area */}
                    <SourcesTable highlightedSource={highlightedSource} />
                </div>
            </div>
        </div>
    );
};

const Tab = ({ label, active = false }: { label: string, active?: boolean }) => {
    return (
        <button className={`pb-3 px-1 mr-8 text-sm font-medium border-b-2 transition-colors ${active ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
            {label}
        </button>
    );
}

export default Dashboard;
