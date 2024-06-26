import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPreact } from "react-icons/si";
import {
  CircularProgress,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from "@nextui-org/react";
import Nextskills from "./Nextskills";

const Skills = () => {
  return (
    <>
      <div id="Skills" className="bg-black  text-white pb-4 ">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            My <span className="text-[#F7F779]">Skills</span>
          </h1>
        </div>
        <div className=" sm:pl-10   grid sm:grid-cols-2 grid-cols-1 ">
          <div className="p-10 w-full">
            <h3 className="text-2xl font-semibold underline">
              Technical Skills
            </h3>
            <div className="mt-10">
              <div className="text-3xl">
                <FaHtml5 />
              </div>
              <p className="text-xl">HTML</p>
              <div className=" border-2 rounded-md sm:w-96 w-72">
                <div className="border-4 sm:w-72 w-60 border-[#F7F779]"></div>
              </div>
            </div>
            {/* skill-2 */}
            <div className="mt-10">
              <div className="text-3xl">
                <IoLogoCss3 />
              </div>
              <p className="text-xl">CSS</p>
              <div className=" border-2 rounded-md sm:w-96 mt w-72">
                <div className="border-4 sm:w-60 w-48 border-[#F7F779]"></div>
              </div>
            </div>
            {/*  */}
            <div className="mt-10">
              <div className="text-3xl">
                <RiJavascriptFill />
              </div>
              <p className="text-xl">JAVASCRIPT</p>
              <div className=" border-2 rounded-md sm:w-96 mt w-72">
                <div className="border-4 sm:w-80 w-64 border-[#F7F779]"></div>
              </div>
            </div>
            {/*  */}
            <div className="mt-10">
              <div className="text-3xl">
                <SiPreact />
              </div>
              <p className="text-xl">REACT</p>
              <div className=" border-2  rounded-md sm:w-96 mt w-72">
                <div className="border-4 sm:w-56 w-44 border-[#F7F779]"></div>
              </div>
            </div>
          </div>

          <div className="p-10 ">
            <h3 className="text-2xl font-semibold underline">
              Professional Skills
            </h3>
            <div className="w-full flex">
              <div>
                <Nextskills tittle="90" heading="Creativity" />
                <Nextskills tittle="75" heading="Problem Solving" />
              </div>
              <div>
                <Nextskills tittle="68" heading="Communication" />
                <Nextskills tittle="82" heading="Teamwork" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
