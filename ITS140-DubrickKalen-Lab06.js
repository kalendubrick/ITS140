/* =============================
   File name: ITS140-DubrickKalen-Lab06.js
   Description: A program to input prices and calculate the profit
   Usage: cscript ITS140-DubrickKalen-Lab06.js
   © Kalen Dubrick 2012
   ============================= */

/* ---------------------------- */
/* beginning of your code       */
/* ---------------------------- */

// declaration if any

var wholesalePrice, retailPrice, itemProfit;
var QUIT = 0;

// prompt for input

// Get first wholesale price
housekeeping();

// processing if any

// Calculate profit(s)
while (wholesalePrice != QUIT) {
   detail();
}

// output

// Display end message
endOfJob();

// Functions

function housekeeping() {
   write("Please enter the first wholesale price, or 0 to quit: ");
   wholesalePrice = readLine();
   // Convert to an int for the loop comparison
   wholesalePrice = parseInt(wholesalePrice);
}

function detail() {
   write("Please enter the retail price: ");
   retailPrice = readLine();
   // Convert to an int for math
   retailPrice = parseInt(retailPrice);
   itemProfit = retailPrice - wholesalePrice;
   writeLine();
   writeLine("The item's profit is: $" + itemProfit);
   writeLine();
   write("Please enter the next wholesale price, or 0 to quit: ");
   wholesalePrice = readLine();
   // Convert to an int for the loop comparison
   wholesalePrice = parseInt(wholesalePrice);
}

function endOfJob() {
   writeLine();
   writeLine("Thanks for using this program.");
}


/* ---------------------------- */
/* end of your code             */
/* ---------------------------- */

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
