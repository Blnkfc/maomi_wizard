'use client'
import Image from "next/image";
import { useState } from "react";
import { Ingredient } from "./types/drinks";
import { useCreateDrink } from "./hooks/useCreateDrink";

export default function Home() {


  return (
    <div>
      <main>
        MAOMI

        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleGetIngredients}> 
          GET INGREDIENTS
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleRandomizeDrink}>
          RANDOMIZE DRINK
        </button> */}
      </main>
    </div>
  );
}
