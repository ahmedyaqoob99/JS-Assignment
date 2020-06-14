// Chp # 1:

// Assignmnet # 1:
alert("Error!Please enter a valid password");
// Assignmnet # 2:
alert("Welocme to JS Land...\n Happy coding");
// Assignmnet # 3:
alert("Welocme to JS Land");
// Assignmnet # 4:
alert("Hello... I can run JS through my web browser's console");

// # Chp # 2:

// Assignment # 1:
var username;
var myName = "M Ahmed Raza";
var messege = "Hello World";
alert(messege);
var Age = 21;
var course = "Certified Mobile Application Development";
alert(myName);
alert(Age);
alert(course);

// Assignment # 2:
alert("PIZZA" + "\n" + "PIZZ" + "\n" + "PIZ" + "\n" + "PI" + "\n" + "P");

// Assignment # 3:
var email = "ahmedyaqoob89@gmail.com";
alert("My email address is" + " " + email);

// Assignment # 4:
var book = "A smarter way to learn Javascript";
alert("I am trying to learn from the book" + " " + book);

// Assignment # 5:
document.write("Yah! I can write HTML content through javascript");

// Assignment # 6:
alert("----------------0aAa0----------------");

// Chp # 3:

// Assignment # 1:
var age = "21";
alert("I am " + age + " " + "years old");

// Assignment # 2:
var N = 14;
alert("You have visited this site " + N + " " + "times");

// Assignment # 3:
var birthYear = "1999";
document.write("<br>");
document.write("My birth year is" + birthYear + "<br>" + "Data type of my declared variable is number");

// Assignment# 4:
var visitorName = "A Ahmed Raza";
productTitle = "T-shirt";
quantity = "5";
document.write("<br>" + visitorName + "ordered" + " " + quantity + " " + productTitle + " " + "on Online Store" + "<br>");

// Chp # 4:



// Chp # 5:

var a = 10;
var b = 20;
var c = a + b;
var d = a - b;
var e = a * b;
var f = a / b;
var g = a % b;
document.write("the sum of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c + "<br>");
document.write("the subtraction of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + d + "<br>");
document.write("the multiplication of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + e + "<br>");
document.write("the division of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + f + "<br>");
document.write("the modulus of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + g + "<br>");
var faa;
document.write("Value after variable declaration is: ?? <br>");
var faa = 5;

document.write("Initial value:" + faa + "<br>");
faa += 1;
document.write("Value after increment is :" + faa + "<br>");
faa += 7;
document.write("Value after addition is:" + faa + "<br>");
faa -= 1;
document.write("Value after decrement is:" + faa + "<br>");
faa = faa % 3;
document.write(" The remainder is :  " + faa + "<br>");
var ticket = 600;
var costPrice = ticket * 5;
document.write("Total cost to buy " + " " + "5 ticket to a movie " + " " + "is" + costPrice + "PKR" + "<br>");
// table#;
for (var i = 1; i <= 10; i++) {
    document.write("2" + "x" + i + "=" + 2 * i);
    document.write("<br>");
}
// temp convert;
var cel = 100;
var feh = 38;
var convertfeh = (cel * 9 / 5) + 32;
var convertcel = (feh - 32) * 5 / 9;
document.write(cel + "'C" + "is" + " " + convertfeh + "'F" + "<br>");
document.write(feh + "'F" + "is" + " " + convertcel + "'C" + "<br>");

// shopping cart system for an e-commerce website
var item1 = 300;
var item2 = 800;
var quantity1 = 2;
var quantity2 = 10;
var charges = 200;
document.write("Price of item 1 is" + item1 + "<br>");
document.write("quantity of item 1 is" + quantity1 + "<br>");
document.write("Price of item 2 is" + item2 + "<br>");
document.write("Quantity of item 2 is" + quantity2 + "<br>");
document.write("Shipping charges is" + charges + "<br>");

// marksheet
var Total = 980;
var obtained = 809;
var percentage = (obtained / Total) * 100;
document.write("Tota Marks:" + Total + "<br>");
document.write("Marks obtained:" + obtained + "<br>");
document.write("percentage:" + percentage + "<br>");

// currency converter
var us = 1;
var riyal = 25;
// convert dollar in to rupees;
var convertDol = us * 154;
// convert riyal in to rupees;
var convertRiyal = riyal * 28;
document.write("1 US Dollar =" + " " + convertDol + "Pakistani Rupee" + "<br>");
document.write("25 Saudi Riyal =" + " " + convertRiyal + "Pakistani Rupee" + "<br>");
var num = (2 + 5 * 10) / 2;
document.write("the result of the expression is" + " " + num + "<br>");

// age calculate;
var cyear = 2020;
var birthYear = 1999;
var age = cyear - birthYear;
document.write("current year:" + "" + cyear + "<br>");
document.write("birth year:" + "" + birthYear + "<br>");
document.write("Your age is:" + age + "<br>");

// area of circle;
var radius = 8;
var circum = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write("Radius of circle:" + radius + "<br>");
document.write("The circumference of the circle is:" + circum + "<br>");
document.write("The area is:" + area + "<br>");

//The Lifetime Supply Calculator
var snack = "Lays";
var age = 21;
var maximum_age = 66;
document.write("Favourite snack :" + snack + "<br>");
document.write("Current age:" + age + "<br>");
document.write("Estimated maximum age:" + maximum_age + "<br>");

// Chp # 6 to 9:

var a = 10;
document.write("The value of a is:" + a + "<br>");
document.write("................................." + "<br>");
a = ++a;
document.write("The value of ++a is:" + a + "<br>");
document.write("The value of a is:" + a + "<br>");
a = a++;
document.write("The value of a++ is:" + a + "<br>");
document.write("The value of   a is:" + a + "<br>");
var a = --a;
document.write("The value of --a is:" + a + "<br>");
document.write("The value of a is:" + a + "<br>");
var a = 2,
    b = 1;
var result = --a - --b + ++b + b--;
document.write("a is" + a + "<br>");
document.write(" b is" + b + "<br>");
document.write("result is" + result + "<br>");
// display it’s multiplication table on your browser.
var table = prompt("enter table number");
for (var i = 1; i <= 10; i++) {
    if (table > 0) {
        document.write(table + "x" + i + "=" + table * i);
        document.write("<br>");
    } else {
        document.write(5 + "x" + i + "=" + 5 * i);
        document.write("<br>");
    }

}
// calculate total marks and percentage
var eng = parseInt(prompt("Enter English Marks"));
var math = parseInt(prompt("Enter Math Marks"));
var urdu = parseInt(prompt("Enter Urdu marks"));
var all = parseInt(eng + math + urdu);
var perc = (all / 300) * 100;
document.write("<b>subject Total marks obtained marks percentage" + "<br>");
document.write("English        100             " + eng + "     " + eng + "%" + "<br>");
document.write("math           100             " + math + "     " + math + "%" + "<br>");
document.write("urdu           100             " + urdu + "     " + urdu + "%" + "<br>");
document.write(" 300" + " " + all + " " + perc + "%" + "<br>");

// Chp # 9 to 11:

// “city” name as input from user
var city = prompt("enter city name");
if (city === "karachi") {
    document.write("“Welcome to city of lights" + "<br>");
}

var gender = prompt("enter gender");
if (gender === "male") {
    document.write("Good Morning Sir" + "<br>");
} else {
    document.write("Good Morning Ma’am" + "<br>");
}
// Traffic Signal
var lal = prompt("Enter Signal Color");
var green = prompt("Enter Signal Color");
var yello = prompt("Enter Signal  Color");
document.write("<table>");
document.write("<tr><td>Signal color</td>" + " " + "<td>Message</td></tr>" + "<br>");
document.write("<tr><td>Red</td>" + " " + "<td>Must Stop</td></tr>" + "<br>" + "<tr><td>Yellow</td>" + "" + "<td>Ready to move</td></tr>" + "<br>" + "<tr><td>Green</td>" + " " + "<td>Move now</td></tr>");
document.write("<table>");

// a program to take input remaining fuel in car
var fuel = prompt("enter remaining fuel in litre");
if (fuel === 0.25) {
    document.write("Please refill the fuel in your car");

}
// check whether alert message

// total marks, marks obtained, percentage, grade
document.write("total marks:" + " " + "300" + "<br>");
document.write("marks obtained:" + " " + all + "<br>");
document.write("percentage:" + perc + "%" + "<br>");
if (perc <= 100 && perc == 80) {
    document.write("grade:A-one" + "<br>");
}
if (perc < 80 && perc == 70) {
    document.write("grade:A" + "<br>")

}
if (perc < 70 && perc == 60) {
    document.write("grade:B" + "<br>")

}
if (perc < 60 && perc == 50) {
    document.write("grade:C" + "<br>")

}
if (perc < 50 && perc == 40) {
    document.write("grade:D" + "<br>")

} else {
    document.write("fail" + "<br>");
}

// Guess game
var sec = 2;
var guess = prompt("guess the secret number." + "<br>");
if (guess == sec) {
    document.write("Bingo! Correct answer" + "<br>")
}
if (guess == sec + 1) {
    document.write("Close enough to the correct answer" + "<br>");

}
// divisible by 3
var divisible = prompt("given number");
if ((divisible % 3) == 0) {
    document.write("your number is divisible by 3" + "<br>");
}
// temperature update
var temp = prompt("enter temperature" + "<br>");
if (temp > 40) {
    document.write("It is too hot outside." + "<br>");

}
if (temp > 30 && temp < 40) {
    document.write(" The Weather today is Normal." + "<br>");

}
if (temp > 20 && temp <= 30) {
    document.write("Today’s Weather is cool.");

}
if (temp > 10 && temp <= 20) {
    document.write("OMG! Today’s weather is so Cool" + "<br>");

}

// calculator
var firstnumber = parseInt(prompt("enter first number"));
var secondnumber = parseInt(prompt("enter 2nd number"));
var oper = parseInt(prompt("enter operator"));
if (oper == "+") {
    var a = firstnumber + secondnumber;
    alert(a + "<br>");
}
if (oper == "-") {
    var a = firstnumber - secondnumber;
    alert(a + "<br>");

}
if (oper == "*") {
    var a = firstnumber * secondnumber;
    alert(a + "<br>");
}
if (oper == "/") {
    var a = firstnumber / secondnumber;

    alert(a + "<br>");
}

// Assignment # 12-13:


// Assignment # 13-15:
var qualif = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write('Qualifications' + "<br>");
for (var i = 0; i < qualif.length; i++) {

    document.write(qualif[i] + "<br>");
}

// the scores & percentages of students
var names = ["micahel", "john", "Tony"];
var scores = [320, 230, 480];
for (var i = 0; i < scores.length; i++) {
    var p = (scores[i] / 500) * 100;
    document.write("score of" + " " + names[i] + "" + "is" + scores[i] + " " + "percentages:" + "" + p + "%" + "<br>");
}

// color names
var color = ["red", "orange", "yellow", "black", "voilet"];
for (var i = 0; i < color.length; i++) {
    document.write(color[i] + "<br>");
}
color.unshift(prompt("enter a  color that you wnat to add at the begining"));

for (var i = 0; i < color.length; i++) {
    document.write(color[i] + "<br>");
}
color.push(prompt("enter a  color that you wnat to add at the end"));

for (var i = 0; i < color.length; i++) {
    document.write(color[i] + "<br>");
}
color.unshift(prompt("enter a  color that you wnat to add at the begining"), prompt("enter a  color that you wnat to add at the begining"));
for (var i = 0; i < color.length; i++) {
    document.write(color[i] + "<br>");
}
color.shift();
for (var i = 0; i < color.length; i++) {
    document.write(color[i] + "<br>");
}
// ascending order using Array’s sort method.
var sc = [210, 232, 333, 320, 290];
for (var i = 0; i < sc.length; i++) {
    document.write("scores of student" + sc[i] + ",");
}
document.write("<br>");

// an array with city names
var cities = ["karachi", "islamabad", "quetta", "lahore"];
document.write("Cities  list" + "<br>");
for (var i = 0; i < cities.length; i++) {
    document.write(cities[i] + ",");
}

// Assignment # 17-20
for (i = 0; i <= 10; i++) {
    document.write(i + "<br>");
}

var mul = prompt("table number");
var len = prompt("table lenght");

for (var i = 1; i <= len; i++) {
    document.write(mul + "x" + i + "=" + 2 * i);
    document.write("<br>");
    var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
    for (var i = 0; i < fruits.length; i++) {
        document.write("element at index" + i + " " + fruits[i] + "<br>");
    }
}

// Counting
for (var i = 0; i <= 15; i++) {
    document.write(i + ",");
}

// Reverse counting
for (var i = 10; i > 0; i--) {
    document.write(i + ",");
}

// even
for (var i = 0; i <= 20; i + 2) {
    document.write(i + " ,");
}

// Odd
for (var i = 1; i < 20; i + 2) {
    document.write(i + ",");
}

//  Series
for (var i = 2; i <= 20; i + 2) {
    document.write(i + "k" + ",");
}