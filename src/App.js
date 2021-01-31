import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {
  const APP_ID= "a2991883";
  const APP_KEY= "02e7c523f7639b629da57efa243de97e";

  const [ recipes , setrecipes] = useState([]);

  useEffect(()=>{
    getRecipes();
  });

  const getRecipes = async()=>{
    const response = await fetch('https://api.edamam.com/search?q=chicken&app_id=<%=APP_ID%>&app_key=<%=APP_KEY%>');
    const data = await response.json();
    setrecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipes=>(
        <Recipe 
          key={recipes.recipe.label}
          title={recipes.recipe.label}
          calories={recipes.recipe.calories}
          image={recipes.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
