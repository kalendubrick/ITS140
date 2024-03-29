/* =============================
   File name: ITS140-DubrickKalen-EC.js
   Description: A program to track airline sales data
   Usage: cscript ITS140-DubrickKalen-EC.js
   © Kalen Dubrick 2012
   ============================= */

/* ---------------------------- */
/* beginning of your code       */
/* ---------------------------- */

// declaration if any

   var routes = new Array("Chicago,New York","Chicago,Los Angeles","Miami,Chicago","Los Angeles,San Francisco","Las Vegas,Chicago");
   var airlines = new Array("Blue Airlines","Sunset Airlines","Blue Airlines","Westcoast Airlines","Sunset Airlines");
   var prices = new Array(199,249,219,79,239);
   var ticketsSold = new Array(0,0,0,0,0);
   var departLoc, arriveLoc, bestSelling, bestSellingPos, worstSelling, worstSellingPos;
   var numTickets, SENTINEL = "quit";

// prompt for input

housekeeping();

// processing if any

while (departLoc != SENTINEL) {
   detailLoop();
}

// output

endOfJob()


/* ---------------------------- */
/* end of your code             */
/* ---------------------------- */

function housekeeping() {
   write("Please enter the departing location, or quit to end: ");
   departLoc = readLine();
}

function detailLoop() {
   write("Please enter the arriving location: ");
   arriveLoc = readLine();
   write("Please enter the number of tickets sold: ");
   numTickets = readLine();
   writeLine();
   // Convert numTickets to an integer
   numTickets = parseInt(numTickets);
   
   // Search for the route the user entered
   for (var i = 0; i<routes.length; i++) {
      if (routes[i] == (departLoc + "," + arriveLoc))
         ticketsSold[i] = ticketsSold[i] + numTickets;
   }

   housekeeping();
}

function endOfJob() {
   // Search for the best selling route and display it
   bestSelling = ticketsSold[0];
   bestSellingPos = 0;
   for (var i = 1; i<ticketsSold.length; i++) {
      if ((ticketsSold[i]*prices[i]) > (bestSelling*prices[bestSellingPos])) {
         bestSelling = ticketsSold[i];
         bestSellingPos = i;
      }
   }

   writeLine();
   writeLine("Best selling route");
   writeLine("==================");
   write("The best selling route is: ");
   write(routes[bestSellingPos].substring(0,routes[bestSellingPos].indexOf(",")));
   write(" to ");
   writeLine(routes[bestSellingPos].substring((routes[bestSellingPos].indexOf(",") + 1)));
   writeLine("The airline is: " + airlines[bestSellingPos]);
   writeLine("The total sales for the route are: $" + (bestSelling*prices[bestSellingPos]).toFixed(2)); 

   // Search for the worst selling route and display it
   worstSelling = ticketsSold[0];
   worstSellingPos = 0;
   for (var i = 1; i<ticketsSold.length; i++) {
      if ((ticketsSold[i]*prices[i]) < (worstSelling*prices[worstSellingPos])) {
         worstSelling = ticketsSold[i];
         worstSellingPos = i;
      }
   }

   writeLine();
   writeLine("Worst selling route");
   writeLine("==================");
   write("The worst selling route is: ");
   write(routes[worstSellingPos].substring(0,routes[worstSellingPos].indexOf(",")));
   write(" to ");
   writeLine(routes[worstSellingPos].substring((routes[worstSellingPos].indexOf(",") + 1)));
   writeLine("The airline is: " + airlines[worstSellingPos]);
   writeLine("The total sales for the route are: $" + (worstSelling*prices[worstSellingPos]).toFixed(2)); 
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
