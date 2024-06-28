import { HeartIcon } from "@heroicons/react/16/solid";

const RecipeCard = ({image, name}) => {
  return (
    <div className="relative">
      <div className="h-[27px] w-[23px] bg-white absolute top-2 right-2 rounded-[7px] flex justify-center items-center">
      <HeartIcon  className="size-[15px]"/>
      </div>
       
        <img src={image} alt="name" />
        <p className="absolute left-2 bottom-2 text-white font-bold">{name}</p>
    </div>
  );
}

export default RecipeCard