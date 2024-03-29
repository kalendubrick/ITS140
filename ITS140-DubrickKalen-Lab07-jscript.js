/* =============================
   File name: ITS140-DubrickKalen-Lab07-jscript.js
   Description: A program to calculate the purchase price for mangos.
   Usage: cscript ITS140-DubrickKalen-Lab07-jscript.js
   © Kalen Dubrick 2012
   ============================= */

/* ---------------------------- */
/* beginning of your code       */
/* ---------------------------- */

// declaration if any

var numMangos, price;
var SENTINEL = 0, ITEM_PRICE = 1.29;
var PROMPT = "Please enter the number of mangoes you'd like to buy: ";

// prompt for input

housekeeping();

// processing if any

while (numMangos != SENTINEL) {
   detailLoop();
}

// output

// endOfJob() is stubbed and does nothing
endOfJob();

/* ---------------------------- */
/* end of your code             */
/* ---------------------------- */

function housekeeping() {
   write(PROMPT);
   numMangos = readLine();
   // Convert numMangoes to an integer to perform math
   numMangos = parseInt(numMangos);
}

function detailLoop() {
   var rem = numMangos%5;
   if (rem == 0)
      price = (numMangos - ((numMangos / 5) * 2)) * ITEM_PRICE;
   else {
      if (numMangos < 5)
         price = numMangos * ITEM_PRICE;
      else {
         if (rem < 3)
            // Calculate the price for the next lowest multiple of 5, and then add the remainder
            price = (((numMangos - rem) - (((numMangos - rem) / 5) * 2)) * ITEM_PRICE) + (rem * ITEM_PRICE);
         else
            price = (((numMangos - rem) - (((numMangos - rem) / 5) * 2)) * ITEM_PRICE) + (3 * ITEM_PRICE);
      }
   }

   writeLine();
   writeLine("Your total purchase price is: $" + price.toFixed(2));
   writeLine();

   housekeeping();
}

function endOfJob() {}

/* ============================
   DO NOT CHANGE THE CODE BELOW
   This code only runs in Windows environments
   ============================ */

// --- read function ---
// input a single character from the standard input device
//
function read()
{
	return WScript.stdIn.Read(1); // just to read one character
}

// --- read function ---
// input a line from the standard input device
//
function readLine()
{
	return WScript.stdIn.ReadLine();
}

// --- write function ---
// output what's store in content without a newline at the end
//
function write(content)
{
	WScript.stdOut.Write(content);
}

// --- writeLine function ---
// output what's store in content with a newline at the end
//
function writeLine(content)
{
	WScript.stdOut.WriteLine(content);
}

/* ============================ */
/* © Keyuan Jiang 2010          */
/* ============================ */
