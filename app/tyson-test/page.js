"use client";

import { useState, useEffect } from "react";
import SelectApi from "./selectComponent";


export default function Page() {
  return (
    <main>
      <SelectApi path={"races"}/>
      <SelectApi path={"classes"}/>
      {/* <SelectApi path={"classes/barbarian"}/> */}
    </main>
  );
}
