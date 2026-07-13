
export type DrinkGroup = 'milk' | 'fruit' | 'coffee' | 'special'
export const DRINK_GROUPS: DrinkGroup[] = ['milk', 'fruit', 'coffee', 'special']


export type Temperature = 'hot' | 'cold' | 'room'
export const TEMPERATURES: Temperature[] = ['hot', 'cold', 'room']

//base: tea | coffee | milk ?
//secondary: powder | syrup 
export type IngredientType = 'base' | 'secondary' | 'boba' | 'topping' | 'sweetener'
export const INGREDIENT_TYPES: IngredientType[] = ['base', 'secondary', 'boba', 'sweetener', 'topping']

export type Size =  'medium' | 'large'
export const SIZES: Size[] = ['medium', 'large']

export interface Ingredient {
    name: string;
    type: IngredientType;
    lactose: boolean;
    sweetness: number;
    sourness: number;
    bitterness: number;
    saltiness: number;
    compatibleWith: DrinkGroup[];
    availableTemperatures: Temperature[];
}

export interface Drink {
    group: DrinkGroup;
    ingredients: Ingredient[];
    size: Size;
    customizableSweetness: boolean;
    sweetness: number;
    temperature: Temperature; 
}