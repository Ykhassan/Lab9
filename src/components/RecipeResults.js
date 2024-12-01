import { Link } from "react-router-dom";
import './RecipeResults.css'

const RecipeResults = ({recipes}) => {
    return (
        recipes && (
            <div className="recipe-container">
                {
                    recipes.map(
                        (item) => (
                        <div className="recipe-card" key={item.id}> 
                            console.log(item.id);
                            <Link to= {`recipesdetails/${item.id}`} > 
                                <img src={item.image} alt={item.title}/>
                                <h2>{item.title}</h2>
                            </Link>
                        </div>
                        ))
                }
            </div>
        )
    )
}

export default RecipeResults;