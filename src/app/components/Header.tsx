
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
      <div className="border-b border-[#F7F779] flex justify-around bg-black py-5 text-white">
        <div>
          <h1 className="text-[#F7F779]  text-xl font-bold">Anuj Rana</h1>
        </div>
        <div className="">
          <Sheet>
            <SheetTrigger className="sm:hidden block text-3xl"><IoMenu/></SheetTrigger>
            <SheetContent className="bg-black">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription className="text-2xl font-semibold border rounded-md hover:bg-[#F7F779] hover:text-black  bg-black text-[#F7F779] mb-2">HOME </SheetDescription>
                <SheetDescription className="text-2xl font-semibold border rounded-md hover:bg-[#F7F779] hover:text-black bg-black text-[#F7F779] mb-2">ABOUT ME</SheetDescription>
                <SheetDescription className="text-2xl font-semibold border rounded-md hover:bg-[#F7F779] hover:text-black bg-black text-[#F7F779] mb-2">PORTFOLIO</SheetDescription>
                <SheetDescription className="text-2xl font-semibold border rounded-md hover:bg-[#F7F779] hover:text-black bg-black text-[#F7F779] mb-2">CONTACT</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <ul className="flex gap-8 font-semibold ">
            <li className="hover:text-[#F7F779] sm:block hidden hover:underline cursor-pointer">
              HOME
            </li>
            <li className="hover:text-[#F7F779] sm:block hidden hover:underline cursor-pointer">
              ABOUT ME
            </li>
            <li className="hover:text-[#F7F779] sm:block hidden hover:underline cursor-pointer">
              PORTFOLIO
            </li>
            <li className="hover:text-[#F7F779] sm:block hidden hover:underline cursor-pointer">
              CONTACT
            </li>
          </ul>
        </div>
        <div>
          <button className="hover:bg-[#F7F779] hover:shadow-lg hover:shadow-[#eded9b] text-black font-semibold mt-[-8px] px-4 py-2 rounded-lg bg-[#FFFF7D]">
            About Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
