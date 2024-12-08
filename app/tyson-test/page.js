"use client";

import { useState, useEffect } from "react";
import SelectApi from "./selectComponent";
import ClassBased from "./ClassBasedOptions";
import Stats from './Stats'

export default function Page() {
  return (
    <main>
            <div>
      <SelectApi path={"races"}/>
</div><div>
      <SelectApi path={"classes"}/>
      </div>
      <div>
        <ClassBased DndClass={"barbarian"}/>
        <Stats DndRace={"human"}/>
      </div>
    </main>
  );
}
