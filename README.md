
# IEEE-754 CLI Calculator 

A simple command-line tool to convert fractional numbers into IEEE 754 binary format using JavaScript.

It supports both 32-bit (single precision) and 64-bit (double precision) formats.

What is IEEE 754?

IEEE 754 is the standard format that computers use to store and calculate floating-point numbers. It breaks down a number into three parts:

- Sign: Indicates whether the number is positive or negative
- Exponent: Helps represent very large or very small numbers using powers of two
- Mantissa (or fraction):  Stores the precision bits of the number

This project helps you understand how any fractional number is represented in memory at the binary level.

## How it works

The program takes a decimal number from the user along with the preferred precision format (32 or 64 bits). It then calculates the following:

- Sign bit
- Exponent in binary (with bias added)
- Mantissa bits (fractional part)
- Final IEEE 754 binary string

Read more about IEEE 754: https://en.wikipedia.org/wiki/IEEE_754


## How to run

1. Make sure you have [Node.js](https://nodejs.org/) installed.

2. Clone this repository:
    follow this steps: 
        1. git clone git@github.com:armasahar/IEEE754-CLI-Calculator.git (run this in your terminal)
        2. cd IEEE 754 (run this in your terminal)

3. Install dependencies:
    npm install (run this in your terminal)

4. Run the program:
    node main.js (run this in your terminal)

5. Enter a number when asked, and choose the desired precision format.
