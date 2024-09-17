// Write your code in this file!
//Defining Current users
//index.jscurrentUser is defined✓
const currentUser = 'Grace Hopper';

// contains "Welcome to Flatbook, " ✓
//1) contains the value of the 'currentUser' variable
//2) ends with an exclamation point!
//const welcomeMessage = 'Welcome to Flatbook, ' + currentUser; //Concatenate Strings with the + Operator(this form allows us to pass 2-3 but not 2-4)
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`; //Interpolate Variables(this form allows us to pass test 2-4 because it requires the  ! at the end as shown in the error msg)

//excitedWelcomeMessage  contains "WELCOME TO FLATBOOK, "✓
// contains the value of the 'currentUser' variable✓
// ends with an exclamation point✓
const excitedWelcomeMessage = welcomeMessage.toUpperCase(); //.toUpperCase() string method (we use this methor to capitalize the code directly above or)

shortGreeting
// contains "Welcome, " ✓
// contains the first initial of the name stored in the 'currentUser' variable ✓
// ends with an exclamation point ✓
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`; //The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
//we need to start our slice at index 0 and end it before index 1 because we only want the 1st initial
