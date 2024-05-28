import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { MdTouchApp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-black border-t border-[#F7F779] p-10 text-white pb-20">
        <h1 className="text-[#F7F779] text-2xl  font-bold">Anuj Rana</h1>
        <br />
        <div className="sm:flex sm:justify-between sm:px-20">
          <div>
            <h2 className="text-xl  font-semibold flex">
              <FaLocationDot className="text-2xl text-[#F7F779]" />
              <span>Address</span>
            </h2>
            <p>
              Vig Colony Gharaunda <br />
              (Karnal),Haryana,132114
            </p>
            <br />
          </div>
          <div>
            <h2 className="text-xl  font-semibold flex">
              <SiMinutemailer className="text-2xl text-[#F7F779]" />
              <span>Write to us</span>
            </h2>
            <p>
              anujrajput9034@gmail.com <br />
            </p>
            <span>7419034826, 9034820079</span>
          </div>
          <br />

          <div>
            <h2 className="text-xl  font-semibold flex">
              <MdTouchApp className="text-2xl text-[#F7F779]" />
              <span>Get in touch</span>
            </h2>
            <div className="flex gap-4 mt-3">
              <div className="hover:bg-[#F7F779] hover:shadow-lg hover:shadow-[#F7F779] hover:text-black border-2 px-2 py-2 w-fit rounded-full text-xl text-[#F7F779] border-[#F7F779]">
                <a href="https://www.instagram.com/anuj_rajput_ghd/">
                  <FaInstagram />
                </a>
              </div>
              <div className="hover:bg-[#F7F779] hover:shadow-lg hover:shadow-[#F7F779] hover:text-black border-2 px-2 py-2 w-fit rounded-full text-xl text-[#F7F779] border-[#F7F779]">
                <a href="https://www.youtube.com/@AnujRana-13-7">
                  <FaYoutube />
                </a>
              </div>
              <div className="hover:bg-[#F7F779] hover:text-black hover:shadow-lg hover:shadow-[#F7F779] border-2 px-2 py-2 w-fit rounded-full text-xl text-[#F7F779] border-[#F7F779]">
                <FaFacebookF />
              </div>
              <div className="hover:bg-[#F7F779] hover:text-black hover:shadow-lg hover:shadow-[#F7F779] border-2 px-2 py-2 w-fit rounded-full text-xl text-[#F7F779] border-[#F7F779]">
                <a href="https://twitter.com/Anujrajput9034">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
