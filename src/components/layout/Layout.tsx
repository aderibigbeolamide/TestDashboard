import { useState } from 'react';
import Sidebar from './Sidebar';
import { Menu } from 'lucide-react';
import bettermentLogo from '../../assets/betterment_logo.png';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <main className="flex-1 overflow-auto w-full"> {/* w-full ensures content takes width */}
                <div className="p-4 lg:p-8 max-w-7xl mx-auto">
                    {/* Mobile Header with Hamburger */}
                    <div className="lg:hidden flex items-center mb-6">
                        <button onClick={() => setSidebarOpen(true)} className="text-gray-700 mr-4">
                            <Menu size={24} />
                        </button>
                        <div className="flex items-center gap-3">
                            <img src={bettermentLogo} alt="Betterment" className="w-8 h-8 object-contain" />
                            <div className="flex flex-col leading-none">
                                <span className="text-yellow-500 text-lg font-bold">Betterment</span>
                                <span className="text-gray-600 font-light text-xs tracking-wide">at Work</span>
                            </div>
                        </div>
                    </div>

                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
