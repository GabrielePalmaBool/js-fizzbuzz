/*

    Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz”, al posto del numero e per i multipli di 5 stampi “Buzz”.
    Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


*/ 



// acquisisco 
const row = document.querySelector(".row");



for(let i = 1; i<=100; i++){


    // Primo if per verificare che il valore sia divisibile sia per 3 che per 5
    if( i%3 == 0 && i%5 == 0 ){
        console.log(i);

        // Creo il div completo
        const square = 

        '<div class="square" style="background-color: rgb(240, 70, 111);"><div class="text">fizzbuzz</div></div>';

        // aggiungo il div alla row di bootstrap
        row.innerHTML += square;
    }

    // Secondo else-if per verificare che il valore sia divisibile per 3 
    else if (i%3 == 0 ) {

         // Creo il div completo
         const square = 
         '<div class="square" style="background-color: rgb(12, 214, 161);"><div class="text">fizz</div></div>';
 
         // aggiungo il div alla row di bootstrap
         row.innerHTML += square;

    }

    // Terzo else-if per verificare che il valore sia divisibile per 5 
    else if (i%5 == 0){

         // Creo il div completo
         const square = 
         '<div class="square" style="background-color: rgb(255, 209, 102);"><div class="text">buzz</div></div>';
 
         // aggiungo il div alla row di bootstrap
         row.innerHTML += square;

    }

    // else finale per tutti gli altri casi
    else {

         // Creo il div completo con l'aggiunta del numero
         const square = 
         '<div class="square"><div class="label">' + i + '</div></div>';
 
         // aggiungo il div alla row di bootstrap
         row.innerHTML += square;

    }
     


}