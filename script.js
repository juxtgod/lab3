let number = 2; // Assign any number here

if (number > 0) {
  console.log("Positive number"); // Output for positive numbers
} else if (number < 0) {
  console.log("Negative number"); // Output for negative numbers
} else {
  console.log("Zero"); // Output for zero
}
switch (5) {
  case 1:
    console.log("Sunday"); // Output Sunday
    break;
  case 2:
    console.log("Monday"); // Output Monday
    break;
  case 3:
    console.log("Tuesday"); // Output Tuesday
    break;
  case 4:
    console.log("Wednesday"); // Output Wednesday
    break;
  case 5:
    console.log("Thursday"); // Output Thursday
    break;
  case 6:
    console.log("Friday"); // Output Friday
    break;
  case 7:
    console.log("Saturday"); // Output Saturday
    break;
  default:
    console.log("Invalid day"); // Output Invalid day
}

for (let i = 1; i <= 5; i++) {
  console.log(i); // Print i
}

let i = 1;

while (i <= 5) {
  console.log(i, i++); // Print i and increment
}

let j = 1;

do {
  console.log(j, j++); // Print j j++;
} while (j <= 5);

if (i === 4) {
  // Use Break here
}
if (i === 3) {
  //Use continue here
}

let globalVar = "I'm global!";

function scopeExample() {
  let localVar = "I'm local!";
  // Access globalVar and localVar inside the function
}
