import readlinesync from "readline-sync";

while (1) {
    console.log("\nIEEE 754 Calculator");
    console.log("Press 0 to Exit");
    console.log("Press 1 to get Single Precision - 32 Bit conversion");
    console.log("Press 2 to get Double Precision - 64 Bit conversion");

    let choice = parseInt(readlinesync.question("Enter your option: "));

    if (choice === 0) {
        console.log("Exiting the Calculator\n");
        break;
    }

    if (choice === 1 || choice === 2) {
        let bits = (choice === 1) ? 23 : 52;
        let expBits = (choice === 1) ? 8 : 11;

        let number = readlinesync.question("Enter a fractional number: ");
        ieee754(number, bits, expBits);
    } else {
        console.log("Invalid Input, Please Try Again!\n");
    }

    let decision = readlinesync.question("Do you want to continue? (Y/N): ");
    if (decision == 'n' || decision == 'N') {
        console.log("I am exiting!\n");
        break;
    }
}


function ieee754(number, Mantissa_Bits, exponent_Bits) {
    console.log(`\nProcessing ${Mantissa_Bits === 23 ? "32-bit" : "64-bit"} IEEE 754...\n`);

    let sign = number >= 0 ? "0" : "1";
    number = Math.abs(number).toString();

    let array = number.split(".");
    let integer_Part = parseInt(array[0]);
    let fractional_Part = parseFloat("0." + (array[1] || "0"));

    let integer_Binary = integer_Part.toString(2);

    let fractional_Binary = "";
    let count = 0;
    while (fractional_Part > 0 && count < Mantissa_Bits) {
        fractional_Part *= 2;
        if (fractional_Part >= 1) {
            fractional_Binary += "1";
            fractional_Part -= 1;
        } else {
            fractional_Binary += "0";
        }
        count++;
    }

    let full_Binary = integer_Binary + "." + fractional_Binary;
    console.log("Binary number:", full_Binary);

    let one_index = full_Binary.indexOf("1");
    let dot_index = full_Binary.indexOf(".");
    let power = (dot_index > one_index) ? dot_index - one_index - 1 : dot_index - one_index;

    let wholeBinary = full_Binary.replace(".", "");
    let mantissa = wholeBinary.slice(one_index + 1);

    console.log(`Scientific Notation = 1.${mantissa} x 2^${power}`);
    console.log(`Mantissa = ${mantissa}`);
    
    let bias = Math.pow(2, exponent_Bits - 1) - 1;
    let exponent_Biased = bias + power;
    let Exponent_Binary = exponent_Biased.toString(2).padStart(exponent_Bits, "0");

    mantissa = mantissa.padEnd(Mantissa_Bits, "0").slice(0, Mantissa_Bits);

    console.log("\n----- IEEE 754 Format -----");
    console.log(`Sign     : ${sign}`);
    console.log(`Exponent : ${Exponent_Binary}`);
    console.log(`Mantissa : ${mantissa}`);
    console.log(`Final    : ${sign}${Exponent_Binary}${mantissa}`);
}
