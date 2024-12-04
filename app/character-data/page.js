'use client';
import { useState } from "react";
import { BiShuffle } from "react-icons/bi";
import tempImage1 from "../../public/assets/idek_sunset.png";
import tempImage2 from "../../public/assets/haunted_shadows.png";
import tempImage3 from "../../public/assets/happy_holidays.png";

export default function Page() {

  return (
    <main className="flex flex-col items-center bg-slate-400 min-h-screen">
      <h1 className="text-black text-6xl m-2 mt-5 font-bold italic">-- Character Data --</h1>
      <h2 className="text-black text-1xl italic text-center w-1/4">Here, you'll start filling in all of the sections to give your character "functionality".</h2>

      <div className="flex flex-row items-stretch">
        <p>
          ¯\_(ツ)_/¯
        </p>
      </div>
    </main>
  );
}