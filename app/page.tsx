'use client'
import Image from "next/image";
import { useState } from "react";
import { Ingredient } from "./types/drinks";
import { useCreateDrink } from "./hooks/useCreateDrink";

export default function Home() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const {randomizeDrink} = useCreateDrink(ingredients);


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
  }

  const handleSendMessage = async (message: string) => {
    try {
      const response = await fetch("/api/messaging", {
        method: "POST",
        body: JSON.stringify({
          text: message
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  }


  const handleGetIngredients = async () => {
    try {
      const response = await fetch("/api/getIngredients");
      const data = await response.json();
      setIngredients(parseDBIngredients(data));
    } catch (error) {
      console.error(error);
    }
  }
  
  const createStringFromIngredients = (ingredients: Ingredient[], orderId: number): string => {
    const string = `Замовлення #${orderId}:\n` + ingredients.map(ingredient => `- ${ingredient.name}`).join('\n');
    return string;
  }

  const handleRandomizeDrink = () => {
    const orderId = Math.floor(Math.random() * 1000); // Generate a random order ID
    const drink = randomizeDrink();
    console.log('Randomized drink:', drink);
    const message = `${createStringFromIngredients(drink, orderId)}`;
    handleSendMessage(message);
  }

  return (
    <div>
      <main>
        MAOMI

        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleGetIngredients}> 
          GET INGREDIENTS
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleRandomizeDrink}>
          RANDOMIZE DRINK
        </button>
      </main>
    </div>
  );
}
