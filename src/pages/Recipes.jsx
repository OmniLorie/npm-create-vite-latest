import RecipeCard from "../components/RecipeCard";
import recipeOneImage from "../assets/images/image1.png"
import recipeTwoImage from "../assets/images/image2.png"
import recipeThreeImage from "../assets/images/image3.png"
import recipeFourImage from "../assets/image.png"





const Recipes = () => {
  return (
    <div className="px-10 py-10">
      <h3>Search</h3>
      <div>
        <h3>What is in your Kitchen?</h3>
        <p>Enter some ingredients</p>
      </div>
      <div>
        <i>MG</i>
        <input type="text" />
      </div>
      <div className="grid grid-cols-2 gab-5">
        <RecipeCard image={recipeOneImage} name="Chorizo & mozzarella gnocchi bake" />
      </div>
      <div>
        <RecipeCard image={recipeTwoImage} name="Chorizo & mozzarella gnocchi bake" />
      </div>
      <div>
        <RecipeCard image={recipeThreeImage} name="Chorizo & mozzarella gnocchi bake" />
      </div>
      <div>
        <RecipeCard image={recipeFourImage} name="Chorizo & mozzarella gnocchi bake" />
      </div>
    </div>
  )
}

export default Recipes