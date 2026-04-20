import React from 'react';
import { useNavigate } from 'react-router';
import { Home } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0F4A3F] flex items-center justify-center px-6 overflow-hidden">
      <div className="text-center max-w-md">
        {/* Large 404 Text */}
        <div className="relative">
          <h1 className="text-[160px] md:text-[200px] font-extralight text-white/5 tracking-[-10px] select-none">
            404
          </h1>
        </div>

        {/* Content */}
        <div className="-mt-16 md:-mt-20 mb-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Lost Connection
          </h2>
          <p className="text-gray-400 text-lg max-w-sm mx-auto">
            The page you're looking for doesn't exist or has been moved to another connection.
          </p>
        </div>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-3 bg-white hover:bg-[#4FD1C5] text-[#0F4A3F] hover:text-white px-8 py-4 rounded-2xl font-medium text-base transition-all duration-300 active:scale-95"
        >
          <Home size={22} />
          Return to Dashboard
        </button>

        {/* Subtle Brand Line */}
        <div className="mt-20 text-xs text-gray-500 tracking-widest">
          KEENKEEPER — NURTURE WHAT MATTERS
        </div>
      </div>
    </div>
  );
};

export default NotFound;