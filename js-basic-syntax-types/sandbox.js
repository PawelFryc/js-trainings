
// let age = 32;
// console.log(age);


//----STRINGS-----
// console.log('hello, world');
// let email = 'pawelfryc@gmail.com';
// console.log (email);


//----STRING CONCATENATION-----
// let firstName = 'Paweł';
// let lastName = 'Fryc';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);


//----GETTING CHARACTERS-----
// console.log(firstName[0] + ' ' + lastName[0]);


//----STRING LENGHT amount of characters in specific string-----
// console.log(firstName.length);
// //string methods/functions
// console.log(fullName.toUpperCase());


//----COMMON STRING METHODS-----
// let email = 'pawelfryc@gmail.com';
// let result = email.slice(0,9);
// console.log(result);


//---- MATH OPERATORS +, -, *, /, **(potęga), %
// console.log(10**2);


//----ORDER OF MATH OPERATIONS - (), **, / ,* , + , -
//  let result = 5 * (10-3)**2;
//  console.log(result);


//----SHORT HAND-----
// let likes = 10;
// likes=likes+1;
// likes++;

// likes=likes-1;
// likes--;

// likes+=10;
// likes-=5;
// likes*=2;
// likes/=2;


//----TEMPLATE STRINGS-----
// const title = 'My furnitures';
// const author = 'Mommy';
// const likes = 30;


//----CONCATONATION WAY-----
// let result = 'The blog called ' + title + ' by ' + author + ' has '+ likes + ' likes!';
// console.log(result);


//----TEMPLATE STRING WAY-----
// let result = `The blog called ${title} by ${author} has ${likes} likes!`
// console.log(result);


//---CREATING HTML TEMPLATES-----
// let HTML = `
// <h2>${title}</h2>
// <p>By ${author}</p>
// <span>This blog has ${likes} likes!</span>
// `;
// console.log(HTML);




//////////////////////ARRAYS - Tablice//////////////////////////

//  let ussers = ['Paweł', 'Tomek', 'Mateusz'];

 
//----CHANGING ARRAY ELEMENT-----
// ussers[0]= 'Andrzej';
//  console.log(ussers[0]);

 
//----COUNTING ARRAY ELEMENTS-----
//  console.log(ussers.length);

 

//----ARRAY METHODS-----
 //LICZENIE
//  let result = ussers.indexOf('Mateusz')
//ŁĄCZENIE
// let result = ussers.concat(['Izabela', 'Dorota']);
//DODAWANIE
// let result = ussers.push('Andrzej');

//  console.log(ussers);




 //////////////////////NULL-UNDEFINED//////////////////////////
//-----UNDEFINED-----
// let age;
// console.log(age); 
//-----NULL-----
// let age = null;
// console.log(age)



 //////////////////////BOOLEANS - TRUE/FALSE //////////////////////////
//-----METHODS CAN RETURN BOOLEANS
// let email = 'pawelfryc@gmail.com';
// let names = ['Paweł', 'Tomek', 'Mateusz'];

// // let result = email.includes('@gmail.com');
// let result = names.includes('Andrzej');
// console.log(result);


//-----COMPARISON OPERATORS (loose)-----
// "==" czy wiek jest równy 33
// "!=" czy wiek nie jest równy 33
// ">" czy wiek jest większy niż 33
// "<" czy wiek jest mniejszy niż 33
// "<=" czy wiek jest równy lub mniejszy niż 33
// ">=" czy wiek jest równy lub większy niż 33

// let age = 33;
// console.log(age==33);
// console.log(age!=33);
// console.log(age>33);
// console.log(age<33);
// console.log(age<=33);
// console.log(age>=33);


//-----LOOSE COMPARISON (different types can still be equal)-----
// console.log(age == 33); - true
// console.log(age == '33'); - true


//-----STRICT COMPARISON (diffrent types cannot be equal)-----
// console.log(age===33) - true
// console.log(age==='33') -false
// console.log(age!==33) - true
// console.log(age!=='33') - false




//////////////////////TYPE CONVERSION - konwersja z jednego typu na drugi (ciągi na liczby)//////////////////////////

// let score = '100';
// score = Number(score)
// console.log(score + 1);

//-----CHECKING A TYPE OF OPERATOR-----
// console.log(typeof score);

////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////CONTROL FLOW - LOOPS and CONDICTIONS///////////////////////////////////////////////////////

//----- "for" LOOPS-----

//BUDOWA - for(początkowa zmienna;warunek;końcowe wyrażenie[iteracja])
//dla(i=0; jeśli i jest mniejsze niż 5;dodaj jeden do i)

// for(let i = 0; i < 5; i++){
// console.log('in loop', i)
// }
// console.log('loop finished')
 

//-----Loops in database-----
// const names = ['Tomek', 'Paweł', 'Mateusz', 'Andrzej']
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }


//-----While loops - robią dokładnie to samo co for loops, różnią się tylko składnią.
//Można przez nie stworzyć nieskończoną pętle, która wykrzaczy przeglądarkę, ponieważ brakuje w nich
//początkowej zmiennej i końcowego wyrażenia. Aby tego uniknąć początkową zmienną określamy wcześniej a 
//końcowe wydarzenie dodajemy w kodzie pętli, po logowaniu.

// let i = 0
// while(i<5){
//     console.log('in loop ', i);
//     i++
// }


//////////////////////"IF" STATEMENTS///////////////////////////////////////////////////////

// const age = 19;

// if(age > 18){
//     console.log('You are able to buy a Vodka in Poland');
// }

// const age = 17;

// if(age >= 17){
//     console.log('You are able to go to war, and kill people for USA');
// }

// const Fryce = ["Andrzej", "Paweł","Mateusz","Tomek"]

// if(Fryce.length >= 4) {
//     console.log("That's a lot of Fryce");
// }

// const password = "Admin123"

// if(password.length >=8) {
//     console.log("Password is long enough!")
// }


///-----Else if Statments-----

// const password = "Admin123"

// if(password.length >=8) {
//     console.log("Password is long enough!")
// } 
// else {
//     console.log("Password is to short!")
// }

//----- Multiple different condictions of ELSE IF------

const password = "Admin1234567"

if(password.length >= 10){
    console.log("That's a mighty password!")
} else if(password.length >=8) {
    console.log("Password is long enough!")
} 
else {
    console.log("Password is to short!")
}