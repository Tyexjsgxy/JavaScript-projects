const timeZones = { //list of time zones
  BIT: -12,
  PST: -8,
  EST: -5,
  GMT: 0,
  CET: +1,
  IST: +5.5
};

let TZ = "GMT";   // here chose your time zone
let Hour = 14; // here chose the hour
let result = (Hour + timeZones[TZ] + 24) % 24;

console.log(result)