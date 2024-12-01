import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const RecipeCard = () => {
const [recipeInfo, setRecipeInfo] = useState(null);
const params = useParams();
const id = params.id;

useEffect(() => {
    console.log(id);
    async function bring()
     {  
        const results = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await results.json();
        setRecipeInfo(data);
}

    bring()

}, [id]);

return (
            recipeInfo && (
                <div className="recipe-details">
                    <h1>{recipeInfo.title}</h1>
                    <img src={recipeInfo.image} alt={recipeInfo.title} />
                    <div dangerouslySetInnerHTML={{ __html: recipeInfo.summary }} />
                    <h2>Ingredients</h2>
                    <ul>
                        {recipeInfo.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                    <h2>Instructions</h2>
                    <ol>
                        {recipeInfo.analyzedInstructions[0].steps.map((step) => (
                        <li key={step.number}>{step.step}</li>
                        ))}
                    </ol>
                </div>
            ) 

    )

}

export default RecipeCard;