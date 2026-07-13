'use client';

import { motion } from 'framer-motion';
import { useCreateDrink } from '../hooks/useCreateDrink';
import { useEffect, useState } from 'react';
import { Ingredient } from '../types/drinks';

type CupProps = {
  fillColor?: string;
  className?: string;
  delay?: number;
};

const Cup1 = ({ fillColor = '#fff', className, delay = 0, duration = 0.2 }: CupProps & { duration?: number }) => {
  return (
    <svg className={className} viewBox="0 0 133 117" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        key={`cup1-fill${fillColor}`}
        d="M0.5 58L5.5 116.6L128 116.5L132 58Z"
        fill={fillColor}
        // fillOpacity="0.35"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, ease: 'easeOut', delay }}
        style={{ transformBox: 'fill-box', transformOrigin: 'left center' }}
      />
      <line x1="1" y1="58.5004" x2="132" y2="58.5004" stroke="black" />
      <line x1="72.4727" y1="0.163362" x2="52.4727" y2="58.1634" stroke="black" />
      <path
        d="M94.6388 0.224533L94.1676 0.0571662L73.362 58.2739L73.8332 58.4413L74.3043 58.6086L95.1099 0.3919L94.6388 0.224533Z"
        fill="black"
      />
      <line x1="71.9998" y1="0.508606" x2="94.9998" y2="0.499992" stroke="black" />
      <line x1="0.498192" y1="57.9579" x2="5.49819" y2="116.6" stroke="black" />
      <line
        y1="-0.5"
        x2="59.0317"
        y2="-0.5"
        transform="matrix(-0.0847002 0.996406 -0.99645 -0.0841867 132 58.0004)"
        stroke="black"
      />
      <line x1="5" y1="116.5" x2="128" y2="116.5" stroke="black" />
    </svg>
  );
};

const Cup2 = ({ fillColor = '#fff', className, delay = 0.1, duration = 0.2 }: CupProps & { duration?: number }) => {
  return (
    <svg className={className} viewBox="0 0 123 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        key={`cup2-fill${fillColor}`}
        d="M0.5 0.96L5.5 56.96L117.5 57.04L122.5 1.04Z"
        fill={fillColor}
        // fillOpacity="0.35"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, ease: 'easeOut', delay }}
        style={{ transformBox: 'fill-box', transformOrigin: 'left center' }}
      />
      <line x1="0.498019" y1="0.955534" x2="5.49802" y2="56.9555" stroke="black" />
      <line x1="122.498" y1="1.04447" x2="117.498" y2="57.0445" stroke="black" />
      <line y1="0.5" x2="123" y2="0.5" stroke="black" />
      <line x1="6" y1="57.5" x2="118" y2="57.5" stroke="black" />
    </svg>
  );
};

const Cup3 = ({ fillColor = '#fff', className, delay = 0.2, duration = 0.2 }: CupProps & { duration?: number }) => {
  return (
    <svg className={className} viewBox="0 0 113 49" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        key={`cup3-fill${fillColor}`}
        d="M0.5 0.04L4.5 47.04L108.5 47.13L112.5 0.13Z"
        fill={fillColor}
        // fillOpacity="0.35"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, ease: 'easeOut', delay }}
        style={{ transformBox: 'fill-box', transformOrigin: 'left center' }}
      />
      <line x1="0.498199" y1="0.0423779" x2="4.4982" y2="47.0424" stroke="black" />
      <line x1="112.498" y1="0.127178" x2="108.498" y2="47.1272" stroke="black" />
      <line x1="1" y1="0.584778" x2="113" y2="0.584778" stroke="black" />
      <line x1="4.00481" y1="46.5848" x2="108.005" y2="47.5848" stroke="black" />
    </svg>
  );
};

const Cup4 = ({ fillColor = '#fff', className, delay = 0.3, duration = 0.2 }: CupProps & { duration?: number }) => {
  return (
    <svg className={className} viewBox="0 0 105 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        key={`cup4-fill${fillColor}`}
        d="M0.5 0.96L4.5 50.96L100.5 51.04L104.5 1.04Z"
        fill={fillColor}
        // fillOpacity="0.35"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, ease: 'easeOut', delay }}
        style={{ transformBox: 'fill-box', transformOrigin: 'left center' }}
      />
      <line x1="4" y1="51.4999" x2="100" y2="51.4999" stroke="black" />
      <line x1="0.498408" y1="0.960066" x2="4.49841" y2="50.9601" stroke="black" />
      <line x1="104.498" y1="1.03981" x2="100.498" y2="51.0398" stroke="black" />
      <line x1="0.00480747" y1="0.499962" x2="104.005" y2="1.49996" stroke="black" />
    </svg>
  );
};


const colorByBase: Record<string, string> = {
    'Улун': '#402f1f',
    'Кава': '#211509',
    'Безлактозне Молоко': '#fff',
    'Молоко': '#fff',
    'Жасмін': '#939448',
    'Асам': '#5c3e2e',
    'Ерл Грей': '#784c32',
}

const colorBySecondary: Record<string, string> = {
    'Полуниця Пудра': '#e6304b',
    'Кумква-Лимон Сироп': '#a0f56e',
    'Чорниця Сироп': '#20093b',
    'Полуниця Сироп': '#e8273e',
    'Апельсин Сироп': '#c9cf59',
    'Манго Сироп': '#cfbf59',
    'Матча Пудра': '#5db060',
    'Лічі Сироп': '#bf6656',
    'Білий Персик Сироп': '#ded690',
    'Вишня Сироп': '#690a1d',
    'Ананас Сироп': '#d1bc7d',
    'Таро Пудра': '#aa7dd1',
    'Яблуко Сироп': '#61bf5a',
    'Кокос Пудра': '#bababa',
    'Манго Пудра': '#d69722',
    'Маракуя Сироп': '#69082c',
    'Молоко': '#ffffff',
    'Вода': '#8bcde0',
}


export const RandomDrinkPage = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const { randomizeDrink } = useCreateDrink(ingredients);
  const [currentDrink, setCurrentDrink] = useState<Ingredient[]>([]);
  
  const drinkBase = currentDrink.find(ingredient => ingredient.type === 'base');
  const drinkSecondary = currentDrink.find(ingredient => ingredient.type === 'secondary');
  console.log('currentDrink', currentDrink, drinkBase, drinkSecondary);

  const parseDBIngredients = (dbIngredients: any[]): Ingredient[] => {
    return dbIngredients.map((dbIngredient) => ({
      name: dbIngredient.name,
      type: dbIngredient.ingredient_type,
      lactose: dbIngredient.lactose,
      sweetness: dbIngredient.sweetness,
      sourness: dbIngredient.sourness,
      bitterness: dbIngredient.bitterness,
      saltiness: dbIngredient.saltiness,
      compatibleWith: dbIngredient.compatible_with,
      availableTemperatures: dbIngredient.available_temperatures,
    }));
  };

  const handleGetIngredients = async () => {
    try {
      const response = await fetch('/api/getIngredients');
      const data = await response.json();
      setIngredients(parseDBIngredients(data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendMessage = async (message: string) => {
    try {
      const response = await fetch('/api/messaging', {
        method: 'POST',
        body: JSON.stringify({
          text: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetIngredients();
  }, []);

  const createStringFromIngredients = (ingredients: Ingredient[], orderId: number): string => {
    const string = `Замовлення #${orderId}:\n` + ingredients.map((ingredient) => `- ${ingredient.name}`).join('\n');
    return string;
  };

  const handleRandomizeDrink = () => {
    const orderId = Math.floor(Math.random() * 1000); // Generate a random order ID
    const drink = randomizeDrink();
    setCurrentDrink(drink);
    console.log('Randomized drink:', drink);
    const message = `${createStringFromIngredients(drink, orderId)}`;
    handleSendMessage(message);
  };

  return (
    <div className="flex flex-col justify-center w-full h-[calc(100vh-var(--header-height))] gap-4 bg-maomi-green/20">
      <div className="flex relative flex-col justify-center items-center w-full h-full gap-1 p-10! ">
        {currentDrink.length <= 0 && (
            <div className="flex absolute w-full h-full  backdrop-blur-sm bg-neutral-700/40 flex-col justify-center items-center gap-1">
                <button className="bg-maomi-green font-extrabold p-4! text-white px-4 py-2 rounded-xl" onClick={handleRandomizeDrink}>
                    ЗГЕНЕРУЙ СОБІ НАПІЙ!!
                </button>
            </div>
        )}
        <Cup1 fillColor={drinkSecondary ? colorBySecondary[drinkSecondary.name] : 'transparent'} className="w-[200px] h-auto" delay={0.7} duration={0.3} />
        <Cup2 fillColor={drinkSecondary ? colorBySecondary[drinkSecondary.name] : 'transparent'}className="w-[185px] h-auto" delay={0.7} duration={0.3} />
        <Cup3 fillColor={drinkBase ? colorByBase[drinkBase.name] : 'transparent'} className="w-[170px] h-auto" delay={0.2} duration={0.3} />
        <Cup4 fillColor={drinkBase ? colorByBase[drinkBase.name] : 'transparent'} className="w-[158px] h-auto  -top-0.5 " delay={0.2} duration={0.3} />
      </div>
    </div>
  );
};

export default RandomDrinkPage;
