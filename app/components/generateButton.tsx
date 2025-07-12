"use client"
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react';
import React from 'react'
import { useState } from 'react';


export default function GenerateButton() {
    function generateHadith() {
        console.log("Function not implemented")
    }

    const [loading] = useState(false);

  return (
    <motion.div 
    className="flex justify-center mb-8"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.8 }}
  >
    <button
      onClick={generateHadith}
      disabled={loading}
      className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:from-emerald-500/50 disabled:to-teal-500/50 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 disabled:scale-100 disabled:cursor-not-allowed flex items-center gap-2"
    >
      {loading ? (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <RefreshCw className="w-5 h-5" />
          </motion.div>
          Generating Wisdom...
        </>
      ) : (
        'Generate Wisdom'
      )}
    </button>
  </motion.div>

  )
}
