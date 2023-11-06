//Create an HTML and JS file and link them with the script tag
//Use a prompt()to ask the user for their name 
//Concatenate the user’s name into a welcome message
//Use a DOM method to output the welcome message into an html element

const userName = prompt("What is your name?");

console.log(
  document.querySelector("#Welcome").innerText = `Welcome, ` + userName
)