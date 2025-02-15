import Title from "../Components/Title"
import { assets } from "../assets/frontend_assets/assets";

function About() {
  return (
    <div>

      <div className="text-2xl text-center pt-8 border-t">
      <Title text1={"ABOUT"} text2={"US"} />
      </div>
      
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="img-about-us" />
      </div>

    </div>

  )
}

export default About