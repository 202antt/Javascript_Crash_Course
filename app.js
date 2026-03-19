// // // // Variables and Data Types //




// // // // Data Types
// // // // - Data Types helps us to organise data in different categories.
// // // // - There are 7 data types in Javascript:

// // // //  1. String - A string is a sequence of characters enclosed in quotes. It can be single, double, or backticks.
// // // //       Example: "Hello World!", 'Welcome to the Javascript Crash Course!', `This is a string!`
// // // //      console.log("Hello World!" + "Welcome to the Javascript Crash Course!");
// // // //          ^Concatenation of strings (becomes one long string)^

// // // //            let string = "ASAP Frontend"
// // // //            console.log(string[string.length - 1])

// // // //     *All indexes start at 0, so the first character is at index 0, the second character is at index 1, and so on.*


// // // //  2. Number - A number is a numeric value that can be an integer or a floating-point number.
// // // //       Example: 42, 3.14, -10

// // // //      ! In javascript or programming in general, use * for multiplaction, use / for division, and the obvious +/-
// // // //      ! Programming also respects the order of operations


// // // //  3. Boolean - A boolean is a data type that can only have two values: true or false.
// // // //       Example: true, false


// // // //  4. Null - Null is a special value that represents the absence of any value. It is often used to indicate that a variable has no value or that an object property does not exist.
// // // //       Example: null

// // // //              ^ and ⌄ are the same thing. They just mean nothing. Also there is NaN "Not a number"


// // // //  5. Undefined - Undefined is a special value that represents the absence of a value. It is often used to indicate that a variable has not been assigned a value or that an object property does not exist.
// // // //       Example: undefined


// // // //  6. Symbol - A symbol is a unique and immutable data type that can be used as a key for object properties.
// // // //       Example: Symbol('mySymbol')


// // // //  7. Object - An object is a collection of key-value pairs. It can be used to store and organize data in a structured way.
// // // //       Example: { name: 'John', age: 30, city: 'New York' }


















// // // // Variables


// // // //  How do we create a variable?

// // // //   -----  1. Let

// // // //  let userEmail = "anthonyfakeemail@gmail.com";
// // // //  let age = 28;
// // // //  let name = "Anthony";

// // // //  age = age + 1;

// // // // console.log(age)



// // // //   -----  2. Const - you can not change value like when using variables
// // // //              When you assign a const a value thats it.

// // // // const points = 100

// // // // console.log(points)



// // // //  -----   3. Var (not really used anymore)





// // // // Mini Practice

// // // // Currency Converter
// // // // $AUD to $USD Formula
// // // // AUD = USD x 1.5

// // // let USD = 1200;
// // // let AUD = USD * 1.5;

// // // console.log(AUD /* Print out AUD to the console*/);





















// // // // Comparison Operators

// // // //  - Compare two values and return true or false.

// // // //      > Greater Than
// // // //      < Less Than
// // // //      >= greater than or equal to
// // // //      <= less than or equal to

























// // // //  Equality Comparison Operators

// // // //     == checks for equal values          '5' == 5 --> True
// // // //     === checks for equal values and types      '5' === 5 --> False !Recommended!

// // // let comparison = '4' == 4 // use "!" to negate

// // // console.log(comparison)

// // // let comparison2 = '4' === 4

// // // console.log(comparison2)























// // // // Conditionals
// // // //     - If and Else statements.


// // // // let hasMembership = false
// // // // let signedIn = true


// // // // if (hasMembership === true) {
// // // //     console.log('show user the video')
// // // // }
// // // // else if (signedIn === true) {
// // // //     console.log('Tell user to upgrade their account')
// // // // }
// // // // else {
// // // //     console.log('tell user to login')
// // // // }


// // // // let age = 12

// // // // if (age > 18) {
// // // //     console.log(`You're ${age} years old, you may enter the club`)
// // // // }
// // // // else if (age === 18) {
// // // //     console.log("You just turned 18, welcome!")
// // // // }
// // // // else {
// // // //    console.log(`You're ${age} years young, get outta here`)
// // // // }

















// // // // Logical Operators

// // // //  - && (and) [Checks if its left and right side are true.]
// // // //      - True && True --> True
// // // //      - False && True --> False
// // // //      - True && False --> False
// // // //      - False && Fale --> False

// // // // let age = 18
// // // // let hasId = false

// // // // if (age >= 18 && hasId == true) {
// // // // console.log("You may enter the club")
// // // // }

// // // //  - || (or) [Checks if either its left or right side are true.]
// // // //      - true || true --> true
// // // //      - false || true --> true
// // // //      - true || false --> true
// // // //      - false || false --> false

// // // // let age = 18
// // // // let hasId = true

// // // // if (age >= 18 && hasId) {
// // // //   console.log("You may enter the club")
// // // // }






















// // // // Falsey Values
// // // //  - A falsey value is considered false when converted into a boolean.

// // // //      - Undefined
// // // //      - null
// // // //      - NaN
// // // //      - 0
// // // //      - "" (empty string)
// // // //      - False
























// // // // Truthy Values
// // // //  - A truthy value is considered true when converted into a boolean.

// // // //  These include:
// // // //      - All numbers 1, 2, 3, ....
// // // //      - All strings that are NOT empty."agxfgc"
// // // //      - Empty arrays and objects. {} []
























// // // // Ternary Operator
// // // //  - A shortcut to write an if else statement
// // // //      - hasMembership ? "show video" : "hide video"
// // // //      - age >= 18 ? "You may enter" : "Too young"

// // // let isRaining = false;

// // // isRaining ? console.log('it is raining') : console.log("it is not raining");

// // // let loggedIn = true;
// // // let hasMembership = true;

// // // loggedIn && hasMembership ? console.log("show video") : console.log("don't show video");

// // // let str = loggedIn && hasMembership ? "show video" : "don't show the video"

// // // console.log(str)




























// // // // Loops
// // // //  - Loops just repeat the same code, over and over again. Until you give it a condition to stop!
// // // //       There are three kinds of loops:
// // // //          - for loop <---- Most used
// // // //          - while loop
// // // //          - do while loop




// // // // DRY - Don't repeat your code : Use for loop below

// // // // for (let i = 0; i < 20; i++ / i+= (2+) <--- increment as many times you want to loop ) {
// // // //     console.log(i)
// // // // }


// // // //  LETS PRECTICE !!!!

// // // // for (let i = 1; i <= 15; ++i) {
// // // //     if (i % 5 === 0) {
// // // //         console.log(`${i} - ASAP Frontend`)
// // // //     }
// // // //     else if (i % 2 === 0) {
// // // //         console.log(`${i} - Frontend`)
// // // //     }
// // // //     else {
// // // //         console.log(`${i} ASAP`)
// // // //     }
// // // // }




























// // // // // Print out characters in string

// // // // let string = "ASAP Frontend";

// // // // for (let i = 0; i < string.length; i++) {
// // // //     console.log(string[i]);
// // // // }








// // // // for (let i = 1; i <= 15; ++i) {
// // // //     if (i % 5 === 0) {
// // // //         console.log(`${ i } - ASAP Frontend`)
// // // //     }
// // // //     else if (i % 2 === 0) {
// // // //         console.log(`${ i } - Frontend`)
// // // //     }
// // // //     else {
// // // //         console.log(`${ i } - ASAP`)
// // // //     }
// // // // }




// // // // while (counter <= 20) {
// // // //     console.log(counter);
// // // //     counter = counter + 1;
// // // // }

// // // // console.log("while loop finished running")





























// // // // FUNCTIONS!!!!
// // // //  - Functions are reusable blocks of code that perform a specific task.

// // // // Do Not Repeat yourself. DRY!! DRY !!! DRY!!!

// // // // console.log("Hello Anthony")
// // // // console.log("Hello Zoey")
// // // // console.log("Hello Kai")


// // // // // This is the function declaration

// // // // function greetUser(name, time) {
// // // //     console.log(`Good ${time}, ${name}`);
// // // // }

// // // // // This is where you call the fuction
// // // // greetUser("Iman", "morning");
// // // // greetUser("John", "evening");

// // // // function main() {
// // // //     return "10"
// // // //     console.log('Hello World')
// // // // }

// // // // console.log(main())


// // // // The order of the values are !IMPORTANT!

// // // // function sum(num1, num2) {
// // // //     return num1 / num2
// // // // }

// // // // console.log(sum(15, 10))






// // // // Lets Practice

// // // // This is my solution that works

// // // // let num2 = 1.5

// // // // function convertUsdToAu(num1, num2) {
// // // //     return num1 * num2
// // // // }

// // // // console.log(product(1000, num2))




// // // // This is Iman's solution


// // // //  --- This is also a regular function


// // // // function convertUsdToAud(dollars) {
// // // //     return dollars * 1.5;
// // // // }


// // // // //  --- Arrow Function

// // // // const convertUsdToAud = (dollars) => {
// // // //     return dollars * 1.5
// // // // }


// // // // console.log(convertUsdToAud(200));






























// // // // Arrays
// // // //  - Data structure that lets you store multiple data values in a single variable. (most times not related to each other)


// // // // let item1 = "Apples"
// // // // let item2 = "Bananas"
// // // // let item3 = "Eggs"
// // // // let item4 = "Milk"

// // // let array = ["20", "15", "10", "30"]


// // // // Toggle first element in an array

// // // console.log(array[0])

// // // // Toggle last element in an array - Two Ways

// // // console.log(array[3])

// // // console.log(array[array.length - 1])






// // // // ------- Array Methods -----------


// // // .push - 1st method

// // // // .push adds to array (mutating method)

// // // array.push("Bread")


// // // array.filter filters out any elements based on its condition (non-mutating method)

// // // let filteredArray = array.filter((element) => {
// // //     console.log(element);
// // //     if (element <= 15) {
// // //         return true;
// // //     }
// // // });

// // // console.log(filteredArray)

// // // Cleaner way to run filtered array below.

// // // let filteredArray = array.filter(element => element <= 15);

// // // console.log(filteredArray)


// // // console.log(array)

// // // let array = ["18", "20", "16", "15", "21"]


// // // let filteredArray = array.filter(element => element >= 18);

// // // console.log(filteredArray)

// // // for (let i = 0; i < filteredArray.length; ++i) {
// // //     console.log(filteredArray[i])
// // // }

// // // --------- without using the .filtered---------

// // // // Let's do the same thing with out a filterd array.
// // // // Create a new emtpy array (called "x")
// // // // Check if age is 18+
// // // // True - add element to the new array
// // // // console.log "x" array.

// // // let adults = []

// // // for (let i = 0; i < array.length; ++i) {
// // //     if (array[i] >= 18) {
// // //         adults.push(array[i])
// // //     }
// // // }

// // // console.log(adults)

// // // let array2 = ["16", "17", "14", "15", "19"]


// // // let filteredArray2 = array2.filter(element => element >= 18);

// // // console.log(filteredArray2)



// // // let array3 = ["20", "22", "26", "16", "20"]

// // // let filteredArray3 = array3.filter(element => element >= 18)

// // // console.log(filteredArray3)











// // // // .map - 2nd method

// // // //  .map method - We use this when we want to turnt every single element in our array into something else.
// // // // .map is a non-mutating method

// // // let array = [1, 2, 3, 4, 5]

// // // let newArray = array.map((element) => 2);

// // // console.log(newArray)

// // // // lets practice :'(

// // // let usDollars = [10, 20, 30, 40];

// // // let auDollars = usDollars.map(function (element) {
// // //     return element * 1.5;
// // // })


// // // //  arrow function for .map

// // // // let auDollars = usDollars.map((element) => element * 1.5);




// // // ------- With out using the .map method --------



// // // // Create an empty array

// // // let auDollars = []

// // // // Loop through every element in usDollars array
// // // for (let i = 0; i < usDollars.length; i++) {
// // //     // Turn each element from USD to AUD, always use PUSH it makes the code cleaner and easier to READ!!!
// // //     auDollars.push(usDollars[i] * 1.5)
// // //     // Add each element onto auDollars array
// // // }

// // // // console.Log audDollars array
// // // console.log(auDollars)










// // //  OBJECTS
// // //  - Objects are data structures that lets you store multiple properties in a single variable. (most times are related, like a user's profile)

// // //  !! Not the same thing as an array !!

// // // let userEmal = "example@gmail.com"
// // // let userPassword = "test1234"
// // // let userName = "John Doe"
// // // let userDiscord = "examplediscord"
// // // let userSubscription = "VIP+"


// // let users = [
// //     {
// //         email: "example@gmail.com",
// //         password: "test1234",
// //         name: "John Doe",
// //         discord: "examplediscord",
// //         subscription: "VIP+",
// //         lessonsCompleted: [1, 2, 3],
// //     },
// //     {
// //         email: "tonywilliams@gmail.com",
// //         password: "test1234",
// //         name: "Tony Williams",
// //         discord: "tonycodes",
// //         subscription: "VIP+",
// //         lessonsCompleted: [1, 2, 3, 4, 5],
// //     },
// // ];

// // // console.log(users[0].lessonsCompleted.map(element => element * 3))



// // //  Lets Practice


// // //  ** Sign Up User Challenge
// // //  *
// // //  * Create a function that accepts the parameters
// // //  * - email
// // //  * - password
// // //  * - name
// // //  * - discord
// // //  * - subscription
// // //  * - lessonsCompleted
// // //  *
// // //  * Inside the Sign Up Function:
// // //  * - Use those parameters to create a user object
// // //  * - Push that object onto the 'users' array.



// // function signUp(email, password, name, discord, subscription, lessonsCompleted) {
// //     let newUser = {
// //         email: email,
// //         password: password,
// //         name: name,
// //         discord: discord,
// //         subscription: subscription,
// //         lessonsCompleted: lessonsCompleted,
// //     };

// //     users.push(newUser);
// // }

// // console.log(users)







// // // ---------- Document Object Model (DOM) ------------
// // //  The DOM allows us to interact with and change the content and styles of the elements on our webpage.


// // 1st Method

// // // gives the entire HTML document
// // console.log(document.querySelector) for class use full stop ".id" for ID use # "#Heading"


// // // Allows us to target a specific element within HTML document. (This is generally the preferred way)

// // console.log(document.querySelector('h1'))

// // // 2nd method

// // //  This method is only going to work if the element has an id like the first.

// // console.log(document.getElementById('heading'))


// // You can change the content of the inner HTML using .innerHTML (The line below shows how I changed the HTML header to "ASAP Frontend" using Javascript)
// // If you just want to add some content on top of it just add "+" in front of the equal.

// document.querySelector('h1').innerHTML += "ASAP Frontend"


// // Lets change CSS

// document.querySelector('h1').style.fontSize = "normal"


// // Event Listeners (when you take action you can run a javascript action)

// function changeButtonToGreen() {
//     document.querySelector('button').style.backgroundColor = "green"
// }


// // Change class names using Javascipt



function toggleSidebar() {
    (document.querySelector('body').classList).toggle("open")
}