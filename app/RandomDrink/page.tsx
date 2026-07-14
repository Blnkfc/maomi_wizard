'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCreateDrink } from '../hooks/useCreateDrink';
import { useEffect, useState } from 'react';
import { Drink, Ingredient } from '../types/drinks';
import { BobaSvg } from '../components/BobaSvg';

type CupProps = {
  fillColor?: string | string[];
  className?: string;
  delay?: number;
  width?: number;
  strokeColor?: string;
};

// const Cup1 = ({ fillColor = '#fff', className, delay = 0, duration = 0.2 }: CupProps & { duration?: number }) => {
//   return (
//     <svg className={className} viewBox="0 0 133 117" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <motion.path
//         key={`cup1-fill${fillColor}`}
//         d="M0.5 58L5.5 116.6L128 116.5L132 58Z"
//         fill={fillColor}
//         fillOpacity="0.85"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration, ease: 'easeOut', delay }}
//         style={{ transformBox: 'fill-box', transformOrigin: 'left center' }}
//       />
//       <line x1="1" y1="58.5004" x2="132" y2="58.5004" stroke="black" />
//       <line x1="72.4727" y1="0.163362" x2="52.4727" y2="58.1634" stroke="black" />
//       <path
//         d="M94.6388 0.224533L94.1676 0.0571662L73.362 58.2739L73.8332 58.4413L74.3043 58.6086L95.1099 0.3919L94.6388 0.224533Z"
//         fill="black"
//       />
//       <line x1="71.9998" y1="0.508606" x2="94.9998" y2="0.499992" stroke="black" />
//       <line x1="0.498192" y1="57.9579" x2="5.49819" y2="116.6" stroke="black" />
//       <line
//         y1="-0.5"
//         x2="59.0317"
//         y2="-0.5"
//         transform="matrix(-0.0847002 0.996406 -0.99645 -0.0841867 132 58.0004)"
//         stroke="black"
//       />
//       <line x1="5" y1="116.5" x2="128" y2="116.5" stroke="black" />
//     </svg>
//   );
// };

// const Cup2 = ({ fillColor = '#fff', className, delay = 0.1, duration = 0.2 }: CupProps & { duration?: number }) => {
//   return (
//     <svg className={className} viewBox="0 0 123 58" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <motion.path
//         key={`cup2-fill${fillColor}`}
//         d="M0.5 0.96L5.5 56.96L117.5 57.04L122.5 1.04Z"
//         fill={fillColor}
//         fillOpacity="0.85"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration, ease: 'easeOut', delay }}
//         style={{ transformBox: 'fill-box', transformOrigin: 'left center' }}
//       />
//       <line x1="0.498019" y1="0.955534" x2="5.49802" y2="56.9555" stroke="black" />
//       <line x1="122.498" y1="1.04447" x2="117.498" y2="57.0445" stroke="black" />
//       <line y1="0.5" x2="123" y2="0.5" stroke="black" />
//       <line x1="6" y1="57.5" x2="118" y2="57.5" stroke="black" />
//     </svg>
//   );
// };

// const Cup3 = ({ fillColor = '#fff', className, delay = 0.2, duration = 0.2 }: CupProps & { duration?: number }) => {
//   return (
//     <svg className={className} viewBox="0 0 113 49" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <motion.path
//         key={`cup3-fill${fillColor}`}
//         d="M0.5 0.04L4.5 47.04L108.5 47.13L112.5 0.13Z"
//         fill={fillColor}
//         fillOpacity="0.85"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration, ease: 'easeOut', delay }}
//         style={{ transformBox: 'fill-box', transformOrigin: 'left center' }}
//       />
//       <line x1="0.498199" y1="0.0423779" x2="4.4982" y2="47.0424" stroke="black" />
//       <line x1="112.498" y1="0.127178" x2="108.498" y2="47.1272" stroke="black" />
//       <line x1="1" y1="0.584778" x2="113" y2="0.584778" stroke="black" />
//       <line x1="4.00481" y1="46.5848" x2="108.005" y2="47.5848" stroke="black" />
//     </svg>
//   );
// };

// const Cup4 = ({ fillColor = '#fff', className, delay = 0.3, duration = 0.2 }: CupProps & { duration?: number }) => {
//   return (
//     <svg className={className} viewBox="0 0 105 52" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <motion.path
//         key={`cup4-fill${fillColor}`}
//         d="M0.5 0.96L4.5 50.96L100.5 51.04L104.5 1.04Z"
//         fill={fillColor}
//         fillOpacity="0.85"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration, ease: 'easeOut', delay }}
//         style={{ transformBox: 'fill-box', transformOrigin: 'left center' }}
//       />
//       <line x1="4" y1="51.4999" x2="100" y2="51.4999" stroke="black" />
//       <line x1="0.498408" y1="0.960066" x2="4.49841" y2="50.9601" stroke="black" />
//       <line x1="104.498" y1="1.03981" x2="100.498" y2="51.0398" stroke="black" />
//       <line x1="0.00480747" y1="0.499962" x2="104.005" y2="1.49996" stroke="black" />
//     </svg>
//   );
// };

const FullCup = ({ fillColor = ['#fff'], className, delay = 0.3, duration = 0.2, width = 133, strokeColor = 'white' }: CupProps & { duration?: number }) => {
  const fillColors = Array.isArray(fillColor) ? fillColor : [fillColor];
  const cupFillPath =
    'M0.5 58L5.5 116.6L10.5 172.956L14.5 219.96L18 270.5L114 270.5L118.5 220.04L122.5 173.045L127.5 117.045L132 58Z';
  const baseWidth = 133;
  const baseHeight = 271;
  const safeWidth = Math.max(1, width);
  const scaledHeight = (safeWidth / baseWidth) * baseHeight;

  return (
    <div className="relative overflow-hidden" style={{ width: safeWidth, height: scaledHeight }}>
      <svg className={className} width={safeWidth} height={scaledHeight} viewBox="0 0 133 271" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g style={{ isolation: 'isolate' }}>
          {fillColors.map((color, index) => {
            const layerDelay = index === 0 ? BASE_COLOR_APPEAR_DELAY : index === 1 ? SECONDARY_COLOR_APPEAR_DELAY : delay;
            const layerDuration = index === 0 ? BASE_COLOR_APPEAR_DURATION : index === 1 ? SECONDARY_COLOR_APPEAR_DURATION : duration;

            return (
              <motion.path
                key={`fullcup-backdrop-${color}-${index}`}
                d={cupFillPath}
                fill={color}
                style={{ mixBlendMode: 'multiply' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.55 }}
                transition={{ duration: layerDuration, ease: 'easeOut', delay: layerDelay }}
              />
            );
          })}
        </g>

        <line x1="1" y1="58.5004" x2="132" y2="58.5004" stroke={strokeColor} />
        <line x1="72.4727" y1="0.163362" x2="52.4727" y2="58.1634" stroke={strokeColor} />
        <path
          d="M94.6388 0.224533L94.1676 0.0571662L73.362 58.2739L73.8332 58.4413L74.3043 58.6086L95.1099 0.3919L94.6388 0.224533Z"
          fill={strokeColor}
        />
        <line x1="71.9998" y1="0.508606" x2="94.9998" y2="0.499992" stroke={strokeColor} />
        <line x1="0.498192" y1="57.9579" x2="5.49819" y2="116.6" stroke={strokeColor} />
        <line y1="-0.5" x2="59.0317" y2="-0.5" transform="matrix(-0.0847002 0.996406 -0.99645 -0.0841867 132 58.0004)" stroke={strokeColor} />
        <line x1="5.49802" y1="116.956" x2="10.498" y2="172.956" stroke={strokeColor} />
        <line x1="127.498" y1="117.045" x2="122.498" y2="173.045" stroke={strokeColor} />
        <line x1="10.4982" y1="172.958" x2="14.4982" y2="219.958" stroke={strokeColor} />
        <line x1="122.498" y1="173.043" x2="118.498" y2="220.043" stroke={strokeColor} />
        <line x1="18" y1="270.5" x2="114" y2="270.5" stroke={strokeColor} />
        <line x1="14.4984" y1="219.96" x2="18.4984" y2="269.96" stroke={strokeColor} />
        <line x1="118.498" y1="220.04" x2="114.498" y2="270.04" stroke={strokeColor} />
      </svg>
    </div>
  );
};

// const Cup1 = ({ fillColor = 'transparent', className, delay = 0.3, duration = 0.2, strokeColor }: CupProps & { duration?: number }) => {
//   return <FullCup fillColor={fillColor} className={className} delay={delay} duration={duration} strokeColor={strokeColor} />;
// };

// const Cup2 = ({ fillColor = 'transparent', className, delay = 0.3, duration = 0.2, strokeColor }: CupProps & { duration?: number }) => {
//   return <FullCup fillColor={fillColor} className={className} delay={delay} duration={duration} strokeColor={strokeColor} />;
// };

// const Cup3 = ({ fillColor = 'transparent', className, delay = 0.3, duration = 0.2, strokeColor }: CupProps & { duration?: number }) => {
//   return <FullCup fillColor={fillColor} className={className} delay={delay} duration={duration} strokeColor={strokeColor} />;
// };

// const Cup4 = ({ fillColor = 'transparent', className, delay = 0.3, duration = 0.2, strokeColor }: CupProps & { duration?: number }) => {
//   return <FullCup fillColor={fillColor} className={className} delay={delay} duration={duration} strokeColor={strokeColor} />;
// };

const colorByBase: Record<string, string> = {
  Улун: '#402f1f',
  Кава: '#211509',
  'Безлактозне Молоко': '#fff',
  Молоко: '#fff',
  Жасмін: '#939448',
  Асам: '#5c3e2e',
  'Ерл Грей': '#784c32',
};

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
  Молоко: '#ffffff',
  Вода: '#8bcde0',
};

const BASE_COLOR_APPEAR_DELAY = 0.4;
const BASE_COLOR_APPEAR_DURATION = 0.5;
const SECONDARY_COLOR_APPEAR_DELAY = BASE_COLOR_APPEAR_DELAY + BASE_COLOR_APPEAR_DURATION + 0.5;
const SECONDARY_COLOR_APPEAR_DURATION = 0.5;
const BOBA_APPEAR_DELAY = SECONDARY_COLOR_APPEAR_DELAY + SECONDARY_COLOR_APPEAR_DURATION + 0.1;
const BOBA_APPEAR_DURATION = 0.5;
const STATS_APPEAR_DELAY = BOBA_APPEAR_DELAY + BOBA_APPEAR_DURATION + 0.1;
const STATS_APPEAR_DURATION = 0.3;

const AnimatedBobaCluster = ({ baseColor }: { baseColor: string }) => {

  const bobaPositionsByIndex:Record<number, string> = {
    0: 'absolute top-1/2 left-1/2 translate-x-[-20%] translate-y-[-80%]',
    1: 'absolute top-1/2 left-1/2 translate-x-[-100%] translate-y-[-80%]',
    2: 'absolute top-1/2 left-1/2 translate-x-[-130%] translate-y-[-30%]',
    3: 'absolute top-1/2 left-1/2 translate-x-[-40%] translate-y-[-20%]',
    4: 'absolute top-1/2 left-1/2 translate-x-[35%] translate-y-[-35%]',
  }


  const getRandomY = () => {
    return Math.floor(Math.random() * 100)+ 75; 
  }

  const getRandomDuration = () => {
    return Math.floor(Math.random() * 5)/10 + 0.2;
  }
 

  return (
    <div className={'absolute bottom-0 w-[158px] h-[75px] '} >
      {Array.from({length: 5}).map((_, index) => (
        <motion.div
          key={'boba'+index}
          className={bobaPositionsByIndex[index]}
          initial={{ y: getRandomY() }}
          animate={{ y: 0 }}
          transition={{ duration: getRandomDuration(), delay: BOBA_APPEAR_DELAY, ease: 'easeOut' }}
        >
          <BobaSvg radius={20} strokeWidth={4} baseColor={baseColor} />
        </motion.div>
      ))}
    </div>
  )
}






export const RandomDrinkPage = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const { randomizeDrink } = useCreateDrink(ingredients);
  const [currentDrink, setCurrentDrink] = useState<Drink | null>(null);
  const [drinkStats, setDrinkStats] = useState<{
    sweetness: number;
    sourness: number;
    bitterness: number;
    saltiness: number;
  } | null>(null);
  const drinkBase = currentDrink?.ingredients.find((ingredient) => ingredient.type === 'base');
  const drinkSecondary = currentDrink?.ingredients.find((ingredient) => ingredient.type === 'secondary');
  const drinkBoba = currentDrink?.ingredients.find((ingredient) => ingredient.type === 'boba');
  console.log('ingredients', ingredients);

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
      customizableAmount: dbIngredient.customizable_amount,
      assignedColor: dbIngredient.assigned_color,
      amountRange: dbIngredient.customizable_amount
        ? dbIngredient.amount_mode === 'range'
          ? [dbIngredient.amount_min ?? 0, dbIngredient.amount_max ?? 0]
          : 'user_specified'
        : undefined,
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

  const createStringFromIngredients = (drink: Drink, orderId: number): string => {
    const base = drink.ingredients.find((ingredient) => ingredient.type === 'base');
    const secondary = drink.ingredients.find((ingredient) => ingredient.type === 'secondary');
    const boba = drink.ingredients.find((ingredient) => ingredient.type === 'boba');
    const sweetener = drink.ingredients.find((ingredient) => ingredient.type === 'sweetener');
    const topping = drink.ingredients.find((ingredient) => ingredient.type === 'topping');
    console.log('GOT RES', drink);

    const string =
      `Замовлення #${orderId}:\n` +
      `- ${base?.name} \n` +
      `- ${secondary?.name} \n` +
      `- ${boba?.name} \n` +
      `- ${sweetener?.name} ${drink.customizableSweetness ? `x${drink.sweetness}` : ''} \n` +
      `- ${topping?.name}`;
    return string;
  };

  const handleRandomizeDrink = () => {
    const orderId = Math.floor(Math.random() * 1000); // Generate a random order ID
    const drink = randomizeDrink();
    setCurrentDrink(drink);
    console.log('Randomized drink:', drink);
    const stats = {
      sweetness: drink.sweetness + drink.ingredients.reduce((acc, ingredient) => acc + ingredient.sweetness, 0),
      sourness: drink.ingredients.reduce((acc, ingredient) => acc + ingredient.sourness, 0),
      bitterness: drink.ingredients.reduce((acc, ingredient) => acc + ingredient.bitterness, 0),
      saltiness: drink.ingredients.reduce((acc, ingredient) => acc + ingredient.saltiness, 0),
    };
    setDrinkStats(stats);
    const message = `${createStringFromIngredients(drink, orderId)}`;
    handleSendMessage(message);
  };

  return (
    <div className="flex flex-col justify-center w-full h-[calc(100vh-var(--header-height))] gap-4 bg-maomi-green/20">
      <div className="flex relative flex-col justify-center items-center w-full h-full gap-1 p-10! ">
        <AnimatePresence>
          {currentDrink === null && (
            <div
              key="random-backdrop"
              className="flex absolute z-100 w-full h-full  backdrop-blur-sm bg-neutral-700/40 flex-col justify-center items-center gap-1"
            >
              <button
                key="random-button"
                className="bg-maomi-green font-extrabold p-4! text-white px-4 py-2 rounded-xl"
                onClick={handleRandomizeDrink}
              >
                ЗГЕНЕРУЙ СОБІ НАПІЙ!!
              </button>
            </div>
          )}
          <div className={'flex'}>
            <motion.div layout className="flex flex-col gap-1 justify-center items-center relative overflow-hidden">
                <FullCup className="relative z-10 " strokeColor='black' width={200} fillColor={[drinkBase?.assignedColor ?? '', drinkSecondary?.assignedColor ?? '']} /> 
              { currentDrink &&
                <AnimatedBobaCluster baseColor={drinkBoba?.assignedColor ?? '#6e4a32'} />
              }
            </motion.div>
            {drinkStats && (
              <motion.div
                layout
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '200px' }}
                transition={{ duration: STATS_APPEAR_DURATION, ease: 'easeOut', delay: STATS_APPEAR_DELAY }}
                exit={{ opacity: 0 }}
                key="drink-stats"
                className="flex justify-center gap-6 flex-col p-4! font-bold"
              >
                <div>
                  Солодкість:{' '}
                  <div className="flex gap-1">
                    {Array.from({ length: drinkStats.sweetness }).map((_, index) => (
                      <BobaSvg
                        key={index}
                        baseColor="#6e4a32"
                        radius={6}
                        strokeWidth={2}
                        appearDelay={ STATS_APPEAR_DELAY + STATS_APPEAR_DURATION + index * 0.1}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  Кислинка:{' '}
                  <div className="flex gap-1">
                    {Array.from({ length: drinkStats.sourness }).map((_, index) => (
                      <BobaSvg
                        key={index}
                        baseColor="#2fa356"
                        radius={6}
                        strokeWidth={2}
                        appearDelay={ STATS_APPEAR_DELAY + STATS_APPEAR_DURATION + index * 0.1}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  Гіркота:{' '}
                  <div className="flex gap-1">
                    {Array.from({ length: drinkStats.bitterness }).map((_, index) => (
                      <BobaSvg
                        key={index}
                        baseColor="#704a9e"
                        radius={6}
                        strokeWidth={2}
                        appearDelay={ STATS_APPEAR_DELAY + STATS_APPEAR_DURATION + index * 0.1}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  Солоність:{' '}
                  <div className="flex gap-1">
                    {Array.from({ length: drinkStats.saltiness }).map((_, index) => (
                      <BobaSvg
                        key={index}
                        baseColor="#63bfb6"
                        radius={6}
                        strokeWidth={2}
                        appearDelay={ STATS_APPEAR_DELAY + STATS_APPEAR_DURATION + index * 0.1}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RandomDrinkPage;
