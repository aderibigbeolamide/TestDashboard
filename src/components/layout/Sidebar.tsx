import React from 'react';
import { Home, List, Users, Banknote, Presentation, FileText, X } from 'lucide-react';
import bettermentLogo from '../../assets/betterment_logo.png';
import settingsIcon from '../../assets/settings_icon.png';
import logoutIcon from '../../assets/logout_icon.png';

interface SidebarProps {
    isOpen?: boolean;
    onClose?: () => void;
}

const Sidebar = ({ isOpen = false, onClose }: SidebarProps) => {
    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Sidebar Container */}
            <div className={`
                fixed top-0 left-0 bottom-0 z-50 w-64 bg-sidebar text-white flex flex-col font-sans transition-transform duration-300 transform 
                lg:translate-x-0 lg:static lg:z-auto
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="p-6 flex justify-between items-start">
                    <div className="flex items-center gap-3">
                        <img src={bettermentLogo} alt="Betterment" className="w-8 h-8 object-contain" />
                        <div className="flex flex-col leading-none">
                            <span className="text-yellow-400 text-xl font-bold">Betterment</span>
                            <span className="text-white font-light text-xs tracking-wide">at Work</span>
                        </div>
                    </div>
                    {/* Close button for mobile */}
                    <button onClick={onClose} className="lg:hidden text-white/70 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                <nav className="flex-1 mt-6 overflow-y-auto">
                    <NavItem icon={<Home size={20} />} label="Dashboard" />
                    <NavItem icon={<List size={20} />} label="Tasks" badge="14" />

                    <div className="my-4 px-6 text-xs text-gray-400 uppercase tracking-wider">Your 401(k)</div>
                    <NavItem icon={<Users size={20} />} label="Employees" />
                    <NavItem icon={<Banknote size={20} />} label="Payroll" />
                    <NavItem icon={<Presentation size={20} />} label="Plan" active />
                    <NavItem icon={<FileText size={20} />} label="Resources" />

                    <div className="my-4 px-6 text-xs text-gray-400 uppercase tracking-wider">Your Account</div>
                    <NavItem
                        icon={<img src={settingsIcon} alt="Settings" className="w-5 h-5 object-contain" />}
                        label="Settings"
                    />
                    <NavItem
                        icon={<img src={logoutIcon} alt="Logout" className="w-5 h-5 object-contain" />}
                        label="Log out"
                    />
                </nav>
            </div>
        </>
    );
};

const NavItem = ({ icon, label, badge, active = false }: { icon: React.ReactNode, label: string, badge?: string, active?: boolean }) => {
    return (
        <div className={`flex items-center justify-between px-6 py-3 cursor-pointer transition-colors ${active ? 'bg-white/10 border-l-4 border-yellow-400' : 'hover:bg-white/5 border-l-4 border-transparent'}`}>
            <div className="flex items-center gap-3">
                <span className={active ? 'text-white' : 'text-gray-400'}>{icon}</span>
                <span className={`text-sm ${active ? 'font-medium' : 'text-gray-300'}`}>{label}</span>
            </div>
            {badge && (
                <span className="bg-blue-200 text-blue-800 text-xs px-2 py-0.5 rounded-full font-medium">
                    {badge}
                </span>
            )}
        </div>
    );
}

export default Sidebar;
