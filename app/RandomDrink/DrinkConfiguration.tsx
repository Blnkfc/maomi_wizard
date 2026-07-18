import { useState } from 'react';
import { Drink, Ingredient } from '../types/drinks';
import { RefreshCcw, Check } from 'lucide-react';

export const DrinkConfiguration = ({
  onRecreate,
  onSubmit,
  ingredients,
  editDrink,
  currentDrink,
  allIngredients,
}: {
  onRecreate: () => void;
  onSubmit: () => void;
  ingredients: Ingredient[];
  editDrink: (drink: Drink) => void;
  currentDrink: Drink | null;
  allIngredients: Ingredient[];
}) => {
  const [milkType, setMilkType] = useState<'regular' | 'lactose-free' | null>(null);
  //   const [lactoseFree, setLactoseFree] = useState(false);
  const hasMilk = ingredients.some(
    (ingredient) =>
      ingredient.type === 'base' && ingredient.compatibleWith.length === 1 && ingredient.compatibleWith[0] === 'milk'
  );

  const lactoseMilk = allIngredients?.find(
    (ingredient: Ingredient) =>
      ingredient.type === 'base' &&
      ingredient.lactose &&
      ingredient.compatibleWith.length === 1 &&
      ingredient.compatibleWith[0] === 'milk'
  );
  const lactoseFreeeMilk = allIngredients?.find(
    (ingredient: Ingredient) =>
      ingredient.type === 'base' &&
      !ingredient.lactose &&
      ingredient.compatibleWith.length === 1 &&
      ingredient.compatibleWith[0] === 'milk'
  );
  
  const editableIngredients = ingredients.filter((ingredient) => ingredient.customizableAmount);
  console.log('editableIngredients', editableIngredients, currentDrink);
  
  const handleMilkTypeChange = (type: 'regular' | 'lactose-free') => {
    setMilkType(type);
    if (currentDrink) {
      const newIngredients = currentDrink.ingredients.map((ingredient) => {
        if (ingredient.type === 'base' && ingredient.compatibleWith.includes('milk')) {
          return type === 'regular' ? lactoseMilk! : lactoseFreeeMilk!;
        }
        return ingredient;
      });
      const updatedDrink = { ...currentDrink, ingredients: newIngredients, milkType: type };
      editDrink(updatedDrink);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4!">
      {hasMilk && (
        <>
          Молоко:
          <div className={'flex w-full rounded-full border-1 border-maomi-green overflow-hidden text-stroke-small'}>
            <div
              style={{
                backgroundColor: milkType === 'regular' ? '#046f41' : 'transparent',
                color: 'white',
                padding: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleMilkTypeChange('regular')}
              className="flex-1"
            >
              Звичайне{' '}
            </div>
            <div
              style={{
                backgroundColor: milkType === 'lactose-free' ? '#046f41' : 'transparent',
                color: 'white',
                padding: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleMilkTypeChange('lactose-free')}
              className="flex-1"
            >
              Безлактозне{' '}
            </div>
          </div>
        </>
      )}
      <div className="flex w-full gap-1 justify-between">
        <div
          className={'flex justify-center items-center bg-maomi-green w-20 h-20 p-4 cursor-pointer rounded-lg'}
          onClick={onRecreate}
        >
          <RefreshCcw width={70} height={70} color="white" />
        </div>
        <div
          className={'flex justify-center items-center bg-maomi-green w-20 h-20 p-4 cursor-pointer rounded-lg'}
          onClick={onSubmit}
        >
          <Check width={70} height={70} color="white" />
        </div>
      </div>
    </div>
  );
};
