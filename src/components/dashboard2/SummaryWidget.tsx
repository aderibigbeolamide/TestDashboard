import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SummaryWidgetProps {
    title: string;
    children: React.ReactNode;
    actionLabel?: string;
    defaultOpen?: boolean;
}

const SummaryWidget = ({ title, children, actionLabel, defaultOpen = true }: SummaryWidgetProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
            <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <h3 className="font-bold text-gray-900">{title}</h3>
                {isOpen ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
            </div>

            {isOpen && (
                <div>
                    {children}
                    {actionLabel && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <span className="text-blue-600 text-sm font-medium hover:underline cursor-pointer">{actionLabel}</span>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SummaryWidget;
