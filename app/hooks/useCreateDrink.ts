import { DRINK_GROUPS, DrinkGroup, Ingredient } from "../types/drinks";

const STAGES = ['base', 'secondary', 'boba', 'sweetener', 'topping'] as const

export const useCreateDrink = (ingredients: Ingredient[]) => {
    
    const getRandomFromList = <T>(list: T[]): T => {
        const randomIndex = Math.floor(Math.random() * list.length);
        return list[randomIndex];
    }
    
    const randomizeDrink = () => {
        let stageIndex = 0;
        const selectedIngredients: Ingredient[] = [];
        console.log('useCreateDrink called with ingredients:', ingredients);
        let compatibiliityBracket: DrinkGroup[] = DRINK_GROUPS;
        while (stageIndex < STAGES.length) {
            
            const currentStage = STAGES[stageIndex];
            const availableIngredients = ingredients.filter(ingredient => ingredient.type === currentStage && ingredient.compatibleWith.some(group => compatibiliityBracket.includes(group)));
            console.log(`ADDING stage: ${currentStage}`, availableIngredients, compatibiliityBracket);
            const selectedIngredient = getRandomFromList(availableIngredients);
            console.log(`SELECTED stage1: ${currentStage}`, selectedIngredient);
            selectedIngredients.push(selectedIngredient);
            compatibiliityBracket = compatibiliityBracket.filter(group => selectedIngredient.compatibleWith.includes(group));
            stageIndex++;
        }
        console.log('created drink', selectedIngredients);
        return selectedIngredients;
    }
    return {
        randomizeDrink
    }

}