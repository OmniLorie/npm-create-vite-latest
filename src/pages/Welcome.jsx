import WelcomeImage from "../assets/images/welcome-image.png";


export default function Welcome() {
    return (
<div className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url('./assets/images/welcome-bg-image.png')] bg-cover bg-center h-screen flex flex-col place-items-center align-middle justify-center">
    <h3 className="text-white text-center text-5xl mb-5">Savory & <br/>Sweet</h3>
    <img src={WelcomeImage} alt="Welcome Image"  className="border-8 border-teal-500 rounded-full"/>
</div>
    )
}