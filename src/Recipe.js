import React from 'react'

function Recipe({ label, calories, image, ingredients }) {
    return (
        <div className="recipe">
            <h1>{label}</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <h2>{calories}</h2>
            <div className="image">
                <img src={image} alt="" />
            </div>
        </div>
    )
}

export default Recipe
