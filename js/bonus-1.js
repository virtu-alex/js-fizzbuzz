/*BONUS 1:
Crea un elemento contenitore nel DOM e aggiungendo (attraverso il metodo append(), appendChild() o innerHTML) i vari elementi html con il numero o la stringa corretta da mostrare*/

const bonus = document.getElementById('bonus');
bonus.innerHTML = '<div>1</div>'

for (let i = 0; i < 100; i++) {
    if ((i + 1) % 3 == 0 && (i + 1) % 5 == 0) {
        console.log('FizzBuzz')
        bonus.appendChild('<div>FizzBuzz</div>')
    } else if ((i + 1) % 3 == 0) {
        console.log('fizz');
        bonus.appendChild('<div>Fizz</div>')
    } else if ((i + 1) % 5 == 0) {
        console.log('buzz')
        bonus.appendChild('<div>Buzz</div>')
    } else {
        console.log(i + 1);
        bonus.appendChild('<div>' + (i + 1) + '</div>')
    }
}



