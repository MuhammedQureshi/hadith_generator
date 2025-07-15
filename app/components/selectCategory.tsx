'use client'
import { Dispatch, SetStateAction } from "react";

const categories = [
    { id: 'all', name: 'All', color: 'from-emerald-500 to-teal-500' },
    { id: 'faith', name: 'Faith', color: 'from-blue-500 to-cyan-500' },
    { id: 'prayer', name: 'Prayer', color: 'from-purple-500 to-pink-500' },
    { id: 'charity', name: 'Charity', color: 'from-yellow-500 to-orange-500' },
    { id: 'character', name: 'Character', color: 'from-red-500 to-rose-500' },
    { id: 'knowledge', name: 'Knowledge', color: 'from-indigo-500 to-purple-500' },
    { id: 'family', name: 'Family', color: 'from-green-500 to-emerald-500' }
  ];

interface SelectCategoryProps {
  currentCategory: string;
  setCurrentCategory: Dispatch<SetStateAction<string>>;
}

export default function SelectCategory({ currentCategory, setCurrentCategory }: SelectCategoryProps) {
  return (
    <div className="w-full max-w-4xl flex-wrap flex mx-auto justify-center">
    {categories.map((category) => (
        <div className="p-[0.20rem]" key={category.id}>
        <button
          onClick={() => setCurrentCategory(category.id)}
          className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
            currentCategory === category.id
              ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 scale-105'
              : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
          } border backdrop-blur-sm`}
        >
          {category.name}
        </button>
    </div>
      ))}

</div>
  )
}
