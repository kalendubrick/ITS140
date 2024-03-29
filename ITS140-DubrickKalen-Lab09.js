/* =============================
   File name: ITS140-DubrickKalen-Lab09.js
   Description: 
   Usage: cscript ITS140-DubrickKalen-Lab09.js 
   © Kalen Dubrick 2012
   ============================= */

// call initialize()
initialize();

/* ---------------------------- */
/* beginning of your code       */
/* ---------------------------- */

// declaration if any

// Constants
var CUSTOMER_DATA_FILE = "VernonHillsMailOrderBoxes.txt";
// Other variables
var custDataFile;
var fso;
var title, firstName, lastName, stAddress, city, state, zipCode;
var numBoxes;

// prompt for input

// Prepare file for reading
housekeeping();

// processing if any

// Read customer data from file and print mailing labels
while (!(custDataFile.AtEndOfStream)) 
{
	detailLoop();
}

// output

// Close file
endOfJob();

/* ---------------------------- */
/* end of your code             */
/* ---------------------------- */

function housekeeping()
{
	fso = getFileSystemObject();
	custDataFile = fso.OpenTextFile(CUSTOMER_DATA_FILE, ForReading, false, DEFAULT_MODE);
}

function detailLoop()
{
	// Populate variables
	title = custDataFile.ReadLine();
	firstName = custDataFile.ReadLine();
	lastName = custDataFile.ReadLine();
	stAddress = custDataFile.ReadLine();
	city = custDataFile.ReadLine();
	state = custDataFile.ReadLine();
	zipCode = custDataFile.ReadLine();
	numBoxes = custDataFile.ReadLine();
	// Convert numBoxes to an int for the for loop
	numBoxes = parseInt(numBoxes);

	// Print mailing label header
	writeLine("=============================================");
	writeLine("Mailing label(s) for : " + title + " " + firstName + " " + lastName);
	writeLine("=============================================");
	// Print label(s)
	for (var i = 0; i < numBoxes; i++)
	{
		writeLine("Ship to:");
		writeLine(title + " " + firstName + " " + lastName);
		writeLine(stAddress);
		writeLine(city + ", " + state + " " + zipCode);
		writeLine();
		writeLine("Box " + (i + 1) + " of " + numBoxes);
		if (numBoxes > 1 && i < (numBoxes - 1))
			writeLine("---");
		else
			writeLine();
	}
}

function endOfJob()
{
	custDataFile.Close();
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
