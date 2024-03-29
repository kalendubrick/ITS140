/* =============================
   File name: ITS140-DubrickKalen-Lab04.js
   Description: A program to input call information and compute the cost of a call
   Usage: cscript ITS140-DubrickKalen-Lab04.js
   © Kalen Dubrick 2012
   ============================= */

/* ---------------------------- */
/* beginning of your code       */
/* ---------------------------- */

// Declarations
var customerAreaCode, customerPhoneNumber, calledAreaCode, calledPhoneNumber, callTime, totalCallCost, costPerMinute = 0.10;

// Prompt for and store call information
write("Please enter the customer area code: ");
customerAreaCode = readLine();
write("Please enter the customer phone number (no dashes or spaces): ");
customerPhoneNumber = readLine();
write("Please enter the called area code: ");
calledAreaCode = readLine();
write("Please enter the called phone number (no dashes or spaces: ");
calledPhoneNumber = readLine();
write("Please enter the call time in minutes: ");
callTime = readLine();
writeLine();
// Convert callTime to integer to be able to perform calculations with it
callTime = parseInt(callTime);

// Calculate the cost of the call
if ((customerAreaCode != calledAreaCode) && (callTime > 20))
	costPerMinute = 0.13;
totalCallCost = callTime * costPerMinute;
// Convert totalCallCost to float (in case it wasn't already) so it can be displayed like currency
totalCallCost = parseFloat(totalCallCost);

// Display call information
writeLine("Calling phone number: (" + customerAreaCode + ") " + customerPhoneNumber.substr(0,3) + "-" + customerPhoneNumber.substr(3));
writeLine("Called phone number: (" + calledAreaCode + ") " + calledPhoneNumber.substr(0,3) + "-" + calledPhoneNumber.substr(3));
writeLine("Cost of call: $" + totalCallCost.toFixed(2));


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
