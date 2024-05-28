import { IoIosMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Contactme = () => {
  return (
    <>
      <div id="Contactme" className="bg-black sm:grid sm:grid-cols-2 p-10 text-white pb-20">
        <div className="">
          <h1 className="text-2xl font-bold text-center py-5 ">
            Contact <span className="text-[#F7F779]">Me</span>
          </h1>

          <p className="font-semibold py-3">Let's Work Together</p>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iure
            dolorum accusantium et aliquam, ipsa officia eligendi minima atque
            ex, provident quod quas quis, aut earum fuga labore aperiam itaque!
          </p>
          <div>
            <p className="flex gap-2 py-3">
              <IoIosMail className="text-[#F7F779] text-2xl" />
              <span>anujrajput9034@gmail.com</span>
            </p>
            <p className="flex gap-2 pb-3">
              <FaPhoneSquareAlt className="text-[#F7F779] text-2xl" />
              <span>7419034826, 9034820079</span>
            </p>
          </div>
          <div className="flex gap-4 mt-3">
            <div className="hover:bg-[#F7F779] hover:shadow-lg hover:shadow-[#F7F779] hover:text-black border-2 px-2 py-2 w-fit rounded-full text-xl text-[#F7F779] border-[#F7F779]">
            <a href="https://www.instagram.com/anuj_rajput_ghd/">
                <FaInstagram />
              </a>
            </div>
            <div className="hover:bg-[#F7F779] hover:text-black hover:shadow-lg hover:shadow-[#F7F779] border-2 px-2 py-2 w-fit rounded-full text-xl text-[#F7F779] border-[#F7F779]">
              <FaFacebookF />
            </div>
            <div className="hover:bg-[#F7F779] hover:text-black hover:shadow-lg hover:shadow-[#F7F779] border-2 px-2 py-2 w-fit rounded-full text-xl text-[#F7F779] border-[#F7F779]">
             
            <a href="https://www.youtube.com/@AnujRana-13-7">
              <FaYoutube />
              </a>
           </div>
            <div className="hover:bg-[#F7F779] hover:text-black hover:shadow-lg hover:shadow-[#F7F779] border-2 px-2 py-2 w-fit rounded-full text-xl text-[#F7F779] border-[#F7F779]">
            <a href="https://twitter.com/Anujrajput9034">
              <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="sm:ps-20 sm:pt-0 pt-10">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="sm:w-[450px] w-80 py-2 rounded-md bg-transparent border-[#F7F779] mb-2 border p-2"
          />
          <input
            type="text"
            placeholder="Enter Your Email"
            className="sm:w-[450px] w-80 py-2 rounded-md bg-transparent border-[#F7F779] mb-2 border p-2"
          />
          <input
            type="text"
            placeholder="Enter Your Subject"
            className="sm:w-[450px] w-80 py-2 rounded-md bg-transparent border border-[#F7F779] mb-2 p-2"
          />
          <textarea  placeholder="Enter your Message" className="rounded-md bg-transparent border border-[#F7F779] sm:w-[450px] w-80 p-2" cols={30} rows={5} ></textarea>
          <button aria-label="submit" className="hover:bg-[#F7F779] sm:w-[450px] w-80 shadow-md shadow-[#eded9b]   hover:shadow-lg hover:shadow-[#eded9b] text-black font-semibold mt-  px-4 py-2 rounded-lg bg-[#FFFF7D]">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Contactme;
