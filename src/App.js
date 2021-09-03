import React, { useState, useEffect } from 'react'
import Recipe from './Recipe'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {

  const APP_ID = "4af35fcb"
  const APP_KEY = "fcbd26cb4361dafaea1cbe7d8cd98707"

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&calories=591-1500&health=alcohol-free`)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const updateQuery = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="app">
      <form onSubmit={updateQuery} className="search-form">
        <input className="search-bar" type="text" placeholder="Type something" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Get recipes</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe key={uuidv4()} label={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  )
}

export default App;