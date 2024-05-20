//command to read line in the interface
const readline = require('readline');

//command for the interface to be created
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Hardcoded username and password (replace these with your actual authentication logic)
const correctUsername = "admin";
const correctPassword = "admin";

console.log("Welcome to the Event Management System");
console.log("Please enter your username and password to login.");

rl.question("Username: ", (username) => {
  rl.question("Password: ", (password) => {
    // Validating credentials
    if (username === correctUsername && password === correctPassword) {
      console.log(`Login successful! Welcome, ${username}.`);
      // Add code here to redirect to the main menu or dashboard
    } else {
      console.log("Incorrect username or password. Please try again.");
    }
    rl.close();
  });
});
