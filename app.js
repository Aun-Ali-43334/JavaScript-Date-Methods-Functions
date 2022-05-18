// ------------------------------Assignment # 35-38------------------------------





//alert("Hello Class");


// 1. Write a program that displays current date and time in your browser.
//solution:

// var date = new Date();
// document.write(date); 
// // or
// console.log(date);

// 2. Write a program that alerts the current month in words.For example December.
//solution:

// var date = new Date();
// var monthArray = ["Jan","Feb", "March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
// var month = date.getMonth();
// document.write("<h4>Current Month = ", monthArray[month],"</h4>");


// 3. Write a program that alerts the first 3 letters of the current 
// day, for example if today is Sunday then alert will show Sun.

//solution:
// var date = new Date();
// date = String(date); //convert to string
// console.log("Original Date into String : ",date);
// var day = date.slice(0,3);
// console.log("Slice of String : ",day);

// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
//solution:
// var date = new Date();
// var getDay = date.getDay();
// console.log(getDay);
// if(getDay === 0 || getDate === 1){
    //     alert("Its Fun Day !")
    // }
    
    // 5. Write a program that shows the message “First fifteen
    // days of the month” if the date is less than 16th of the month
    // else shows “Last days of the month”.

    //solution:
    // var currentDate = new Date();
    // var date = currentDate.getDate();
    // console.log(date); 
    // console.log(typeof date); // this will return a Date in a Number form
    // if(date<16){
    //     alert("“First fifteen days of the month”");
    // }
    // else{
    //     alert("“Last days of the month”");
    // }


//6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object

//solution:

// var currentDate = new Date();
// console.log(currentDate);
// console.log("Ellapse Milliseconds since Jan 1 1970 : ",currentDate.getTime());
// var min = currentDate.getTime();
// console.log("Ellapse minutes since Jan 1 1970 : ",min/(1000*60));


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
//solution:

// var currentDate = new Date();
// var getHour = currentDate.getHours();
// //.getHours() gives us the Hours b/w 0-to-23 in Number Data-Type
// console.log(getHour);
// if(getHour>=0 && getHour<=12){
//     alert("Its AM")
// }
// else if(getHour>12 && getHour<23){
//     alert("Its PM")
// }


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

//solution:
// var latterDate = new Date("Dec 31, 2022 15:15:51");
// console.log("Later Date : ",latterDate);




// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

//solution:
// var currentRamazan = new Date("April 04, 2022").getTime()/(1000*60*60*24);
// currentRamazan = Math.floor(currentRamazan);
// console.log("Total Days from 1 Jan 1970 to this Ramzan 2022: ",currentRamazan);

// var pastRamazan = new Date("June 18, 2015").getTime()/(1000*60*60*24);
// pastRamazan = Math.floor(pastRamazan);

// console.log("Total Days from 1 Jan 1970 to this Ramzan 2015: ",pastRamazan);

// var diff = currentRamazan - pastRamazan;
// diff = diff;
// console.log((diff));



// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

//solution
// var seconds = new Date().getTime()/(1000) - new Date("Jan 01, 2015 22:50:16").getTime()/(1000);
// console.log(Math.floor(seconds));


// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

//solution:
// var date =  new Date();
// console.log("Current Date = ",date);
// var date2 = new Date("May 15, 2022 20:26:00");
// console.log("One Hour Ahead = ",date2);


// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

//solution:
// var currentDate = new Date();
// var date = new Date("15 May, 1922");
// alert("Current Date is = "+currentDate +"\n100 Years back = "+date);


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser

//solution:
// var ageInput = +prompt("");
// // console.log(ageInput);

// var date = new Date();
// var year = date.getFullYear();
// // console.log(year);

// var DOB = year - ageInput;
// console.log(DOB);



// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

//solution:
// var customerName = "Aun Ali";
// var date = new Date();
// var monthArray = ["Jan","Feb","March","April","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
// var month = date.getMonth();

// console.log(monthArray[month]);
// var chargesPerUnit = 16;
// var numberOfUnits = 410;

// var netAmount = chargesPerUnit * numberOfUnits;
// var fine = 350;
// var netAmountAfterFine = netAmount + fine;

// document.write("<p>Customer Name  : "+"<strong>"+customerName+"</strong></p>");
// document.write("<p>Month "+"<strong>"+monthArray+"</strong></p>");
// document.write("<p>Number of Unit : "+"<strong>"+numberOfUnits+"</strong></p>");
// document.write("<p>Chare Per Unit : "+"<strong>"+chargesPerUnit+"</strong></p>")
// document.write("<br />");

// document.write("<p>Net Amount (within Due Date) :"+"<strong>"+netAmount+"</strong> </p>");
// document.write("<p>Gross Amount Payable (after Due Date) : "+"<strong>"+netAmountAfterFine+"</strong></p>");




// ----------------------   Assignment # 35-38------------------------------
// ------------------------------FUNCTION------------------------------

// 1. Write a function that displays current date & time in your browser.
//solution:
// var date =  new Date();
// console.log(date);
// document.write(date)

// 2. Write a function that takes first & last name and then it greets the user using his full name.
//solution:
// function greet(fName, lName){
// console.log("Good Morning "+fName +" "+lName);
// }
// var fName = prompt("Enter first Name");
// var lName = prompt("Enter last Name");
// greet(fName,lName);



// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
//solution:
// function add(num1 , num2){
//     console.log(num1 + num2);
// }

// var Number1 = +prompt("Enter first Number");
// var Number2 = +prompt("Enter last Number");
// add(Number1,Number2);


// 5. Write a function that squares its argument
//solution:

// function sqrt(num1){
//     console.log(Math.pow(num1,2));
// }
// var numInput = +prompt("Enter a Numebr")
// sqrt(numInput);



// 6. Write a function that computes factorial of a number.
//solution:

// 7. Write a function that take start and end number as inputs & display counting in your browser.
//solution:

// var startNumber = +prompt("Enter Strating Number");
// var EndNumber = +prompt("Enter Ending Number");

// function loop(Strating, Ending){
//     for(i=startNumber;i<=EndNumber;i++){
//         document.write(i+"<br /> ");
//     }
// }

// loop(startNumber, EndNumber);