import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Share2, Heart, RefreshCw } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
    {/* Background Gradient */}
    <div className="fixed inset-0 bg-gradient-to-br from-emerald-950/50 via-slate-950 to-teal-950/50" />
    
    {/* Radial Gradients */}
    <div className="fixed inset-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
    </div>

    <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
      <div>
        <h1>Hadith Generator</h1>
      </div>
    </div>
  </div>
  );
}
