"use client";
import { useState } from "react";
import SelectCategory from "./selectCategory";
import GenerateButton from "./generateButton";
import Hadiths from "./hadiths";
import { hadiths } from "@/data";

export default function HadithGeneratorClient() {
  const [currentCategory, setCurrentCategory] = useState<string>("all");
  const [currentHadith, setCurrentHadith] = useState<any>(null);

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