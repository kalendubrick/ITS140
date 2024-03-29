/* =============================
   File name: ITS140-DubrickKalen-Lab05.js
   Description: A program to input customer information and display balance due for 10 months
   Usage: cscript ITS140-DubrickKalen-Lab05.js
   © Kalen Dubrick 2012
   ============================= */

/* ---------------------------- */
/* beginning of your code       */
/* ---------------------------- */

// declaration if any

var custNum, custName;
var balanceDue, origBalance, numMonths = 10, percentPaid = 0.10;

// prompt for input

readCustInfo();

// processing if any

displayCustInfo();
calcBalanceDue();

// Prompt for and store customer information
function readCustInfo() {
	write("Please enter the customer account number: ");
	custNum = readLine();
	write("Please enter the customer's name: ");
	custName = readLine();
	write("Please enter the customer's current balance due: ");
	origBalance = readLine();
	// Convert origBalance to an int to perform math on it
	origBalance = parseInt(origBalance);
}

// Display customer information
function displayCustInfo() {
	writeLine();
	writeLine("=========================");
	writeLine("Account number: " + custNum);
	writeLine("Name: " + custName);
}

// Calculate and display balance for 10 months and display for each month
function calcBalanceDue() {
	for (var count = 1; count <= numMonths; count++) {
		balanceDue = origBalance - (origBalance * (percentPaid * count));
		writeLine("Balance for month #" + count + ": $" + balanceDue.toFixed(2));
	}
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
