/* =============================
   File name: ITS140-DubrickKalen-Lab10.js
   Description: A program to set and display insurance policy info
   Usage: cscript ITS140-DubrickKalen-Lab10.js
   © Kalen Dubrick 2012
   ============================= */

// call initialize()
initialize();

/* ---------------------------- */
/* beginning of your code       */
/* ---------------------------- */

// declaration if any

// constants
var SENTINEL = 0;
// other variables
var policyNum, premium;
var policyType;

// get the first policy number
getPolicyNum();

while (policyNum != SENTINEL)
{
	// determine the policy type
	policyType = getPolicyType();

	// set premium
	premium = setPremium(policyType);

	// display results
	displayResults(policyNum, policyType, premium);

	// get the next policy number
	getPolicyNum();
}


/* ---------------------------- */
/* end of your code             */
/* ---------------------------- */

function getPolicyNum()
{
	write("Please enter the insurance policy number, or 0 to quit: ");
	policyNum = readLine();
	policyNum = parseInt(policyNum);
}

function getPolicyType()
{
	var policyType;
	do
	{
		write("Please enter the insurance policy type [health or auto]: ");
		policyType = readLine();
	}
	while (policyType != "health" && policyType != "auto");
	return policyType;
}

function setPremium(policyType)
{
	var premium;
	if (policyType == "health")
		premium = 250;
	else
		premium = 175;
	return premium;
}

function displayResults(policyNum, policyType, premium)
{
	writeLine();
	writeLine("The policy number is: " + policyNum);
	writeLine("The policy type is : " + policyType);
	writeLine("The premium is: $" + premium);
	writeLine();
}

/* ============================
   DO NOT CHANGE THE CODE BELOW
   This code only runs in Windows environments
   ============================ */

// --- constants for file system object ---
var ForReading;
var ForWriting;
var ForAppending;

var FOR_READING;
var FOR_WRITING;
var FOR_APPENDING;

var DEFAULT_MODE;
var UNICODE_MODE;
var ASCII_MODE;

// --- initialize function ---
function initialize()
{
	ForReading = FOR_READING = 1;
	ForWriting = FOR_WRITING = 2;
	ForAppending = FOR_APPENDING = 8;

	DEFAULT_MODE = -2; // Opens the file using the system default.
	UNICODE_MODE = -1; // Opens the file as Unicode.
	ASCII_MODE = 0; // Opens the file as ASCII.
}


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

// --- getFileSystemObject function ---
// instantiate and return a file system object
//
function getFileSystemObject()
{
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	return fso;
}

/* ============================ */
/* © Keyuan Jiang 2011          */
/* ============================ */
