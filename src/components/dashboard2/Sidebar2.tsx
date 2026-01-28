import React from 'react';
import { Home, Umbrella, Banknote, Smartphone, PlusCircle, X } from 'lucide-react';
import logo from '../../assets/logo.png';

interface Sidebar2Props {
    isOpen?: boolean;
    onClose?: () => void;
}

const Sidebar2 = ({ isOpen = false, onClose }: Sidebar2Props) => {
    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Sidebar Container */}
            <div className={`
            fixed top-0 left-0 bottom-0 z-50 w-64 bg-slate-900 text-white flex flex-col font-sans transition-transform duration-300 transform 
            lg:translate-x-0 lg:static lg:z-auto
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
                <div className="p-6">
                    <div className="flex justify-between items-start mb-8">
                        <div className="flex items-center gap-2">
                            {/* Logo */}
                            <div className="bg-white text-slate-900 rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center overflow-hidden">
                                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                            </div>
                            <h1 className="text-lg font-serif font-medium leading-tight whitespace-nowrap">
                                First Road Advisors
                            </h1>
                        </div>
                        {/* Close button for mobile */}
                        <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white mt-1">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="mb-8">
                        <div className="text-xs text-slate-500 uppercase tracking-widest mb-4">Your Advisor</div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-700"></div> {/* Avatar Placeholder */}
                            <div>
                                <div className="text-sm font-medium">Tom Advisor</div>
                                <div className="h-1 w-12 bg-slate-700 rounded-full mt-1"></div>
                                <div className="h-1 w-8 bg-slate-700 rounded-full mt-1"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-4">
                    {/* Home Icon - Keeping as clear/outline style */}
                    <NavItem
                        icon={<Home size={24} />}
                        className="text-white hover:bg-slate-800"
                    />

                    <div className="pt-2 space-y-4">
                        {/* Yellow Umbrella - White Box */}
                        <NavItem
                            icon={<Umbrella size={24} className="text-yellow-400 fill-yellow-400" />}
                            className="bg-white hover:bg-gray-100 shadow-sm"
                        />

                        {/* Teal Banknote - White Box */}
                        <NavItem
                            icon={<Banknote size={24} className="text-teal-400 fill-teal-400" />}
                            className="bg-white hover:bg-gray-100 shadow-sm"
                        />

                        {/* Blue Smartphone - White Box */}
                        <NavItem
                            icon={<Smartphone size={24} className="text-blue-500 fill-blue-500" />}
                            className="bg-white hover:bg-gray-100 shadow-sm"
                        />
                    </div>
                </nav>

                <div className="p-6">
                    <button className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                        <PlusCircle size={20} />
                        <span className="text-sm">Add new</span>
                    </button>
                </div>
            </div>
        </>
    );
};

interface NavItemProps {
    icon: React.ReactNode;
    className?: string;
}

const NavItem = ({ icon, className = '' }: NavItemProps) => {
    return (
        <div className={`cursor-pointer transition-colors w-10 h-10 flex items-center justify-center rounded-lg ${className} ${!className.includes('bg-') && 'text-slate-400 hover:text-white'}`}>
            {icon}
        </div>
    );
}

export default Sidebar2;
