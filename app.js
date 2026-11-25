
// question no 1

// var student = ['aliyan','ali','shbz','amjad','majeed'];


// student.push("hasan")
// student.push("aqeeb")

// console.log(student)

// question no 2

// var fruit = ['apple','banana','mango','orange','grapes','strawberry'];


// fruit.pop();

// console.log(fruit)


// question no 3

// var cities = ['lahore','karachi','islamabaad','multan','peshwar','qetta'];


// cities.shift()

// console.log(cities)

// question no 4

// var color = ['green','blue','red','pink'];

// color.unshift("darkblue" , "black")
// // color.unshift("black")


// console.log(color)

// question no 5

// var student = ['aliyan','shbz','amjad','hassan','hasan','irfan'];

// student.push("affan",'amir','talha')
// student.pop();
// student.pop();
// student.pop();



// console.log(student)


// question no 6

// var names = ["Ali", "Ahmed", "Jaffar", "Bilal", "Sufiyan"];

// var result = names.slice( 1 , 3)

// console.log(result)

// question no 7

// var names = ["Ali", "Ahmed", "Jaffar", "Bilal", "Sufiyan"];

// var result = names.slice(0 , 2)

// console.log(result)

// question no 8

// question no 49
// var names = ["Ali", "Ahmed", "Jaffar", "Bilal", "Sufiyan"];

// var result = names.splice(-2)

// console.log(result)

// question no 9

// var names = ["Ali", "Ahmed", "Jaffar", "Bilal", "Sufiyan"];

// names.splice(2 , 2)

// console.log(names)


// question no 10

// var names = ["Ali", "Ahmed", "Jaffar", "Bilal", "Sufiyan"];

// names.splice( 1 , 0 , "baloch",'joker')

// console.log(names)

// question no 11

// for(var i = 1 ; i <= 20 ; i++){

// console.log(i);

// }

// question no 12

// for(var i = 50 ; i >= 1 ; i--){

//    console.log(i);

// }


// question no 13

// for(var i = 1 ; i < 100 ; i++ ){

//     if(i%2 === 0){

//         console.log("It is a even Number "+i)
//     }else{
//         console.log("It is a odd Number "+i)

//     }



// }

// question no 14

//  for(var i = 1 ; i < 100 ; i++ ){

//     if(i%2 === 1){

//         console.log("It is a odd Number "+i)
//     }


// }

// question no 15

// for(var i = 1 ; i <=  10; i++){

//     document.write( ' <h1> '+ i +' x ' + i + " = " + (i*i) +' </h1> ')
       
// }


// for(var i = 1 ; i < 20 ; i++){

//     document.write('<h1>'+ 'Table ' + i +'</h1>')

//     for(var j = 1 ; j<=  10; j++){

        

//     document.write( ' <h1> '+ i +' x ' + j + " = " + (i * j) +' </h1> ')
       
// }
// }

// question no 16

// var num1 = 0 ;

// for( var i = 1 ; i <=  10 ; i++){

//      num1 += i 

//      console.log(num1)
   
// }

// question no 17

// for(var i = 1 ; i <= 50 ; i++){

//     if( i % 5 === 0){

//         console.log(i)


//     }


// }

// question no 18
 

// for(var i = 10 ; i <= 100 ; i+= 10){

//     console.log(i);


// }


// question no 19


// for(var i = 1; i <= 10 ; i++){


//    for(var j = 1; j <= i ; j++){
//     //    document.write( '<h1> '+ 1 +' </h1>')
//     document.write(j + " ");
    
//     }
//     document.write("<br>");

// }


// question no 20



// for(var i = 1; i <= 20 ; i++){

//     if( i === 10){
//         console.log(i)
//         break
//     }

// }


// question no 21

// var cities = ['karachi','lahore','islamabaad','multan','peshawar']

// for(var i = 0; i < cities.length ; i++){

//     console.log(cities[i])

// }


// question no 22

// var student = ['aliyan','ali','ramish','shbz','amjad','irfan'];

// var names = prompt('Enter Your Name')

// var ismatch = false ;


// for( var i = 0 ; i < student.length ; i++){

//       if(student[i] === names ){
        
//         console.log("Welcome "+ student[i])
//          ismatch = true ;

//         break

//       }

// }

// if(ismatch === false){
//         console.log('You enter a wrong name')
//       }


// question no 23


// var number = [10 ,20 , 30 , 40 , 50 , 60 , 70, 80 , 100];

// var total = 0 ;


// for(var i = 0; i < number.length ; i++){

//    total += number[i];


// }
// console.log(total)

// question no 24

// var number = [10 ,20 , 30 , 40 , 50 , 60 , 70, 80 , 100];

// // var total = 0 ;


// for(var i = 0; i < number.length ; i++){

//    if(i % 2 === 0){
//     console.log('Its a even number '+i)
//    }


// }

// question no 25

// var number = [10 ,20 , 30 , 40 , 50 , 60 , 70, 80 , 100];


// for(var i = 0; i < number.length ; i++){

//    if(i % 2 === 1){
//     console.log('Its a odd number '+i)
//    }


// }

// question no 26


// var number = [10 ,20 , 30 , 40 , 50 , 60 , 70, 80 , 90 , 100 ];



// for(var i = 0; i < number.length ; i++){

//    if(i % 5 === 0){
//     console.log('Its a divisible number '+i)
//    }


// }


// question no 27

// var cities = ["karachi", "lahore", "multan", "islamabad", "quetta"];

// // console.log(cities)


// for (var i = 0; i < cities.length; i++) {

//     if (cities[i] === "karachi") {
//         continue;
//     }

//     if (cities[i] === "multan") {
//         continue;
//     }

//     console.log(cities[i]); 

// }


// question no 28

// var student = ['aliyan','ali','ramish','shbz','amjad','irfan','rehan','zahid'];


// for (var i = 0; i < student.length; i++) {

//     if(i === 4){

//         console.log(i)
//         break
//     }

    

// }

// question no 29

// var number = [10 ,20 , 30 , 40 , 50 , 60 , 70, 80 , 90 , 100 ];

// var total ;

// for (var i = 0; i < number.length; i++) {

//     total = number[i] * 2 

//         console.log(total)
        

// }


// question no 30

// var number = [10 ,20 , 30 , 40 , 50 , 60 , 70, 80 , 90 , 100 ];

// for (var i = number.length - 1; i >= 0; i--) {

//     console.log(number[i])

    
// }

// question no 31

// function greet() {

//       console.log("hellow student")



// }

// greet()



// question no 32 

// function greet() {

//     var userName = prompt("Enter your name")

//     console.log("Welcome "+userName)

// }

// greet()

// question no 33

// function numbers() {

//     var num1 = 200 +300

//     console.log(num1)

// }

// numbers()

// question no 34

// function numbers() {

//     var num1 = 200  - 300

//     console.log(num1)

// }


// numbers()

// question no 35


// function numbers() {

//     var num1 = 20 * 30 * 100 ;

//     console.log(num1)

// }

// numbers()



// question no 36

// function numbers() {

//     var numbers = +prompt("Enter your number")
   
//     for( i = 1 ; i <= 10 ; i++ ){

//             document.write('<h1> '+ numbers + " x "+ i + ' = ' + (i * numbers) +'</h1>')
    
//    }
// }

// numbers()


// question no 37

// function numbers() {
    
//     var numbers = +prompt("entre number");


//     if(numbers % 2 === 0 ){

//         console.log("its is a even number "+numbers)
//     }else{

//         console.log("its is a odd number "+numbers)

//     }
   
// }

// numbers()


// question no 38


// function numbers(){
    
//     for(var i = 1 ; i <= 100 ; i++){

//         console.log(i)

//     }



// }
// numbers()

// question no 39

// function numbers(){
    
//     var num1 = +prompt("Enter a num1");
//     var num2 = +prompt("Enter a num2");


//     if (num1 > num2) {
//     console.log(num1);
//     }else {
//     console.log(num2);
//      }

//     // console.log("num1 "+num1)
//     // console.log("num2 "+num2)


// }

// numbers()

// question no 40

// function numbers(){

    
//     var num1 = prompt("Enter your name");
//     var num2 = +prompt("Enter your age");

//     console.log("your name "+ num1)
//      console.log("your age "+ num2)
    


// }

// numbers()


// question no 41

// var number = [10 ,20 , 30 , 40 , 50 , 60 , 70, 80 , 90 , 100 ];

// var total = 0 ; 


// for(var i = 0 ; i < number.length ; i++){

//     if(number[i] % 2 === 0){

//          total +=  number[i]

     

//     }else{

//          console.log("its is a odd number ")
        

//     }


// }

// question no 42

// var student = ['aliyan','ali','ramish','shbz','amjad','irfan','rehan','zahid'];

// student.push("majeed",'yousuf');
// // student.push();

// //   console.log(student);


// student.pop();
// student.pop();

// for(var i = 0 ; i < student.length ; i++){

//   console.log(student[i]);


// }


// question no 43

// var number = [10 ,20 , 25 , 30 , 40 , 50 , 60 , 70, 80 , 90 , 100 ];

// var isMatch = false ;

// for(var i = 0 ; i < number.length ; i++){

//     if(number[i] === 25){
//         isMatch = true;
//         console.log("Your number are here "+number[i])
//         break

//     }

   

// }
// if(isMatch === false){

//   console.log("Number are not here")
// }


// question no 44


// var arr = ["orange",'mango','banana','apple','strawberry','reach'];


// arr.splice(0 , 2 , "mineapple" , "lichi")


// console.log(arr)


// question no 45



// function student(){

// var arr = ["orange",'mango','banana','apple','strawberry','reach'];


// for( var i = 0 ; i < arr.length ; i++){


//   console.log(arr[i])

// }




// }

// student()

// question no 46

// function student(){

// var number = [10 ,20 , 25 , 30 , 40 , 50 , 60 , 70, 80 , 90 , 100 ];

// var total = 0;

// for( var i = 0 ; i < number.length ; i++){

//     total += number[i]
// //   console.log(arr[i])
//     // console.log("Total sum "+total)

// }

//     console.log("Total sum "+total)





// }

// student()


// question no 47
// var number = [10 ,20 , 25 , 30 , 40 , 50 , 60 , 70, 80 , 90 , 100 ];



// function student(number){


//     var oddNumber = [];
// // var total = 0;

// for( var i = 0 ; i < number.length ; i++){
     
//     if(number[i] % 2 === 1){

//      oddNumber.push(number[i]) ;

    
//     //   console.log("odd number "+oddNumber)
    

//     }
//     //   console.log("odd number "+oddNumber)

// }
//     //   console.log("odd number "+oddNumber)

//       console.log("odd number "+oddNumber)
//     //   console.log(oddNumber)

  
// }

// student(number)


// question no 48

// var arr = ["orange",'mango','banana','apple','strawberry','reach'];


// function student(arr){

//     for(var i = 0 ; i < arr.length ; i++ ){
            
//     console.log("Welcome "+arr[i])


//     }

// }

// student(arr)



// question no 49

// var number = [1 ,2 , 4 , 5 ,6 , 7 ,8 , 9, 10 , 11,12 ];

// function claculate(tableNumber , tableLength){

// for(var i = 1 ; i <= tableLength ; i++){
   

//     document.write('<h1>'+ tableNumber + 'x' + i + '=' + (tableNumber * i) +'</h1>')


// }


// }

//  claculate(8 , 10)



// question no 50

// var student = ['aliyan','shbz','amjad','hassan','hasan'];

// student.push("baloch","yousuf");

// student.pop();
// // student.pop();
// student.unshift("salam");

// student.splice(0 , 1 );

// var result = student.slice(0)


// function welcomeStudent(name){

//      console.log("Welcome " + name);

// }

// for (var i = 0; i < result.length; i++) {
//     welcomeStudent(result[i]);
// }


// question no 51



// function getValue(){

//     var input = document.getElementById("userName");

//     console.log(input.value)


// }


// question no 52


// function getValue(){

//     var input = document.getElementById("userName");

//     // console.log("Welcome to javascript")

//     input.value = "Welcome To Javascript"



// }

// question no 53



// function getValue(){

//     // input1.style.marginTop = '20px' ;

//     var input = document.getElementById("number1");
//     var input1 = document.getElementById("number2");

//     input1.style.marginTop = '20px' ;

//     var result = Number(input.value ) + Number(input1.value) ;

     
//     console.log(result)




// }


// question no 54


// function getValue(){

//     var input = document.getElementById("userName");

//     console.log("Welcome "+input.value)


// }

// question no 55


// function getValue(){

//     var input = document.getElementById("userName");

//     if(input.value % 2 === 0){
     
//         input.value = "it is  a even number"


//     }else{
//         input.value = "it is a odd number"
//     }

//     // console.log("Welcome "+input.value)


// }



// question no 56



// function getValue(){

//     // var tableNumber = +prompt("Enter a Table number (1 to 10)")
//     var input = document.getElementById("userName")


//     for ( var i = 1 ; i <= 10 ; i++){

//     document.write('<h1>'+ input.value + " x " + i + ' = ' +(input.value * i) +'</h1>')

//     }
// }



// question no 57


// function getValue(){

//     var input = document.getElementById("userName")

//     var student = ['aliyan','shbz','amjad','hassan','hasan'];
     
//     student.push(input.value)


    
//     for ( var i = 0 ; i < student.length ; i++){

//        document.write('<br> '+ student[i] +' </br>' )

//     }
// }


// question no 58

//   var student = ['aliyan','shbz','amjad','hassan','hasan'];


// function getValue(){

//     var paragraph = document.getElementById("result")

  
     
//     student.pop()

//      document.getElementById( "result" ).innerHTML = student;

    
    
// }

// question no 59


//  function getValue(){

//     var input = document.getElementById("userName")

//     input.value = "Saylani Mass IT Training"
     
   

    
    
// }

// question no 60

//  function getAddition(){

//     var input = document.getElementById("userName")
//     var input1 = document.getElementById("userName1")


//      var result = Number(input.value ) +  Number(input1.value );

//      console.log("Addition "+result)
 
    
// }

//  function getSubtraction(){

//     var input = document.getElementById("userName")
//     var input1 = document.getElementById("userName1")


//      var result = Number(input.value ) -  Number(input1.value );

//      console.log("Subtraction "+result)


// }
//  function getMultiplication(){

//     var input = document.getElementById("userName")
//     var input1 = document.getElementById("userName1")


//      var result = Number(input.value ) *  Number(input1.value );

//      console.log("Multiplication "+result)

    
// }
//  function getDivide(){

//     var input = document.getElementById("userName")
//     var input1 = document.getElementById("userName1")


//      var result = Number(input.value ) %  Number(input1.value );

//      console.log("Divide "+result)

    
// }