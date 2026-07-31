import React from "react";
import Header from "./Header";
import ImgCover from "./assets/sheild.png";
import { Badge, Button } from "flowbite-react";
import vsa from "./assets/vsa.png";
import inky from "./assets/inky.png";
import itGlue from "./assets/itglue.png";
import saas from "./assets/saas.png";
import darkweb from "./assets/darkweb.png";
import autotask from "./assets/autotask.png";

const Index = () => {
  return (
    <>
      <div className="bg-gradient h-screen">
        <Header />
        <div className="flex justify-center gap-10 items-center mt-16">
          <div className="flex flex-col items-start gap-5">
            <Badge color="green">Free 1 month trial</Badge>
            <p className="text-3xl font-bold w-125 text-green-800">
              TRUSTED CYBERSECURITY LEADER
            </p>
            <p className="w-120">
              AI - driven solutions to help your business scale efficiently,
              improve operations, and achieve top-tier service delivery.
            </p>
            <Button color="green" className="rounded-none">Read More</Button>
          </div>
          <img src={ImgCover} alt="" className="aspect-video size-4/12" />
        </div>
        <div className="flex items-center justify-center mt-16 2xl:mt-36 border-t border-olive-300 pt-5 gap-10 2xl:gap-20 2xl:pt-16">
          <img src={vsa} className="aspect-auto object-center w-32 2xl:w-36 " alt="" />
          <img src={inky} className="aspect-auto object-center w-32 2xl:w-36 " alt="" />
          <img src={itGlue} className="aspect-auto object-center w-32 2xl:w-36 " alt="" />
          <img src={saas} className="aspect-auto object-center w-32 2xl:w-36 " alt="" />
          <img
            src={darkweb}
            className="aspect-auto object-center w-32 2xl:w-36 "
            alt=""
          />
          <img
            src={autotask}
            className="aspect-auto object-center w-32 2xl:w-36 "
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Index;
