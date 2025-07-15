"use client"

type Hadith = {
  id: string;
  text: string;
  reference: string;
  category: string;
};

interface HadithsProps {
  currentHadith: Hadith | null;
}

export default function Hadiths({ currentHadith }: HadithsProps) {
  if (!currentHadith) {
    return <div className="text-center text-slate-400 mt-6">Click "Generate Hadith" to see a hadith.</div>;
  }
  return (
    <div className="mt-6 text-center bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 min-h-[300px] flex flex-col justify-center relative">
      <div className="text-xl md:text-2xl font-semibold mb-2">{currentHadith.text}</div>
      <div className="text-slate-400 text-sm mb-1">{currentHadith.reference}</div>
      <div className="text-emerald-400 text-xs">Category: {currentHadith.category.charAt(0).toUpperCase() + currentHadith.category.slice(1)}</div>
    </div>
  );
}
