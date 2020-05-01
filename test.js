const dtf = require("./index.js");

console.log(" ");

// test year placeholders
console.log(`YYYY = ${dtf("YYYY")}`);
console.log(`YY = ${dtf("YY")}`);

console.log(" ");

// test month placeholders
console.log(`MMMM = ${dtf("MMMM")}`);
console.log(`MMM = ${dtf("MMM")}`);
console.log(`MM = ${dtf("MM")}`);
console.log(`M = ${dtf("M")}`);

console.log(" ");

// test day/date placeholders
console.log(`DDDD = ${dtf("DDDD")}`);
console.log(`DDD = ${dtf("DDD")}`);
console.log(`DD = ${dtf("DD")}`);
console.log(`D = ${dtf("D")}`);

console.log(" ");

// test hour & am/pm placeholders
console.log(`HH = ${dtf("HH")}`);
console.log(`hh = ${dtf("hh")}`);
console.log(`h = ${dtf("h")}`);
console.log(`ampm = ${dtf("ampm")} (${dtf("h ampm")}), same as .ampm()`);
console.log(`AMPM = ${dtf("AMPM")} (${dtf("h AMPM")}), same as .AMPM()`);

console.log(" ");

// test minutes placeholders
console.log(`mm = ${dtf("mm")}`);
console.log(`m = ${dtf("m")}`);

console.log(" ");

// test seconds placeholders
console.log(`ss = ${dtf("ss")}`);
console.log(`s = ${dtf("s")}`);

console.log(" ");

// test milliseconds placeholders
console.log(`ii = ${dtf("ii")} (ms)`);

console.log(" ");

// test .date() preset function
console.log(`.date(): ${dtf.date()}`);
console.log(`.date("full"): ${dtf.date("full")}`);

console.log(" ");

// test .time() preset function
console.log(`.time(): ${dtf.time()}`);
console.log(`.time("short"): ${dtf.time("short")}`);

console.log(" ");

// test .ampm() function
console.log(`.ampm(): ${dtf.ampm()} (${dtf("h")} ${dtf.ampm()})`);
console.log(`.AMPM(): ${dtf.AMPM()} (${dtf("h")} ${dtf.AMPM()})`);

console.log(" ");

// test a combination of multiple placeholders in 1 string
console.log(`HH:mm:ss on DD/MM/YYYY (DDD, n_D MMMM YYYY) = ${dtf("HH:mm:ss on DD/MM/YYYY (DDD, n_D MMMM YYYY)")}`);

console.log(" ");

console.log(`dtf("h:mm ampm"): ${dtf("h:mm ampm")}`);
console.log(`dtf(): ${dtf()}`)
console.log(`dtf(new Date()): ${dtf(new Date())}`);

console.log(" ");


// test n_ placeholders
console.log(`n_YY = ${dtf("n_YY")} (year of the century)`);
console.log(`n_M = ${dtf("n_M")} (month of the year)`);
console.log(`n_D = ${dtf("n_D")} (day of the month)`);
console.log(`n_HH = ${dtf("n_HH")} (hour of the day)`);
console.log(`n_h = ${dtf("n_h")} (hour of the morning/afternoon)`);
console.log(`n_m = ${dtf("n_m")} (minute of the hour)`);
console.log(`n_s = ${dtf("n_s")} (second of the minute)`);

console.log(" ");


// test .nth() funtion
for(let n = 0; n <= 30; n++) {
    process.stdout.write(`  ${dtf.nth(n)}   `);
};
process.stdout.write(`  ${dtf.nth(111)} `);
process.stdout.write(`  ${dtf.nth(112)} `);
process.stdout.write(`  ${dtf.nth(113)} `);
