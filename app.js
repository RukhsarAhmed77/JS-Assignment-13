// JS Assignment 13

// Task 01

// var date = new Date()

// console.log(date);

// Task 02

// var date = new Date()

// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// alert("Month: " + month[date.getMonth()]);

// Task 03

// var date = new Date()

// var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// alert("day: " + days[date.getDay()]);

// Task 04

// var date = new Date();

// var day = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

// var input = prompt("Enter your day").toLowerCase();

// if (input === "sunday" || input === "saturday") {
//     alert("It's a Fun day");
// } else if (input === "monday" || input === "tuesday" || input === "wednesday" || input === "thursday" || input === "friday") {
//     alert("It's okay! Work hard because it's " + input);
// } else {
//     alert("It's not a day from the week!");
// }

// Task 05

// var date = new Date()

// date.getDate()

// if (date <= 15) {
//     alert("First fifteen days of the month")
// }else{
//     alert("Last fifteen days of the month")
// }

// Task 06

// var currentDate = new Date();
// var elapsedMilliseconds = currentDate.getTime();
// var elapsedMinutes = elapsedMilliseconds / (1000 * 60);

// console.log("Current Date: " + currentDate);
// console.log("Elapsed milliseconds since January 1, 1970: " + elapsedMilliseconds);
// console.log("Elapsed minutes since January 1, 1970: " + elapsedMinutes);

// Task 07

// var time = new Date()

// var hour = time.getHours();
// var minutes = time.getMinutes();
// var seconds = time.getSeconds();

// var hourIn12Format = hour % 12;
// if (hourIn12Format === 0) {
//     hourIn12Format = 12;
// }

// var period;

// if (hour < 12) {
//     period = "AM";
// } else {
//     period = "PM";
// }

// alert(hourIn12Format + ':' + minutes + ':' + seconds + ' ' + period);

// Task 08

// var laterDate = new Date(2020, 11, 31);

// alert(laterDate);

// Task 09

// var ramadanStart = new Date(2015, 5, 18);

// var currentDate = new Date();

// var timeDifference = currentDate - ramadanStart;

// var daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// console.log("Number of days past since 1st Ramadan (June 18, 2015): " + daysPast);

// Task 10

// var yearStart = new Date('January 1, 2015 00:00:00');
// var targetDate = new Date('December 5, 2015 22:50:16 GMT+0500');
// var totalSecondsElapsed = Math.floor((targetDate - yearStart) / 1000);

// document.write(totalSecondsElapsed + " seconds had passed since the beginning of 2015");

// Task 11

// var now = new Date();
// document.write("Current date: " + now + "<br>");

// now.setHours(now.getHours() - 1);
// document.write("1 hour ago, it was: " + now);

// Task 12

// var presentDate = new Date();
// document.write("Current date: " + presentDate + "<br>");

// var hundredYearsBack = new Date("Oct 12, 1923");
// document.write("100 Years back: " + hundredYearsBack);

// Task 13

// var userAge = prompt("Enter Your Age: ");
// var thisYear = new Date().getFullYear();

// var estimatedBirthYear = thisYear - userAge;

// document.write("Your birth year is: " + estimatedBirthYear);

// Task 14

// var currentDate = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var activeMonth = months[currentDate.getMonth()];

// var clientName = "<b>Ahmed Raza</b>";
// var unitsConsumed = 520;
// var costPerUnit = 18;
// var lateFee = 400;

// var payableAmount = (unitsConsumed * costPerUnit).toFixed(2);
// var totalPayable = (parseFloat(payableAmount) + lateFee).toFixed(2);

// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name: " + clientName + "<br>");
// document.write("Month: " + activeMonth + "<br>");
// document.write("Number of units: " + unitsConsumed + "<br>");
// document.write("Charges per unit: " + costPerUnit + "<br>");
// document.write("Net Amount Payable (within Due Date): " + payableAmount + "<br>");
// document.write("Late Payment Surcharge: " + lateFee + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + totalPayable);
