import React from "react";
import logoMiasFlorist from "../assets/header/logoMiasFloristWhite.png"; // Ruta del archivo SVG
import { Link } from "react-router-dom";
import BtnOrange from "./BtnOrange";
import iconoMail from "../assets/footer/iconoMail.png";
import iconoUbicacion from "../assets/footer/iconoUbicacion.png";
import Input from "./Input";
import TextoImg from "./TextoImg";
import p1 from "../assets/footer/iconoUbicacion.png";

function Footer() {
  return (
    <div>
      <div className="bg-131313 w-full h-36 pt-2 pb-6">
        <img
          src={logoMiasFlorist}
          alt="logoMiasFlorist"
          className="mx-auto h-full "
        />
      </div>


      <div className="h-auto bg-606060 style-1 !text-[#FAFAFA] !text-xl flex flex-col px-20 pt-8 pb-10">
        <div className="w-full  grid grid-cols-1   divide-f5f5f5 border-b-[1px] border-f5f5f5 pb-12 mb-6 grid- lg:grid-cols-3 mv:divide-y  justify-center items-center grid-flow-row-reverse grid-flow-col-reverse">

          
          <div className="w   pr-16  flex-col justify-between hidden lg:flex">
            <div className=" grid grid-cols-3 gap-y-4 text-center items-center ">
              <Link to="" aria-label="Products">
                Products
              </Link>
              <Link
                to=""
                aria-label="About us"
                className=" border-x-[1px] border-f5f5f5 "
              >
                About us
              </Link>
              <Link to="/MiasFlorist/Contact" aria-label="Contact">
                Contact
              </Link>
              <Link to="" aria-label="Frequent questions">
                Frequent questions
              </Link>
              <Link />
              <Link
                to=""
                aria-label="Visit our blog"
                className="border-l-[1px] border-f5f5f5"
              >
                Visit our blog
              </Link>
            </div>
            <BtnOrange texto={"Login System"} />
          </div>
          <div className="  flex justify-between flex-col px-4 lg:border-x-[1px] ">
            <h5>Subscribe for Exclusive Email Offers</h5>
            <Input placeholder={"Your Email Address"} />
            <BtnOrange texto={"Sign me up"} />
          </div>
          <div className=" flex flex-col justify-center  pl-4 row-start-1 border-b-[1px]  mb-8 pb-8 lg:border-none lg:row-auto  ">
            <div className="flex flex-col justify-center items-center">
              <TextoImg
                img={iconoUbicacion}
                imgAlt={"Location"}
                texto={"Location"}
                estilosLetra={"!text-f5f5f5"}
              />
              <h4 className="style-2 pl-7 ">
                35 Pearl St suite 103, New Britain, CT 06051
              </h4>
            </div>

            <div className="flex flex-col justify-center items-center">
              <TextoImg
                img={iconoMail}
                imgAlt={"Email"}
                texto={"Email"}
                estilosLetra={"!text-f5f5f5"}
              />
              <h4 className="style-2 pl-7 ">Info@wiseatp.com</h4>
            </div>
          </div>
        </div>
        <div></div>
        <div className=" flex flex-col text-center style-2">
          <span>
            <Link to="" aria-label="Terms & Conditions">
              Terms & Conditions
            </Link>
            <Link to="" aria-label="Privacy Policy">
              Privacy Policy
            </Link>
          </span>

          <div class="container mx-auto style-2 ">
            <p>2021 Copyrigh &copy; Ingenuity & Solutions.</p>
            <p class="text-sm mt-2 style-2">
              Developed by <span class="font-semibold">Carlos Mora</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
