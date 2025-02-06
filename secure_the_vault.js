//We are building a vault that requires three mathmatical equations to generate the three codes in a combination.  Use the JavaScript console or the script block within an HTML page to create three variables. Each variable will be the result of each calculation (three in total). The combination of the lock is 10 - 40 - 39. You must use three different arithmetic operators that will generate each individual number, then display the combination on the HTML page, or in an alert popup.

//create a string with the message for the user
const message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

//initalize a variable to a math equation where the result is 10
const one = 5 * 2;
//console.log(one);

//initalize a variable to a math equation where the result is 40
const two = 20 + 20;
//console.log(two);

//initialize a variable to a math equation where the result is 39
const three = 40 - 1;
//console.log(three);

//create an alert popup with the message and combination for the user
alert(`${message} ${one} - ${two} - ${three}`);
