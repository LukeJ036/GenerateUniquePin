const existingPins = ["123456", "234567", "345678", "456789", "567890"];

function generateUniquePin(existingPins) {
  const generateRandomNum = () => Math.floor(100000 + Math.random() * 900000);

  let pinCode = generateRandomNum();
  let attempts = 0;

  while (
    (hasDuplicateDigits(pinCode) || existingPins.includes(pinCode)) &&
    attempts < 10000
  ) {
    pinCode = generateRandomNum();
    attempts++;
  }

  if (attempts === 10000) {
    throw new Error("Could not generate a unique pin");
  }

  return pinCode;
}

function hasDuplicateDigits(code) {
  const digits = code.toString().split(""); // splits 6 digit number into an array
  // if the set contains duplicates it will remove them thus it will not equal the same length
  return new Set(digits).size !== digits.length;
}

function generateUniquePinTest() {
  for (let i = 0; i < 1000; i++) {
    const newPin = generateUniquePin(existingPins);

    if (existingPins.includes(newPin)) {
      // logs if a duplicate is found
      console.log(`duplicate found! ${newPin}`);
      return;
    }

    existingPins.push(newPin);
    console.log(newPin);
  }

  console.log("No duplicates found!");
}

generateUniquePinTest();
