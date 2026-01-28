import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Dashboard2 from './pages/Dashboard2';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard1" replace />} />

        {/* Dashboard 1 (Betterment) */}
        <Route path="/dashboard1" element={
          <Layout>
            <Dashboard />
          </Layout>
        } />

        {/* Dashboard 2 (First Road) - Will have its own layout */}
        <Route path="/dashboard2" element={<Dashboard2 />} />
      </Routes>

      {/* Temporary Nav for testing */}
      <div className="fixed bottom-4 right-4 bg-white p-2 rounded shadow-lg flex gap-2 z-50">
        <Link to="/dashboard1" className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Page 1</Link>
        <Link to="/dashboard2" className="bg-blue-900 text-white px-3 py-1 rounded text-xs">Page 2</Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
