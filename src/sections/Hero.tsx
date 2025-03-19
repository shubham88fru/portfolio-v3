import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-10"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="size-[620px] animate-pulse [animation-duration:3s] hero-ring"></div>
      <div className="size-[820px] animate-pulse [animation-duration:4s] hero-ring"></div>
      <div className="size-[1020px] animate-pulse [animation-duration:5s] hero-ring"></div>
      <div className="size-[1220px] animate-pulse [animation-duration:6s] hero-ring"></div>
      <HeroOrbit size={800} rotation={-72}>
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit size={550} rotation={20}>
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit size={590} rotation={98}>
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>

      <HeroOrbit size={430} rotation={-14}>
        <SparkleIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit size={440} rotation={79}>
        <SparkleIcon className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="person behing a laptop"
          />
          <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="animate-ping [animation-duration:2s] bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">I'm available. Hire me!</div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Full stack engineering is what I do.
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I'm a full stack engineer with over 5 years of experience in
            building cloud native, and scalable backend and frontend
            applications. Let's Connect!
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Checkout my Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's Connect!</span>
          </button>
        </div>
      </div>
    </div>
  );
};
