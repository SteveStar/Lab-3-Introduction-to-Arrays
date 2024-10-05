// Step 1
console.log("-- Step 1 --");
let arrColorsNum = ["Red","Green", 4, 5.2 ,"Orange"];
console.log(arrColorsNum);

//Step 2
console.log("-- Step 2 --");
console.log(arrColorsNum[0], arrColorsNum[2], arrColorsNum[4]);

//Step 3
console.log("-- Step 3 --");
console.log(`Within my array, there are ${arrColorsNum.length} elements.`);

//Step 4
console.log("-- Step 4 --");
arrColorsNum.push('Blue');
console.log(arrColorsNum); // Added blue to the end

arrColorsNum.pop();
console.log(arrColorsNum); // Removed blue from the end

arrColorsNum.shift();
console.log(arrColorsNum); // Removed red from the start.

//Step 5
console.log("-- Step 5 --");
console.log("! Start of For Loop !");

for (let i = 0; i < arrColorsNum.length; i++) {
    console.log(arrColorsNum[i]);
}

console.log("! Start of ForEach !");
arrColorsNum.forEach((colorsAndNumbers) => console.log(colorsAndNumbers));

//Step 6
console.log("-- Step 6 --");

let [bestColor, decentNumber, rest] = arrColorsNum; // Basically assigns a reference/variable to the indexed element and you can print

console.log(bestColor);
console.log(decentNumber);
