import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface AccountItem {
    icon: React.ReactNode;
    title: string;
    subtitle?: string;
    value: string;
}

interface AccountSectionProps {
    title: string;
    items: AccountItem[];
    actionLabel?: string;
}

const AccountSection = ({ title, items, actionLabel }: AccountSectionProps) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="mb-0"> {/* Removed mb-8 to let parent handle spacing with dividers */}
            <div
                className="flex justify-between items-center mb-4 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="font-bold text-gray-900 text-base">{title}</h3> {/* Matched header style */}
                <div className="flex items-center gap-4">
                    {actionLabel && <span className="text-sm text-blue-600 font-medium hover:underline" onClick={(e) => e.stopPropagation()}>{actionLabel}</span>}
                    {isOpen ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                </div>
            </div>

            {isOpen && (
                <div className="divide-y divide-gray-100 border-t border-gray-100"> {/* Added top border for clear separation from header */}
                    {items.map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-4 hover:bg-gray-50 transition-colors group cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-600">
                                    {item.icon}
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                                    {item.subtitle && <div className="text-xs text-gray-500 mt-0.5">{item.subtitle}</div>}
                                </div>
                            </div>
                            <div className="font-bold text-gray-900">{item.value}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AccountSection;
