import "./App.css";
import React, { useState } from "react";

const recipes = [
  {
    items: ["spinach", "mint", "beans", "green chili", "cumin seeds"],
    recipe_name: "Aloo Paratha",
    recipe_steps: "1) Prepare all ingredients for aloo paratha. 2) Cook them as per taste. 3) Serve hot and enjoy."
  },
  {
    items: ["cabbage", "salt", "coriander", "red chili powder"],
    recipe_name: "Chana Masala",
    recipe_steps: "1) Prepare all ingredients for chana masala. 2) Cook them as per taste. 3) Serve hot and enjoy."
  },
  {
    items: ["rice", "cabbage", "carrot", "turmeric"],
    recipe_name: "Palak Paneer",
    recipe_steps: "1) Prepare all ingredients for palak paneer. 2) Cook them as per taste. 3) Serve hot and enjoy."
  },
  {
    items: ["potato", "garlic", "green chili", "salt", "curd"],
    recipe_name: "Paneer Butter Masala",
    recipe_steps: "1) Prepare all ingredients for paneer butter masala. 2) Cook them as per taste. 3) Serve hot and enjoy."
  },
  {
    items: ["dal", "rice", "turmeric", "salt", "ghee"],
    recipe_name: "Vegetable Pulao",
    recipe_steps: "1) Prepare all ingredients for vegetable pulao. 2) Cook them as per taste. 3) Serve hot and enjoy."
  },
  {
    items: ["rice", "urad dal", "salt", "oil", "mustard seeds"],
    recipe_name: "Masala Dosa",
    recipe_steps: "1) Prepare all ingredients for masala dosa. 2) Cook them as per taste. 3) Serve hot and enjoy."
  },
  {
    items: ["rice", "urad dal", "tamarind", "vegetables"],
    recipe_name: "Idli Sambar",
    recipe_steps: "1) Prepare all ingredients for idli sambar. 2) Cook them as per taste. 3) Serve hot and enjoy."
  },
  {
    items: ["rice flour", "onion", "tomato", "green chili"],
    recipe_name: "Uttapam",
    recipe_steps: "1) Prepare all ingredients for uttapam. 2) Cook them as per taste. 3) Serve hot and enjoy."
  },
  {
    items: ["poha", "onion", "mustard seeds", "curry leaves"],
    recipe_name: "Poha",
    recipe_steps: "1) Prepare all ingredients for poha. 2) Cook them as per taste. 3) Serve hot and enjoy."
  },
  {
    items: ["rava", "mustard seeds", "ginger", "vegetables"],
    recipe_name: "Upma",
    recipe_steps: "1) Prepare all ingredients for upma. 2) Cook them as per taste. 3) Serve hot and enjoy."
  },
  {
    items: ["egg", "salt", "pepper", "oil"],
    recipe_name: "Omelette",
    recipe_steps: "1) Prepare all ingredients for omelette. 2) Cook them as per taste. 3) Serve hot and enjoy."
  },
  {
    items: ["egg", "milk", "butter", "salt"],
    recipe_name: "Scrambled Eggs",
    recipe_steps: "1) Prepare all ingredients for scrambled eggs. 2) Cook them as per taste. 3) Serve hot and enjoy."
  },
  {
    items: ["egg", "water"],
    recipe_name: "Boiled Eggs",
    recipe_steps: "1) Prepare all ingredients for boiled eggs. 2) Cook them as per taste. 3) Serve hot and enjoy."
  },
  {
    items: ["egg", "onion", "tomato", "garam masala"],
    recipe_name: "Egg Curry",
    recipe_steps: "1) Prepare all ingredients for egg curry. 2) Cook them as per taste. 3) Serve hot and enjoy."
  },
  {
    items: ["banana", "milk", "sugar"],
    recipe_name: "Banana Shake",
    recipe_steps: "1) Prepare all ingredients for banana shake. 2) Blend them. 3) Serve chilled."
  },
  {
    items: ["apple", "banana", "grapes", "honey"],
    recipe_name: "Fruit Salad",
    recipe_steps: "1) Cut all fruits. 2) Mix with honey. 3) Serve fresh."
  },
  {
    items: ["carrot", "milk", "sugar", "ghee"],
    recipe_name: "Carrot Halwa",
    recipe_steps: "1) Grate carrot. 2) Cook with milk and sugar. 3) Add ghee and serve."
  },
  {
    items: ["rice", "milk", "sugar", "cardamom"],
    recipe_name: "Kheer",
    recipe_steps: "1) Boil rice in milk. 2) Add sugar and cardamom. 3) Serve chilled."
  },
  {
    items: ["milk", "sugar", "vermicelli"],
    recipe_name: "Rice Kheer",
    recipe_steps: "1) Cook vermicelli in milk. 2) Add sugar. 3) Serve hot or cold."
  },
  {
    items: ["khoya", "sugar", "ghee", "cardamom"],
    recipe_name: "Gulab Jamun",
    recipe_steps: "1) Prepare dough balls. 2) Fry and dip in sugar syrup. 3) Serve warm."
  },
  {
    items: ["tea leaves", "milk", "sugar", "water"],
    recipe_name: "Tea",
    recipe_steps: "1) Boil water with tea leaves. 2) Add milk and sugar. 3) Serve hot."
  },
  {
    items: ["coffee powder", "milk", "sugar"],
    recipe_name: "Coffee",
    recipe_steps: "1) Mix coffee in hot water. 2) Add milk and sugar. 3) Serve hot."
  },
  {
    items: ["lemon", "sugar", "salt", "water"],
    recipe_name: "Lemon Juice",
    recipe_steps: "1) Mix lemon juice with sugar and salt. 2) Add water. 3) Serve chilled."
  },
  {
    items: ["bread", "butter", "sugar"],
    recipe_name: "Butter Toast",
    recipe_steps: "1) Toast bread. 2) Apply butter and sugar. 3) Serve hot."
  },
  {
    items: ["bread", "vegetables", "mayonnaise"],
    recipe_name: "Veg Sandwich",
    recipe_steps: "1) Spread mayo on bread. 2) Add veggies. 3) Grill or serve plain."
  },
  {
    items: ["chicken", "onion", "tomato", "garam masala"],
    recipe_name: "Chicken Curry",
    recipe_steps: "1) Cook chicken with spices. 2) Simmer until tender. 3) Serve hot."
  },
  {
    items: ["chicken", "pepper", "salt", "lemon"],
    recipe_name: "Grilled Chicken",
    recipe_steps: "1) Marinate chicken. 2) Grill until cooked. 3) Serve with lemon."
  },
  {
    items: ["fish", "mustard", "garlic", "oil"],
    recipe_name: "Fish Fry",
    recipe_steps: "1) Marinate fish. 2) Fry in hot oil. 3) Serve crispy."
  },
  {
    items: ["fish", "onion", "tomato", "spices"],
    recipe_name: "Fish Curry",
    recipe_steps: "1) Cook fish in curry base. 2) Simmer till done. 3) Serve hot."
  },
  {
    items: ["prawns", "coconut", "mustard seeds", "curry leaves"],
    recipe_name: "Prawn Masala",
    recipe_steps: "1) Sauté prawns in masala. 2) Add coconut paste. 3) Cook and serve."
  },
  {
    items: ["mushroom", "onion", "tomato", "spices"],
    recipe_name: "Mushroom Masala",
    recipe_steps: "1) Sauté mushrooms. 2) Add masala base. 3) Cook and serve."
  },
  {
    items: ["rice", "vegetables", "ghee", "garam masala"],
    recipe_name: "Veg Biryani",
    recipe_steps: "1) Cook vegetables and rice separately. 2) Layer and steam. 3) Serve hot."
  },
  {
    items: ["rice", "dal", "turmeric", "salt"],
    recipe_name: "Khichdi",
    recipe_steps: "1) Mix dal and rice. 2) Pressure cook. 3) Serve with ghee."
  },
  {
    items: ["tomato", "onion", "salt", "pepper"],
    recipe_name: "Tomato Soup",
    recipe_steps: "1) Boil tomatoes. 2) Blend and strain. 3) Add salt and pepper."
  },
  {
    items: ["corn", "milk", "salt", "pepper"],
    recipe_name: "Sweet Corn Soup",
    recipe_steps: "1) Boil corn. 2) Blend partially. 3) Add milk and seasoning."
  },
  {
    items: ["wheat flour", "water", "salt"],
    recipe_name: "Roti",
    recipe_steps: "1) Knead dough. 2) Roll into discs. 3) Cook on tawa."
  },
  {
    items: ["wheat flour", "salt", "water", "ghee"],
    recipe_name: "Chapati",
    recipe_steps: "1) Prepare dough. 2) Cook on both sides. 3) Apply ghee and serve."
  },
  {
    items: ["maida", "yeast", "salt", "milk"],
    recipe_name: "Naan",
    recipe_steps: "1) Prepare dough with yeast. 2) Cook in tandoor or pan. 3) Serve hot."
  },
  {
    items: ["beetroot", "onion", "salt", "lemon"],
    recipe_name: "Beetroot Salad",
    recipe_steps: "1) Grate beetroot. 2) Add lemon and seasoning. 3) Serve cold."
  },
  {
    items: ["sprouts", "onion", "tomato", "lemon"],
    recipe_name: "Sprouts Salad",
    recipe_steps: "1) Mix sprouts with veggies. 2) Add lemon. 3) Serve fresh."
  },
  {
    items: ["lettuce", "carrot", "cucumber", "salt"],
    recipe_name: "Green Salad",
    recipe_steps: "1) Chop vegetables. 2) Season. 3) Serve cold."
  },
  {
    items: ["curd", "rice", "mustard seeds", "curry leaves"],
    recipe_name: "Curd Rice",
    recipe_steps: "1) Mix rice with curd. 2) Add tempering. 3) Serve cool."
  },
  {
    items: ["curd", "sugar", "cardamom"],
    recipe_name: "Lassi",
    recipe_steps: "1) Blend curd and sugar. 2) Add cardamom. 3) Serve chilled."
  },
  {
    items: ["curd", "water", "salt", "ginger"],
    recipe_name: "Buttermilk",
    recipe_steps: "1) Blend curd and water. 2) Add salt and ginger. 3) Serve cool."
  },
  {
    items: ["moong dal", "garlic", "ghee", "salt"],
    recipe_name: "Moong Dal Tadka",
    recipe_steps: "1) Boil dal. 2) Add tadka. 3) Serve with rice or roti."
  },
  {
    items: ["rajma", "rice", "onion", "tomato"],
    recipe_name: "Rajma Chawal",
    recipe_steps: "1) Cook rajma curry. 2) Serve with steamed rice. 3) Enjoy hot."
  },
  {
    items: ["potato", "peas", "onion", "tomato"],
    recipe_name: "Aloo Matar",
    recipe_steps: "1) Cook potato and peas in gravy. 2) Simmer. 3) Serve hot."
  },
  {
    items: ["brinjal", "onion", "tomato", "spices"],
    recipe_name: "Baingan Bharta",
    recipe_steps: "1) Roast brinjal. 2) Mix with masala. 3) Serve hot."
  },
  {
    items: ["besan", "yogurt", "onion", "oil"],
    recipe_name: "Kadhi Pakora",
    recipe_steps: "1) Prepare pakoras. 2) Make kadhi. 3) Add pakoras and serve."
  }
];



function Form() {
  const [userIngridents, setIngridents] = useState("");
  const [recipe, setrecipe] = useState([]);

  const check = (e) => {
    e.preventDefault(); //prevent reloading

    // const matchedRecipe = recipes.filter(recipe =>
    //   recipe.items.some(item =>userIngridents.includes(item))
    // );
    // if(matchedRecipe){
    //   const result = matchedRecipe.map(recipe => 
    //     `${recipe.recipe_name}: \n ${recipe.recipe_steps}`
    //     ).join("\n\n");
    //   setrecipe(result);
    // }
    // else{
    //   const mess = "Enter correct ingrideints";
    //   setrecipe(mess);
    // }
    const inputIngredients = userIngridents.toLowerCase().split(",").map(ing => ing.trim());
    const matchedRecipe = recipes.filter(recipe => recipe.items.some(item=> inputIngredients.includes(item))
    );
    if (matchedRecipe.length > 0) {
          setrecipe(matchedRecipe);
    } else {
          setrecipe([]);
    }
  };

  return (
    <form className="form-container">
      <label htmlFor="userIngridents">Enter Name: </label>
      <input
        type="text"
        placeholder="Enter Ingridets"
        name="userIngridents"
        value={userIngridents}
        onChange={(e) => setIngridents(e.target.value)}
      />
      <br/>
      <button onClick={check}>Submit</button>
      {recipe.length > 0 ? (
  <div className="recipe-container">
    {recipe.map((recipe, index) => (
      <div key={index} className="recipe-card">
        <h3><strong>{recipe.recipe_name}</strong></h3>
        {recipe.recipe_steps.split(". ").map((step, idx) => (
          step && <p key={idx}>➡️ {step.trim()}.</p>
        ))}
        <hr />
      </div>
    ))}
  </div>
  ) : (
  <p>No matching recipe found.</p>
  )}
    </form>
  );
}

export default function Login() {
  return (
    <div className="form-container">
      <h1>Welcome To Recipe Finder</h1>
      <Form />
    </div>
  );
}
