/*Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


AZIONE-1 : Stampare un numero in console (ripetere 100 volte);
AZIONE-2 : Stampa "fizz" quando il numero e' un multiplo di 3; (se divisibile *3 allora e' un suo multiplo)
AZIONE-3 : Stampa "buzz" quando il numero e' un multiplo di 5; (se divisibile *5 allora e' un suo multiplo)
AZIONE-4 : Stampa "fizzBuzz" quando il numero e' sia multiplo di 3 che di 5; (se divisibile *3 e *5 allora e' un suo multiplo)*/



// AZIONE-1 : Stampare un numero in console (ripetere 100 volte);


for (let i = 0; i < 100; i++) {
    /*AZIONE-2 : Stampa "fizz" quando il numero e' un multiplo di 3; (se divisibile *3 allora e' un suo multiplo)*/
    //AZIONE-3 : Stampa "buzz" quando il numero e' un multiplo di 5; (se divisibile *5 allora e' un suo multiplo)
    //AZIONE-4 : Stampa "fizzBuzz" quando il numero e' sia multiplo di 3 che di 5; (se divisibile *3 e *5 allora e' un suo multiplo)
    if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {
        console.log('FizzBuzz')
    } else if ((i + 1) % 3 == 0) {
        console.log('fizz');
    } else if ((i + 1) % 5 == 0) {
        console.log('buzz')
    } else {
        console.log(i + 1);
    }
}





