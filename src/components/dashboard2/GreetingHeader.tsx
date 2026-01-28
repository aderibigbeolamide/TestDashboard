

const GreetingHeader = ({ name = "Alex" }: { name?: string }) => {
    const hour = new Date().getHours();
    let greeting = 'Good morning';
    if (hour >= 12 && hour < 18) greeting = 'Good afternoon';
    if (hour >= 18) greeting = 'Good evening';

    return (
        <div className="flex justify-between items-center mb-12">
            <h1 className="text-3xl font-light text-gray-800">{greeting}, {name}</h1>
            <div className="flex gap-4">
                <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md font-medium text-sm flex items-center gap-2 hover:bg-gray-50">
                    Transfer or rollover
                    <span className="text-gray-400 text-xs">▼</span>
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium text-sm hover:bg-blue-700 shadow-sm">
                    Deposit
                </button>
            </div>
        </div>
    );
};

export default GreetingHeader;
