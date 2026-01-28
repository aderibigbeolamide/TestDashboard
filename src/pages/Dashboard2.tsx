import { useState } from 'react';
import Sidebar2 from '../components/dashboard2/Sidebar2';
import GreetingHeader from '../components/dashboard2/GreetingHeader';
import AccountSection from '../components/dashboard2/AccountSection';
import { Landmark, CreditCard, Sprout, Umbrella, LifeBuoy, RefreshCw, ChevronDown, ChevronRight, Menu } from 'lucide-react';

const Dashboard2 = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-50 font-sans">
            <Sidebar2 isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <main className="flex-1 p-4 lg:p-12 overflow-y-auto w-full">

                {/* Mobile Header with Hamburger */}
                <div className="lg:hidden flex items-center mb-6">
                    <button onClick={() => setSidebarOpen(true)} className="text-gray-700 mr-4">
                        <Menu size={24} />
                    </button>
                    <span className="font-serif font-bold text-lg">First Road Advisors</span>
                </div>

                <GreetingHeader name="Alex" />

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Column */}
                    <div className="flex-[2] space-y-6"> {/* Separate cards with gap */}

                        {/* Cash Card */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <AccountSection
                                title="Cash"
                                items={[
                                    { icon: <Landmark className="text-teal-700" size={24} />, title: 'Cash Reserve', value: '$10,000.00' },
                                    { icon: <CreditCard className="text-blue-700" size={24} />, title: 'Checking', value: '$5,000.00' }
                                ]}
                            />
                        </div>

                        {/* Investing Card */}
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <AccountSection
                                title="Investing"
                                actionLabel="See performance"
                                items={[
                                    { icon: <Sprout className="text-green-700" size={24} />, title: 'General Investing', subtitle: 'Individual taxable', value: '$5,000.00' },
                                    { icon: <Umbrella className="text-orange-600" size={24} />, title: 'Retirement', subtitle: 'Joint taxable', value: '$10,000.00' },
                                    { icon: <LifeBuoy className="text-blue-900" size={24} />, title: 'Safety Net', subtitle: 'Joint taxable', value: '$20,000.00' }
                                ]}
                            />
                        </div>
                    </div>

                    {/* Right Column - Merged Widgets */}
                    <div className="w-full lg:w-96 space-y-6">

                        {/* Net Worth & Performance merged into one card */}
                        <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-200">

                            {/* Net Worth Section */}
                            <div className="mb-6">
                                <div className="flex justify-between items-center mb-4 cursor-pointer">
                                    <h3 className="font-bold text-gray-900">Net worth</h3>
                                    <ChevronDown size={16} className="text-gray-400" />
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Total net worth</span>
                                        <span className="font-bold text-gray-900">$30,000.00</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Betterment balance</span>
                                        <span className="font-bold text-gray-900">$23,000.00</span>
                                    </div>
                                    <div className="mt-2 text-sm text-blue-600 font-medium hover:underline cursor-pointer">
                                        See breakdown
                                    </div>
                                </div>
                            </div>

                            {/* Thick Divider */}
                            <div className="h-[2px] bg-gray-100 my-6"></div>

                            {/* Investment Performance Section */}
                            <div>
                                <div className="flex justify-between items-center mb-4 cursor-pointer">
                                    <h3 className="font-bold text-gray-900">Investment performance</h3>
                                    <ChevronDown size={16} className="text-gray-400" />
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Total earned</span>
                                        <span className="font-bold text-gray-900">$2,00.000</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Dividends earned</span>
                                        <span className="font-bold text-gray-900">$150.00</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Tax losses harvested</span>
                                        <span className="font-medium text-blue-600 cursor-pointer">Turn on</span>
                                    </div>
                                    <div className="mt-2 text-sm text-blue-600 font-medium hover:underline cursor-pointer">
                                        See detail
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scheduled Transactions */}
                        <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-200">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-gray-900">Scheduled transactions</h3>
                                <span className="text-sm text-blue-600 font-medium cursor-pointer hover:underline">See detail</span>
                            </div>
                            <div className="bg-emerald-50/50 p-4 rounded-md flex gap-3 items-start border border-emerald-100 custom-dashed-border">
                                <div className="bg-white p-1.5 rounded-full shadow-sm text-emerald-600 mt-1">
                                    <RefreshCw size={14} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                        Setting a recurring transaction can make it easier to save by putting it on autopilot.
                                    </p>
                                </div>
                                <ChevronRight size={16} className="text-gray-400 mt-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard2;
