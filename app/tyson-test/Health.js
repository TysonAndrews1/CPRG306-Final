"use client";

import { useState, useEffect } from "react";

export default function Page({ConBonus, Level,HitDie}) {
    const [health, setHealth] = useState("")
    function HealthCalc() {
        let health; 
        for (let index = 0; index < Level; index++) {
            health = health +  ((Math.floor(Math.random()*HitDie)+ 1)+ConBonus)
            
        }
    setHealth(health)
    
    }
    HealthCalc()
  return (
    <main>
        <div>
            <p>Health: {health}</p>
      </div>
    </main>
  );
}
