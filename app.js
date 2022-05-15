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