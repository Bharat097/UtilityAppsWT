const readLineSync = require('readline-sync');
const crypto = require('crypto');


const UrlEncoderDecoder = () => {
  const functions = {
    encoder: function encoder() {
      let url = readLineSync.question("Enter URL to Encode: ");
      return encodeURIComponent(url)
    },
    decoder: function decoder() {
      let url = readLineSync.question("Enter URL to Decode: ");
      return urlDecode(url)
    }
  }

  console.log(
    `
    1. Encode URL
    2. Decode URL 
    `
  )

  let userChoice = getUserChoice(1, 2);
  while (userChoice === -1) {
      userChoice = getUserChoice(1, 2);
  }

  if (userChoice === 1){
    console.log(functions.encoder())
  } else if (userChoice === 2) {
    console.log(functions.decoder())
  }
}




const Base64EncoderDecoder = () => {
  const functions = {
    encoder: function() {
      let string = readLineSync.question("Enter string to Encode: ");
      return Buffer.from(string).toString('base64');
    },
    decoder: function() {
      let string = readLineSync.question("Enter string to Decode: ");
      return Buffer.from(string, 'base64').toString('ascii');
    }
  }

  console.log(
    `
    1. Base64 Encode
    2. Base64 Decode 
    `
  )

  let userChoice = getUserChoice(1, 2);
  while (userChoice === -1) {
      userChoice = getUserChoice(1, 2);
  }

  if (userChoice === 1){
    console.log(functions.encoder())
  } else if (userChoice === 2) {
    console.log(functions.decoder())
  }
}




const StringHasher = () => {
  const functions = {
    md5Hasher: function() {
      let string = readLineSync.question("Enter string to generate md5 hash: ");
      return crypto.createHash("md5").update(string).digest('hex');
    },
    sha1Hasher: function() {
      let string = readLineSync.question("Enter string to generate sha-1 hash: ");
      return Buffer.from(string, 'sha1').toString('ascii');
    },
    sha256Hasher: function() {
      let string = readLineSync.question("Enter string to generate sha-256 hash: ");
      return crypto.createHash("sha256").update(string).digest('hex');
    },
    sha512Hasher: function() {
      let string = readLineSync.question("Enter string to generate sha-512 hash: ");
      return crypto.createHash("sha512").update(string).digest('hex');
    }
  }

  console.log(
    `
    1. Generate MD5 Hash
    2. Generate SHA-1 Hash
    3. Generate SHA-256 Hash
    4. Generate SHA-512 Hash
    `
  )

  let userChoice = getUserChoice(1, 4);
  while (userChoice === -1) {
      userChoice = getUserChoice(1, 4);
  }

  if (userChoice === 1){
    console.log(functions.md5Hasher())
  } else if (userChoice === 2) {
    console.log(functions.sha1Hasher())
  } else if (userChoice === 3) {
    console.log(functions.sha256Hasher())
  } else if (userChoice === 4) {
    console.log(functions.sha512Hasher())
  }
}




const EpochConvertor = () => {
  const functions = {
    toHumanDate: function() {
      let epoch = parseInt(readLineSync.question("Enter Epoch Time to convert: "));
      let date = new Date(epoch)
      return date.toLocaleString()
    },
    toEpoch: function() {
      let year = readLineSync.question("Enter Year: ");
      let month = readLineSync.question("Enter Month: ");
      let day = readLineSync.question("Enter Day: ");

      let hour = readLineSync.question("Enter Hour: ");
      let min = readLineSync.question("Enter Minuter: ");
      let sec = readLineSync.question("Enter Second: ");

      let date = `${year}/${month}/${day} ${hour}:${min}:${sec}`
      console.log(date)
      let epoch = new Date(date).getTime()
      return epoch;
    }
  }

  console.log(
    `
    1. Epoch to Local Date Time
    2. Date Time to Epoch
    `
  )

  let userChoice = getUserChoice(1, 2);
  while (userChoice === -1) {
      userChoice = getUserChoice(1, 2);
  }

  if (userChoice === 1){
    console.log(functions.toHumanDate())
  } else if (userChoice === 2) {
    console.log(functions.toEpoch())
  }
}




const NumberConvertor = () => {

  const functions = {
    binToDec: function () {
      let num = readLineSync.question("Enter Binary Number: ");
      return parseInt(num, 2).toString(10);
    },
    binToHex: function () {
      let num = readLineSync.question("Enter Binary Number: ");
      return parseInt(num, 2).toString(16).toUpperCase();
    },
    binToOctal: function () {
      let num = readLineSync.question("Enter Binary Number: ");
      return parseInt(num, 2).toString(8)
    },
    decToBin: function () {
      let num = readLineSync.question("Enter Decimal Number: ");
      return parseInt(num, 10).toString(2)
    },
    decToHex: function () {
      let num = readLineSync.question("Enter Decimal Number: ");
      return parseInt(num, 10).toString(16).toUpperCase();
    },
    decToOctal: function () {
      let num = readLineSync.question("Enter Decimal Number: ");
      return parseInt(num, 10).toString(8)
    }
  }

  console.log(
    `
    1. Binary to Decimal
    2. Binary to Hex
    3. Binary to Octal
    4. Decimal to Bin
    5. Decimal to Hex
    6. Decimal to Octal
    `
  )

  let userChoice = getUserChoice(1, 6);
  while (userChoice === -1) {
      userChoice = getUserChoice(1, 6);
  }

  if (userChoice === 1){
    console.log(functions.binToDec())
  } else if (userChoice === 2) {
    console.log(functions.binToHex())
  } else if (userChoice === 3) {
    console.log(functions.binToOctal())
  } else if (userChoice === 4) {
    console.log(functions.decToBin())
  } else if (userChoice === 5) {
    console.log(functions.decToHex())
  } else if (userChoice === 6) {
    console.log(functions.decToOctal())
  }
}




const RgbToHexConvertor = () => {
  console.log("Under Construction...")
}


const UnitConvertor = () => {
  console.log("Under Construction...")
}


const mapper = {
  1: UrlEncoderDecoder,
  2: Base64EncoderDecoder,
  3: StringHasher,
  4: EpochConvertor,
  5: NumberConvertor,
  6: RgbToHexConvertor,
  7: UnitConvertor
}



const greetUser = () => {
  console.log(`Hi, Welcome to the Utility Apps.`);
}



const getUserChoice = (min, max) => {
  let choice = readLineSync.question("\nEnter your choice: ");

  if (!isNaN(choice) && Number.isInteger(Number(choice))) {
    choice = parseInt(choice);
    if (choice >= min && choice <= max) {
      return choice
    }
  }

  console.log("Please Enter Valid Choice..!!");
  return -1;
}



const driver = () => {
  greetUser();

  console.log(
    `Select the Utility. \n
    1. URL Encoder/Decoder
    2. Base64 Encoding/Decoding
    3. String hashing
    4. Epoch Converters
    5. Binary/Decimal/Hex/Octal Converters
    6. RGB ⇔ Hex
    7. Unit Converters \n\n`
  )

  let userChoice = getUserChoice(1, 7);
  while (userChoice === -1) {
      userChoice = getUserChoice(1, 7);
  }

  mapper[userChoice]()
}

driver();