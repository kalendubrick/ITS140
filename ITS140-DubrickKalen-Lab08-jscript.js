/* =============================
   File name: ITS140-DubrickKalen-Lab08-jscript.js
   Description: A program to display team names and calculate the number of members of each team
   Usage: cscript ITS140-DubrickKalen-Lab08-jscript.js 
   © Kalen Dubrick 2012
   ============================= */

/* ---------------------------- */
/* beginning of your code       */
/* ---------------------------- */

// declaration if any

var userNum;
var SENTINEL = -1;
var PROMPT = "Please enter the player's team number, or -1 to quit: ";
var teamName = new Array("Goal Getters", "The Force", "Top Guns", "Shooting Stars", "Midfield Monsters");
var numPlayers = new Array(0, 0, 0, 0, 0);

// prompt for input

// Get the player's team number
housekeeping();

// processing if any

// Display team name and accumulate totals
while (userNum != SENTINEL) {
   detailLoop();
}

// output

// Display team summaries
endOfJob();


/* ---------------------------- */
/* end of your code             */
/* ---------------------------- */

function housekeeping() {
   write(PROMPT);
   userNum = readLine();

   // Convert userNum to an integer for array manipulation
   userNum = parseInt(userNum);
}

function detailLoop() {
   writeLine("Team: " + teamName[userNum-1]);
   writeLine();

   // Add the player to their team total
   numPlayers[userNum-1]++;

   // Get the next number
   housekeeping();
}

function endOfJob() {
   writeLine();
   writeLine("Team summaries");
   writeLine("==============");
   // Display the team number, name, and number of player(s) for each team
   for (var i=0; i<teamName.length; i++) {
      writeLine("Team #" + (i+1) + " (" + teamName[i] + "): " + numPlayers[i] + " player(s)");
   }
}

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
