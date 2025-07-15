"use client";
import { useState } from "react";
import SelectCategory from "./selectCategory";
import GenerateButton from "./generateButton";
import Hadiths from "./hadiths";
import { hadiths } from "@/data";

// Define Hadith type for type safety
type Hadith = {
  id: string;
  text: string;
  reference: string;
  category: string;
};

export default function HadithGeneratorClient() {
  const [currentCategory, setCurrentCategory] = useState<string>("all");
  const [currentHadith, setCurrentHadith] = useState<Hadith | null>(null);

  function generateHadith() {
    const categoryHadiths = hadiths[currentCategory] || hadiths["all"];
    const randomIndex = Math.floor(Math.random() * categoryHadiths.length);
    setCurrentHadith(categoryHadiths[randomIndex]);
  }

  return (
    <div>
      <SelectCategory currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
      <GenerateButton generateHadith={generateHadith} />
      <Hadiths currentHadith={currentHadith} />
    </div>
  );
}