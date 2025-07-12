import React from 'react'

interface Hadith {
    id: string;
    text: string;
    reference: string;
    category: string;
  }


  const hadiths: Record<string, Hadith[]> = {
    all: [
      { id: '1', text: 'The believer is not one who eats his fill while his neighbor goes hungry.', reference: 'Al-Adab Al-Mufrad', category: 'all' },
      { id: '2', text: 'Kindness is a mark of faith, and whoever is not kind has no faith.', reference: 'Sahih Muslim', category: 'all' },
      { id: '3', text: 'The best of people are those who benefit others.', reference: 'Musnad Ahmad', category: 'all' },
      { id: '4', text: 'None of you truly believes until he loves for his brother what he loves for himself.', reference: 'Sahih Bukhari', category: 'all' },
      { id: '5', text: 'The world is green and beautiful, and Allah has appointed you as His stewards over it.', reference: 'Sahih Muslim', category: 'all' },
      { id: '6', text: 'Smile in the face of your brother, for it is charity.', reference: 'Sunan At-Tirmidhi', category: 'all' },
      { id: '7', text: 'The strong person is not the one who can wrestle someone else down. The strong person is the one who can control himself when he is angry.', reference: 'Sahih Bukhari', category: 'all' }
    ],
    faith: [
      { id: 'f1', text: 'Faith is that which resides firmly in the heart and which is proved by deeds.', reference: 'Hadith Qudsi', category: 'faith' },
      { id: 'f2', text: 'The believer is not one who eats his fill while his neighbor goes hungry.', reference: 'Al-Adab Al-Mufrad', category: 'faith' },
      { id: 'f3', text: 'Faith has over seventy branches, and modesty is a branch of faith.', reference: 'Sahih Muslim', category: 'faith' },
      { id: 'f4', text: 'None of you truly believes until he loves for his brother what he loves for himself.', reference: 'Sahih Bukhari', category: 'faith' }
    ],
    prayer: [
      { id: 'p1', text: 'Prayer is the pillar of religion and whoever abandons it demolishes the pillar of religion.', reference: 'Sunan Al-Bayhaqi', category: 'prayer' },
      { id: 'p2', text: 'The key to paradise is prayer, and the key to prayer is ablution.', reference: 'Musnad Ahmad', category: 'prayer' },
      { id: 'p3', text: 'Between faith and unbelief is the abandonment of prayer.', reference: 'Sahih Muslim', category: 'prayer' },
      { id: 'p4', text: 'The first thing that the servant will be held accountable for on the Day of Judgment is prayer.', reference: 'Sunan An-Nasa\'i', category: 'prayer' }
    ],
    charity: [
      { id: 'c1', text: 'Charity does not decrease wealth.', reference: 'Sahih Muslim', category: 'charity' },
      { id: 'c2', text: 'The believer\'s shade on the Day of Resurrection will be his charity.', reference: 'Sunan At-Tirmidhi', category: 'charity' },
      { id: 'c3', text: 'Every act of kindness is a charity.', reference: 'Sahih Muslim', category: 'charity' },
      { id: 'c4', text: 'Give charity without delay, for it stands in the way of calamity.', reference: 'Sunan At-Tirmidhi', category: 'charity' }
    ],
    character: [
      { id: 'ch1', text: 'The best of people are those who benefit others.', reference: 'Musnad Ahmad', category: 'character' },
      { id: 'ch2', text: 'Kindness is a mark of faith, and whoever is not kind has no faith.', reference: 'Sahih Muslim', category: 'character' },
      { id: 'ch3', text: 'The most complete believer in faith is the one who is best in character.', reference: 'Sunan At-Tirmidhi', category: 'character' },
      { id: 'ch4', text: 'The strong person is not the one who can wrestle someone else down. The strong person is the one who can control himself when he is angry.', reference: 'Sahih Bukhari', category: 'character' }
    ],
    knowledge: [
      { id: 'k1', text: 'Seek knowledge from the cradle to the grave.', reference: 'Sunan Ibn Majah', category: 'knowledge' },
      { id: 'k2', text: 'The ink of the scholar is more sacred than the blood of the martyr.', reference: 'Sunan At-Tirmidhi', category: 'knowledge' },
      { id: 'k3', text: 'One who treads a path in search of knowledge has Allah making his path to Paradise easy.', reference: 'Sahih Muslim', category: 'knowledge' },
      { id: 'k4', text: 'The world is cursed and what is in it is cursed, except for the remembrance of Allah and what is conducive to that, or one who teaches or learns.', reference: 'Sunan At-Tirmidhi', category: 'knowledge' }
    ],
    family: [
      { id: 'fa1', text: 'Paradise lies at the feet of your mother.', reference: 'Sunan An-Nasa\'i', category: 'family' },
      { id: 'fa2', text: 'The best of you is the one who is best to his family.', reference: 'Sunan At-Tirmidhi', category: 'family' },
      { id: 'fa3', text: 'A father gives nothing better to his child than a good education.', reference: 'Sunan At-Tirmidhi', category: 'family' },
      { id: 'fa4', text: 'Be dutiful to your mother, for Paradise is under her feet.', reference: 'Sunan An-Nasa\'i', category: 'family' }
    ]
  };

export default function Hadiths() {

    function generateHaith() {
        console.log('hadith not fetched')
    }
  return (
    <div>hadiths</div>
  )
}
