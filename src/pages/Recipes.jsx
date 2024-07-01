import RecipeCard from "../components/RecipeCard";
import recipeOneImage from "../assets/images/image1.png"
import recipeTwoImage from "../assets/images/image2.png"
import recipeThreeImage from "../assets/images/image3.png"
import recipeFourImage from "../assets/images/image4.png"
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";





const Recipes = () => {
  return (
    <div className="p-12">
      <h3 className="font-bold text-2xl mb-12 text-center" >Search</h3>
      <div>
        <h3 className="text-xl font bold mb-2">What is in your Kitchen?</h3>
        <p>Enter some ingredients</p>
      </div>
      <div className="flex items-center bg-white shadow-md rounded-lg p-2 w-full max-w-md mx-auto border border-teal-500 mt-5 mb-5">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 mr-2"/>
        <input type="text" placeholder="Type your ingredients" className="flex-grow bg-transparent border-none focus:outline-none" />
      </div>


      <div className="grid grid-cols-2 gap-5 justify-around ">
        <RecipeCard image={recipeOneImage} name="Chorizo & mozzarella gnocchi bake" />
      
        <RecipeCard image={recipeTwoImage} name="Chorizo & mozzarella gnocchi bake" />
      
        <RecipeCard image={recipeThreeImage} name="Chorizo & mozzarella gnocchi bake" />
      
        <RecipeCard image={recipeFourImage} name="Chorizo & mozzarella gnocchi bake" />
      </div>
    </div>
  )
}

export default Recipes