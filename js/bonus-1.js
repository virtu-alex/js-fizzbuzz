/*BONUS 1:
Crea un elemento contenitore nel DOM e aggiungendo (attraverso il metodo append(), appendChild() o innerHTML) i vari elementi html con il numero o la stringa corretta da mostrare*/
const bonus = document.getElementById('bonus');
// bonus.innerHTML = '<div>1</div>'

for (let i = 0; i < 100; i++) {
    // crea un elemento div nel DOM
    let div = document.createElement("div");
    // attacca il div appena creato all'elemento bonus
    bonus.append(div);
    if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {
        console.log('FizzBuzz');
        // inserisce del testo nell'elemento div appena creato
        div.append('FizzBuzz');
    } else if ((i + 1) % 3 == 0) {
        console.log('fizz');
        div.append('Fizz');
    } else if ((i + 1) % 5 == 0) {
        console.log('buzz');
        div.append('Buzz');
    } else {
        console.log(i + 1);
        div.append((i + 1));
    }
}



