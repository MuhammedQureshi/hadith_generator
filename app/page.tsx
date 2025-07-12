import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Share2, Heart, RefreshCw } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen text-white mx-auto p-[1.5rem]">
      <div className='bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden'>
        <div className='text-center'>
          <h1 className='text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent mb-4'>Hadith generator</h1>
          <p className='text-lg md:text-xl text-slate-300 max-w-3xl mx-auto'>Discover timeless wisdom and guidance from the teachings of Prophet Muhammad ﷺ</p>
        </div>
        <div>
          {/* select category */}
        </div>
        <div>
          {/* generate button */}
        </div>
        <div>
          {/* display hadith */}
        </div>
      </div>
  </div>
  );
}
