let number = 12; // Assign any number here

if (number > 0) {
  print(number); // Output for positive numbers
} else if (number < 0) {
  print(number); // Output for negative numbers
} else {
  print(0); // Output for zero
}

switch (day) {
  case 1:
    print(Sunday); // Output Sunday
    break;
  case 2:
    print(Monday);
    break;
  case 3:
    print(Tuesday);
    break;
  case 4:
    print(Wednesday);
    break;
  case 5:
    print(Thursday);
    break;
  case 6:
    print(Friday);
    break;
  case 7:
    print(Saturday);
    break; // Add more cases
}

for (let i = 1; i <= 5; i++) {
  // Print i
}

let i = 1;

while (i <= 5) {
  // Print i and increment
}

let j = 1;

do {
  // Print j j++;
} while (j <= 5);

if (i === 3) {
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
