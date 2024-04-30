import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Description = () => {
  return (
    <>
    <div className="bg-black sm:pb-0 pb-10 text-white sm:flex  sm:px-12 sm:h-96 sm:pl-28 pl-8 sm:pt-20 pt-10 ">
        <div className="w-96">
        <h2 className="text-xl font-bold">Hello, it's Me</h2>
        <h1 className="text-4xl font-bold">Anuj Rana</h1>
        <h2 className="text-xl font-bold">And i'm a <span className="text-[#F7F779]">Frontend Developer</span></h2>
        <p className="mt-3">I'm a Web Designer with extensive experience.expertise is to create website design,Frontend design,and many more...</p>
         <div className="flex gap-4 mt-3">
         <div className="hover:bg-[#F7F779] hover:shadow-lg hover:shadow-[#F7F779] hover:text-black border-2 px-2 py-2 w-fit rounded-full text-xl text-[#F7F779] border-[#F7F779]"><FaInstagram /></div>
         <div className="hover:bg-[#F7F779] hover:text-black hover:shadow-lg hover:shadow-[#F7F779] border-2 px-2 py-2 w-fit rounded-full text-xl text-[#F7F779] border-[#F7F779]"><FaFacebookF /></div>
         <div className="hover:bg-[#F7F779] hover:text-black hover:shadow-lg hover:shadow-[#F7F779] border-2 px-2 py-2 w-fit rounded-full text-xl text-[#F7F779] border-[#F7F779]"><FaTwitter />
</div>
         </div>
        </div>
        <div>
        <img src="img7.png" alt=""  className="sm:h-72 border-2 shadow-2xl shadow-[#F7F779] sm:mt-[-50px] mt-10 sm:ml-80 border-[#F7F779]  mx-auto  object-cover rounded-full w-72"/>
        </div>
    </div>
    </>
  )
}

export default Description