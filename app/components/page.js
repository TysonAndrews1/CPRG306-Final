"use client";

import { useState, useEffect } from "react";
import SelectApi from "./selectComponent";
import ClassBased from "./ClassBasedOptions";

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
        {/* <Stats DndRace={"human"}/> */}
      </div>
    </main>
  );
}
