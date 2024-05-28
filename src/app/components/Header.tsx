import Link from "next/link";
import { IoMenu } from "react-icons/io5";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <>
      <div className="border-b border-[#F7F779]  flex justify-around bg-black py-5 text-white">
        <div>
          <h1 className="text-[#F7F779]  text-xl font-bold">Anuj Rana</h1>
        </div>
        <div className="">
          <Sheet>
            <SheetTrigger className="sm:hidden block text-3xl"><IoMenu/></SheetTrigger>
            <SheetContent className="bg-black">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
            
              </SheetHeader>
              <div className="text-center">
              <li className="text-2xl list-none font-semibold border rounded-md hover:bg-[#F7F779] hover:text-black  bg-black text-[#F7F779] mb-2"><a href="/#Home">Home</a> </li>
                <li className="text-2xl list-none font-semibold border rounded-md hover:bg-[#F7F779] hover:text-black bg-black text-[#F7F779] mb-2"><a href="/#Aboutme">About</a></li>
                <li className="text-2xl list-none font-semibold border rounded-md hover:bg-[#F7F779] hover:text-black bg-black text-[#F7F779] mb-2"><a href="/#Services">Services</a></li>
                <li className="text-2xl list-none font-semibold border rounded-md hover:bg-[#F7F779] hover:text-black bg-black text-[#F7F779] mb-2"><a href="/#Skills">Skills</a></li>
                <li className="text-2xl list-none font-semibold border rounded-md hover:bg-[#F7F779] hover:text-black bg-black text-[#F7F779] mb-2"><a href="/#Contactme">Contact</a></li>
              </div>
            </SheetContent>
          </Sheet>
          <ul className="flex gap-8 font-semibold ">
            <li className="hover:text-[#F7F779] sm:block hidden hover:underline cursor-pointer">
              Home
            </li>
            <li className="hover:text-[#F7F779] sm:block hidden hover:underline cursor-pointer">
              <a href="/#Aboutme">About</a>
            </li>
            <li className="hover:text-[#F7F779] sm:block hidden hover:underline cursor-pointer">
            <a href="/#Services">Services</a>
            </li>
            <li className="hover:text-[#F7F779] sm:block hidden hover:underline cursor-pointer">
            <a href="/#Skills">Skills</a>
            </li>
            <li className="hover:text-[#F7F779] sm:block hidden hover:underline cursor-pointer">
            <a href="/#Contactme">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <button className="hover:bg-[#F7F779] hover:shadow-lg hover:shadow-[#eded9b] text-black font-semibold mt-[-8px] px-4 py-2 rounded-lg bg-[#FFFF7D]">
            <a href="tel:7419034826">Call Me</a>
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
