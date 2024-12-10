export default function HealthCalc({ConBonus, Level,HitDie}) {
  let health = 0; 
  for (let index = 0; index < Level; index++) {
      health = health +  ((Math.floor(Math.random()*HitDie)+ 1)+ConBonus)
      
  }
return(health)
}
